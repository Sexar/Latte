module latte{

    export interface DataRecordArrayCallback { (records:Array<DataRecord>): void }
    export interface DataRecordCallback { (record:DataRecord): void }
    export interface VoidCallback { (): any }

    /**
     * Represents a DataRecord on App
     **/
    export class DataRecord {

        //region Static

        /**
         * Pointer to the default namespace where records are stored, used by <c>fromServerObject</c> method for selecting records.
         **/
        static _defaultRecordsNamespace: Object;

        /**
         * Name of object where records are stored
         */
        static recordsNamespaceName: string = 'latte';

        /**
         * Scans the passed Object and converts available packed records to latte.DataRecord
         instances
         **/
        static scanAndConvert(obj:any):any {

            if ( obj && _isObject(obj) || _isArray(obj)) {
                if (latte.DataRecord.isPackedRecord(obj)) {
                    obj = latte.DataRecord.fromServerObject(obj);

                } else {
                    for (var i in obj) {
                        obj[i] = latte.DataRecord.scanAndConvert(obj[i]);
                    }
                }
            }

            return obj;

        }

        /**
         * Sets the default records namespace, and injects common code into records.
         **/
        static setDefaultRecordsNamespace(namespace: Object) {

            latte.DataRecord._defaultRecordsNamespace = namespace;

            for (var symbol in namespace) {
                // Set record name
                namespace[symbol].recordType = symbol;

                // Copy static methods
                namespace[symbol].fromServerObject = latte.DataRecord.fromServerObject;
                namespace[symbol].fromServerObjects = latte.DataRecord.fromServerObjects;
            }

        }

        /**
         * Creates a record from the specified name and id. If no id is specified, empty record will arrive.
         **/
        static fromName(name:string, id:number, callback: DataRecordCallback) {


            var m = new latte.Message('_core', 'DataLatteUa', 'recordSelect',
                {name: name, id: id})
                .send( (record: DataRecord) => {

                    // Execute callback with record
                    callback(record);

                });

            return m;

        }

        /**
         * Converts a server given Object to a Record of the specified type, if no type specified <c>DataRecord</c> will be used.
         **/
        static fromServerObject(obj: any, classType: Function = null):DataRecord {

            var dns = latte.DataRecord._defaultRecordsNamespace ? latte.DataRecord._defaultRecordsNamespace : (_isObject(window[DataRecord.recordsNamespaceName]) ? window[DataRecord.recordsNamespaceName] : null);
            var rt = obj.recordType;
            var type = _isFunction(classType) ? classType : ( _isFunction(dns[rt]) ? dns[rt] : DataRecord);
            var record = new type();
            var i, j;

            if (!latte.DataRecord.isPackedRecord(obj)){
                throw new latte.Ex();
            }

            for (i in obj.fields)
                record[i] = obj.fields[i];


            record.recordType = obj.recordType;
            record.recordId = obj.recordId;

            if (obj.metadata) {
                // Metadata, if any
                record.metadata = obj.metadata || {};
            }

            // If record contains properties
            if (!_undef(obj['properties'])) {

                for (i in obj.properties) {

                    // If property is an array
                    if (_isArray(obj.properties[i])) {

                        // Check if contains records
                        for (j = 0; j < obj.properties[i].length; j++) {
                            obj.properties[i][j] = latte.DataRecord.fromServerObject(obj.properties[i][j]);
                        }
                    }

                    // If property is a record
                    if (obj.properties[i] && obj.properties[i]['type'] == 'DataRecord') {
                        // Unpack
                        record[i] = latte.DataRecord.fromServerObject(obj.properties[i]);

                    } else {
                        // Or, Assign as it is
                        record[i] = obj.properties[i];
                    }
                }
            }

            return record;

        }

        /**
         * Converts a server given array of Object to a Records array
         **/
        static fromServerObjects(array: Array<Object>, classType: Function = null): Array<DataRecord> {


            if (!_isArray(array)) throw new latte.InvalidArgumentEx('array', array);

            var a = [];

            for (var i = 0; i < array.length; i++) {
                a.push(latte.DataRecord.fromServerObject(array[i], classType));
            }

            return a;

        }

        /**
         * Returns a value indicating if the passed Object
         is a packed Object
         **/
        static isPackedRecord(object: any):boolean {

            return _isObject(object)
                && object.type == 'DataRecord'
                && !_undef(object.recordType);

        }
        //endregion

        //region Fields
        /**
         *
         **/
        private _recordId:number;

        /**
         *
         **/
        public _recordType: string;

        /**
         *
         **/
        private _tag: any;

        /**
         * Arbitrary collection of tags
         */
        tags: any = {};

        /**
         * Metadata of record. Comes from server.
         **/
        metadata:any;

        /**
         * Raised before a form for this record is created.
         **/
        _formCreating:LatteEvent;

        /**
         * Raised when a form for this record has been created and filled with record fields.
         **/
        _formCreated:LatteEvent;

        /**
         * Raised before a view for this record is created.
         **/
        _viewCreating:LatteEvent;

        /**
         * Raised when a view for this record has been created and filled with record fields.
         **/
        _viewCreated:LatteEvent;
        //endregion

        /**
         * Creates the record
         **/
        constructor() {

            /**
             * Initialize empty the fields of record
             */
            var metadata = this.getMetadata();

            if (metadata && _isObject(metadata.fields)) {
                for (var i in metadata.fields) {
                    this[i] = '';
                }
            }


        }

        //region Methods

        /**
         * Creates a view for displaying the record
         **/
        createView():View {

            return new DataRecordFormView(this);

        }

        /**
         * Gets the fields of the record, with values
         **/
        getFields():Object {
            var f = {};
            var metadata = this.getMetadata();

            if (metadata && metadata.fields) {
                for (var i in metadata.fields) {
                    f[i] = this[i] || null;
                }
            }
            return f;
        }

        /**
         * Can be overriden to return dynamically generated metadata
         **/
        getMetadata(): any {

            return this.metadata;

        }

        /**
         * Sends an insert message to the server
         **/
        insert(callback: VoidCallback): latte.Message {

            return this.insertCall().send(( ) => {
                if(_isFunction(callback)){
                    callback();
                }
            });

        }

        /**
         * Gets the remote call for insertion
         *
         * @returns {latte.RemoteCall}
         */
        insertCall(): RemoteCall<string>{


            var values = this.getFields();

            // Change null values to empty values
            for (var i in values){
                if (values[i] === null){
                    values[i] = '';
                }
            }

            // Create call
            var call = new RemoteCall<string>(this.moduleName, 'DataLatteUa', 'recordInsert', {name: this.recordType, fields: values});

            // Catch auto-id
            call.success.add((data: string) => {
                this.recordId =  parseInt(data, 10);
                this[this.onGetRecordIdName()] = this.recordId;

            });

            return call;
        }

        /**
         * Returns a value indicating if the record is inserted, based on the existence of id
         **/
        inserted():boolean {

            return this.recordId > 0;

        }

        /**
         * Raises the <c>formCreated</c> event
         **/
        onFormCreated(form:DataRecordFormItem) {

            if(this._formCreated){
                this._formCreated.raise(form);
            }

        }

        /**
         * Raises the <c>formCreating</c> event
         **/
        onFormCreating(form:DataRecordFormItem) {

            if(this._formCreating){
                this._formCreating.raise(form);
            }

        }

        /**
         * Gets the name of the id field
         * @returns {undefined}
         */
        onGetRecordIdName(): string{
            return undefined;
        }

        /**
         * Raises the <c>viewCreated</c> event
         **/
        onViewCreated(view:View) {

            if(this._viewCreated){
                this._viewCreated.raise(view);
            }


        }

        /**
         * Raises the <c>viewCreating</c> event
         **/
        onViewCreating(view:View) {

            if(this._viewCreating){
                this._viewCreating.raise(view);
            }
        }

        /**
         * Sends a DELETE request to the server
         **/
        remove(callback:() => any){

            return this.removeCall().send(( ) => {
                if(_isFunction(callback)){
                    callback();
                }
            });

        }

        /**
         * Gets the call for removing this record
         * @returns {latte.RemoteCall}
         */
        removeCall(): RemoteCall<boolean>{
            return new RemoteCall<boolean>(this.moduleName, 'DataLatteUa', 'recordDelete', {name: this.recordType, id: this.recordId});
        }

        /**
         * Inserts or updates the record
         **/
        save(callback:VoidCallback):latte.Message {

            return this.saveCall().send(( ) => {
                if(_isFunction(callback)){
                    callback();
                }
            });
        }

        /**
         * Gets the insert or update call for record
         */
        saveCall(): RemoteCall<any>{
            if (this.recordId){
                return this.updateCall();
            }
            else{
                return this.insertCall();
            }
        }

        /**
         * Sends an update message to the record
         **/
        update(callback:VoidCallback): Message {

            return this.updateCall().send(( ) => {
                if(_isFunction(callback)){
                    callback();
                }
            });

        }

        /**
         * Gets the call for updating the record
         *
         * @returns {latte.RemoteCall<string>}
         */
        updateCall(): RemoteCall<string>{

            var values = this.getFields();

            // Change null values to empty values
            for (var i in values){
                if (values[i] === null){
                    values[i] = '';
                }
            }

            // Create call
            var call = new RemoteCall<string>(this.moduleName, 'DataLatteUa', 'recordUpdate', {name: this.recordType, id: this.recordId, fields: values});

            return call;
        }
        //endregion

        //region Properties

        /**
         * Property field
         */
         _moduleName:string;

        /**
         * Gets or sets the name of the module where record is contained
         *
         * @returns {string}
         */
        public get moduleName():string {
            return this._moduleName;
        }

        /**
         * Gets or sets the name of the module where record is contained
         *
         * @param {string} value
         */
        public set moduleName(value:string) {
            this._moduleName = value;
        }

        /**
         * Gets an event raised when a form about the record is solicited
         * @returns {LatteEvent}
         */
        get formCreating(): LatteEvent{
            if(!this._formCreating){
                this._formCreating = new LatteEvent(this);
            }

            return this._formCreating
        }

        /**
         * Gets an event raised when a form about the record has been created
         * @returns {LatteEvent}
         */
        get formCreated(): LatteEvent{
            if(!this._formCreated){
                this._formCreated = new LatteEvent(this);
            }

            return this._formCreated
        }

        /**
         * Gets or sets the record id
         **/
        get recordId():number {
            return this._recordId;
        }

        /**
         * Gets or sets the record id
         **/
        set recordId(value:number) {
            this._recordId = value;


        }

        /**
         * Gets or sets the record type
         **/
        get recordType():string {
            return this._recordType;
        }

        /**
         * Gets or sets the record type
         **/
        set recordType(value: string) {
            this._recordType = value;
        }

        /**
         * Gets or sets an arbitrary value for the record
         **/
        get tag():string {
            return this._tag;
        }

        /**
         * Gets or sets an arbitrary value for the record
         **/
        set tag(value:string) {
            this._tag = value;
        }

        /**
         * Gets an event raised when a View about the record has been created
         * @returns {LatteEvent}
         */
        get viewCreated(): LatteEvent{
            if(!this._viewCreated){
                this._viewCreated = new LatteEvent(this);
            }

            return this._viewCreated
        }

        /**
         * Gets an event raised when a View about the record is being requested
         * @returns {LatteEvent}
         */
        get viewCreating(): LatteEvent{
            if(!this._viewCreating){
                this._viewCreating = new LatteEvent(this);
            }

            return this._viewCreating
        }
        //endregion


    }
}