module latte{
    /**
     * Renders an item to input data from user.
     **/
    export class InputItem extends ValueItem{


        //region Static
        /**
         * Gets a formatted string of the value depending on the type
         **/
        static format(value: any, type: string, options: any = null): string{

            switch(type){
                case 'boolean':
                    return value === true || value === 1 ? strings.yes : strings.no;

                case 'record-combo':

                    // IMPORTANT: Do not modify call of literal
                    // This is necessary to compile without data module
                    var c = new latte['DataRecordCollection']();

                    // Try to prepare collection
                    if(options)
                        try{ c.add(options); }catch(e){ throw new InvalidArgumentEx('value'); }

                    var r = c.byId(value);

                    if(r) return r.getMetadata().name;
                    return value;
                case 'combo':
                    if((_isArray(options) ||  (typeof options === 'object'))&& !_undef(options[value]))
                        return options[value];
                    return value;
                default:
                    return value;
            }

        }

        /**
         * Creates the input item from a caption and a value item
         *
         * @param text
         * @param item
         */
        static fromItem(text: string, item: ValueItem): InputItem{

            var input = new InputItem(text, 'custom');

            input.valueItem = item;

            return input;

        }
        //endregion

        /**
         * Stores options
         */
        private _options: any;

        /**
         *
         **/
        private _direction: Direction;

        /**
         *
         **/
        private _name: string;

        /**
         *
         **/
        private _readOnly: boolean;

        /**
         *
         **/
        private _separator: boolean;

        /**
         *
         **/
        private _type: string;

        /**
         *
         */
        private _textWidth: number = 0.2;

        /**
         *
         **/
        private _valueItem: ValueItem;

        /**
         * Points to the label where text is stored
         **/
        label: LabelItem;

        /**
         * Points to the label where read-only elements are shown
         **/
        readOnlyLabel: LabelValueItem;

        /**
         * Points to separator element
         **/
        separatorElement: JQuery;

        /**
         * Points to the DOM element where <c>labelElement</> is contained, i.e. the text side.
         **/
        textElement: JQuery;

        /**
         * Points to the DOM element where the value is shown, i.e. the value side
         **/
        valueElement: JQuery;

        /**
         * Creates the input element
         **/
        constructor(text: string = '', type: string = '', value: any = null, readOnly: boolean = false, name: string = null){


            super();
            this.element.addClass('input');

            // Create elements
            this.textElement = $('<div>').addClass('text').appendTo(this.element).hide();
            this.valueElement = $('<div>').addClass('value').appendTo(this.element);
            this.separatorElement = $('<div>').addClass('separator').appendTo(this.element);
            this.element.clear();

            // Create items
            this.label = new LabelItem();
            this.label.appendTo(this.textElement);
            this.readOnlyLabel = new LabelValueItem();
            this.readOnlyLabel.appendTo(this.valueElement);
            this.readOnlyLabel.addClass('read-only')
            this.readOnlyLabel.visible = (false);

            // Default props
            this.type = 'string';
            this.direction = View.smallScreen ? Direction.VERTICAL : Direction.HORIZONTAL;

            if(text) this.text = (text);
            if(type) this.type = (type);
            if(value) this.value = (value);
            if(readOnly) this.readOnly = (readOnly);
            if(name) this.name = name;

        }

        //region Methods
        /**
         * Checks if the current value is valid for the field <c>type</c>
         **/
        isValid(): boolean{

            var value = this.value;

            switch(this.type()){
                case "integer":
                    var allowed = "1234567890";
                    for(var i = 0; i < value.length; i++)
                        if(allowed.indexOf(value.charAt(i)) < 0)
                            return false;

                    return true;

                case  "number":
                case  "float":
                    return !isNaN(value);

            }

            return true;

        }

        /**
         *
         **/
        onLayout(){

            super.onLayout();

            this.valueItem.onLayout();

        }

        onValueChanged(){
            super.onValueChanged();

            if(this.readOnly){
                this.readOnly = this.readOnly;
            }
        }

        /**
         * Override
         * @returns {string}
         */
        getValueString(): string{
            if(this.valueItem){
                return this.valueItem.valueString;
            }else{
                return super.getValueString();
            }
        }

        //endregion

        //region Properties
        /**
         * Gets or sets the direction of input.
         **/
        get direction(): Direction{
            return this._direction;
        }

        /**
         * Gets or sets the direction of input.
         **/
        set direction(value: Direction){


            if(value !== Direction.VERTICAL && value !== Direction.HORIZONTAL)
                throw new InvalidArgumentEx('value', value);

            if(value === Direction.VERTICAL){
                this.element.removeClass('horizontal').addClass('vertical');
            }else{
                this.element.removeClass('vertical').addClass('horizontal');
            }

            this._direction = value;



        }

        /**
         * Gets or sets the name of the input
         **/
        get name(): string{
            return this._name;
        }

        /**
         * Gets or sets the name of the input
         **/
        set name(value: string){


            this._name = value;


        }

        /**
         * Gets or sets the options of the control
         **/
        get options(): any{
            return this._options;
        }

        /**
         * Gets or sets the options of the control
         **/
        set options(value: any){


            if(this.valueItem instanceof ComboItem){
                (<ComboItem>this.valueItem).options = (value);
            }

            if(this.valueItem instanceof RadioGroup){
                (<RadioGroup>this.valueItem).options = (value);
            }

            this._options = value;

        }

        /**
         * Gets or sets a value indicating if the input is read-only
         **/
        get readOnly(): boolean{

            return this._readOnly;
        }

        /**
         * Gets or sets a value indicating if the input is read-only
         **/
        set readOnly(value: boolean){


            if(!_isBoolean(value))
                throw new InvalidArgumentEx('value', value);

            this._readOnly = value;

            // Switch visibility
            this.readOnlyLabel.value = (this.valueItem.valueString);
            this.readOnlyLabel.visible = (value);
            this.valueItem.visible = (!value);



        }

        /**
         * Gets or sets a value indicating if the input has a separator on bottom
         **/
        get separator(): boolean{
            return this._separator;
        }

        /**
         * Gets or sets a value indicating if the input has a separator on bottom
         **/
        set separator(value: boolean){


            if(!_isBoolean(value))
                throw new InvalidArgumentEx('value', value);

            this._separator = value;

            if(value){
                this.separatorElement.show();
            }else{
                this.separatorElement.hide();
            }



        }

        /**
         * Gets ors ets the text of the input
         **/
        get text(): string{
            return this.label.text;
        }

        /**
         * Gets ors ets the text of the input
         **/
        set text(value: string){


            this.label.text = (value);

            if(!this.textVisible)
                this.textVisible = (true);



        }

        /**
         * Gets or sets a value indicating if the text section is visible
         **/
        get textVisible(): boolean{
            return this.textElement.is(':visible');
        }

        /**
         * Gets or sets a value indicating if the text section is visible
         **/
        set textVisible(value: boolean){


            if(value){
                this.textElement.show();
                this.element.removeClass('no-text');
            }
            else{
                this.textElement.hide();
                this.element.addClass('no-text');
            }



        }

        /**
         * Gets or sets the with of the text part. Use value lower than 1 for percentages.
         * Note that when horizontal input, layout may become affected.
         *
         * @returns {number}
         */
        get textWidth(): number{
            return this._textWidth;
        }

        /**
         * Gets or sets the with of the text part.
         * Value must be percent since it must be leveled with value part. Value size will be adjusted
         * to 5% less large than it should to avoid edge collisions.
         * Values lower than 1 accepted.
         * Note that when horizontal input, layout may become affected.
         *
         */
        set textWidth(value: number){
            this._textWidth = value;

            if(value < 0){
                this.textElement.css('width', (value * 100) + '%');
                this.valueElement.css('width', ((100 - value - 0.05) * 100) + '%');
            }else{
                this.textElement.css('width', (value) + '%');
                this.valueElement.css('width', ((value - 0.1)) + '%');
            }

            this.onLayout();
        }

        /**
         * Gets or sets the type of the input.
         Possible values are: <c>auto</c> | <c>string</c> | <c>text</c> |
         <c>html</c> | <c>number</c> | <c>integer</c> | <c>float</c> |
         <c>boolean</c> | <c>password</c> | <c>md5-password</c> | <c>date</c> |
         <c>time</c> | <c>enumeration</c> | <c>combo</c> | <c>record-combo</c> | <c>flags</c> |
         <c>file</c> | <c>image</c> | <c>custom</c>

         If input is to be a type (function), it must inherit from <c>latte.ui.ValueItem</c>
         **/
        get type(): any{
            return this._type;
        }

        /**
         * Gets or sets the type of the input.
         Possible values are: <c>auto</c> | <c>string</c> | <c>text</c> |
         <c>html</c> | <c>number</c> | <c>integer</c> | <c>float</c> |
         <c>boolean</c> | <c>password</c> | <c>md5-password</c> | <c>date</c> |
         <c>time</c> | <c>enumeration</c> | <c>combo</c> | <c>record-combo</c> |
         <c>radio</c> | <c>flags</c> | <c>file</c> | <c>image</c> | <c>custom</c>

         If input is to be a type (function), it must inherit from <c>latte.ui.ValueItem</c>
         **/
        set type(value: any){


            var item: any = null;

            this._type = value;

            if(_isFunction(value)){

                item = new value();
//                log("Created %s", value.toString())
                if(!(item instanceof ValueItem))
                    throw new InvalidArgumentEx('value');

            }else{

                switch(value){
                    case "auto":
                    case "label":
                        item = new LabelValueItem();
                        break;

                    case "string":
                        item = new TextboxItem();
                        break;

                    case "text":
                        item = new TextboxItem();
                        item.multiline = (true);
                        break;

                    case "html":
                        item = new HtmlEditorItem();
                        break;

                    case "number":
                        item = new TextboxItem();
                        break;

                    case "integer":
                        item = new TextboxItem();
                        break;

                    case "float":
                        item = new TextboxItem();
                        break;

                    case "boolean":
                        item = new CheckboxItem();
                        break;

                    case "password":
                        item = new TextboxItem();
                        item.password = (true);
                        break;

                    case "md5-password":
                        item = new TextboxItem();
                        item.password = (true);
                        break;

                    case "date":
                        item = new DatePickerItem();
                        break;

                    case "time":
                        item = new TimePickerItem();
                        break;

                    case "datetime":
                        item = new DatePickerItem();
                        item.timeVisible = (true);
                        break;

                    case "enumeration":
                        item = new ComboItem();
                        break;

                    case "combo":
                        item = new ComboItem();
                        break;

                    case "radio":
                        item = new RadioGroup();
                        break;

                    case "record-combo":
                        item = new ComboItem();
                        break;

                    case "flags":
                        item = new LabelValueItem();
                        break;

                    case "color":
                        item = new ColorValueItem();
                        break;

                    case "file":
                        item = new FileValueItem();
                        break;

                    case "image":
                        item = new LabelValueItem();
                        break;

                    case "custom":
                        item = new LabelValueItem();
                        break;

                    case "record":
                        // IMPORTANT: Do not modify call of literal
                        // This is necessary to compile without data module
                        item = new latte['DataRecordValueItem']();
                        break;
                    default:
                        throw new InvalidArgumentEx('value');
                }
            }

            if(item instanceof ValueItem) {
                this.valueItem = (item);
            }else{
                throw new InvalidCallEx("What the hey?");
            }

        }

        /**
         * Gets or sets the value of the input
         **/
        get value(): any{
            return this.valueItem.value;
        }

        /**
         * Gets or sets the value of the input
         **/
        set value(value: any){

            this.valueItem.value = (value);
            this.readOnlyLabel.value = (this.valueItem.valueString);

        }

        /**
         * Gets or sets the valueItem of the input
         **/
        get valueItem(): ValueItem{
            return this._valueItem;
        }

        /**
         * Gets or sets the valueItem of the input
         **/
        set valueItem(value: ValueItem){


            if(!(value instanceof ValueItem))
                throw new InvalidArgumentEx('value', value);

            if(this._valueItem)
                this._valueItem.element.remove();

            this._valueItem = value;
            this.valueElement.append(value.element);

            value.valueChanged.add(()=>{this.onValueChanged()});



        }
        
        //endregion

    }
}