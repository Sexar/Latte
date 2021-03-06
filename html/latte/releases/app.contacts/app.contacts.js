var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var latte;
(function (latte) {
    var categoryBase = (function (_super) {
        __extends(categoryBase, _super);
        function categoryBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'Category';
            /* Name of Module where record lives */
            this._moduleName = 'app.contacts';
            /**
             * Database field: int(11)
             */
            this._idcategory = null;
            /**
             * Database field: varchar(128)
             */
            this._name = null;
            /**
             * Database field: int(11)
             */
            this._i = null;
        }
        Object.defineProperty(categoryBase.prototype, "idcategory", {
            /**
             * Gets or sets the value of the idcategory field of type int(11)
             */
            get: function () {
                return this._idcategory;
            },
            /**
             * Gets or sets the value of the idcategory field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idcategory;
                this._idcategory = value;
                if (changed) {
                    this.onIdcategoryChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(categoryBase.prototype, "idcategoryChanged", {
            /**
             * Gets an event raised when the value of the idcategory property changes
             */
            get: function () {
                if (!this._idcategoryChanged) {
                    this._idcategoryChanged = new latte.LatteEvent(this);
                }
                return this._idcategoryChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idcategoryChanged</c> event
         */
        categoryBase.prototype.onIdcategoryChanged = function () {
            if (this._idcategoryChanged) {
                this._idcategoryChanged.raise();
            }
            this.onFieldValueChanged('idcategory', this.idcategory);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        categoryBase.prototype.onGetRecordIdName = function () { return 'idcategory'; };
        Object.defineProperty(categoryBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(categoryBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        categoryBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        Object.defineProperty(categoryBase.prototype, "i", {
            /**
             * Gets or sets the value of the i field of type int(11)
             */
            get: function () {
                return this._i;
            },
            /**
             * Gets or sets the value of the i field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._i;
                this._i = value;
                if (changed) {
                    this.onIChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(categoryBase.prototype, "iChanged", {
            /**
             * Gets an event raised when the value of the i property changes
             */
            get: function () {
                if (!this._iChanged) {
                    this._iChanged = new latte.LatteEvent(this);
                }
                return this._iChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>iChanged</c> event
         */
        categoryBase.prototype.onIChanged = function () {
            if (this._iChanged) {
                this._iChanged.raise();
            }
            this.onFieldValueChanged('i', this.i);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        categoryBase.prototype.onGetFields = function () { return { 'idcategory': this.idcategory, 'name': this.name, 'i': this.i }; };
        /*
         * Remote Method.

         */
        categoryBase.fullCatalog = function () {
            return new latte.RemoteCall('app.contacts', 'Category', 'fullCatalog', {});
        };
        return categoryBase;
    }(latte.DataRecord));
    latte.categoryBase = categoryBase;
    var personBase = (function (_super) {
        __extends(personBase, _super);
        function personBase() {
            _super.apply(this, arguments);
            /* Name of Php record */
            this._recordType = 'Person';
            /* Name of Module where record lives */
            this._moduleName = 'app.contacts';
            /**
             * Database field: int(11)
             */
            this._idperson = null;
            /**
             * Database field: int(11)
             */
            this._idcategory = null;
            /**
             * Database field: varchar(128)
             */
            this._title = null;
            /**
             * Database field: varchar(128)
             */
            this._name = null;
            /**
             * Database field: varchar(128)
             */
            this._lastname = null;
            /**
             * Database field: date
             */
            this._birth = null;
            /**
             * Database field: varchar(10)
             */
            this._sex = null;
            /**
             * Database field: varchar(255)
             */
            this._address = null;
            /**
             * Database field: varchar(128)
             */
            this._phone = null;
            /**
             * Database field: varchar(128)
             */
            this._mobile = null;
            /**
             * Database field: text
             */
            this._note = null;
            /**
             * Database field: varchar(128)
             */
            this._company = null;
            /**
             * Database field: varchar(128)
             */
            this._email = null;
        }
        Object.defineProperty(personBase.prototype, "idperson", {
            /**
             * Gets or sets the value of the idperson field of type int(11)
             */
            get: function () {
                return this._idperson;
            },
            /**
             * Gets or sets the value of the idperson field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idperson;
                this._idperson = value;
                if (changed) {
                    this.onIdpersonChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "idpersonChanged", {
            /**
             * Gets an event raised when the value of the idperson property changes
             */
            get: function () {
                if (!this._idpersonChanged) {
                    this._idpersonChanged = new latte.LatteEvent(this);
                }
                return this._idpersonChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idpersonChanged</c> event
         */
        personBase.prototype.onIdpersonChanged = function () {
            if (this._idpersonChanged) {
                this._idpersonChanged.raise();
            }
            this.onFieldValueChanged('idperson', this.idperson);
        };
        /**
        * Gets the name of the autoincrement field
        **/
        personBase.prototype.onGetRecordIdName = function () { return 'idperson'; };
        Object.defineProperty(personBase.prototype, "idcategory", {
            /**
             * Gets or sets the value of the idcategory field of type int(11)
             */
            get: function () {
                return this._idcategory;
            },
            /**
             * Gets or sets the value of the idcategory field of type int(11)
             */
            set: function (value) {
                var changed = value !== this._idcategory;
                this._idcategory = value;
                if (changed) {
                    this.onIdcategoryChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "idcategoryChanged", {
            /**
             * Gets an event raised when the value of the idcategory property changes
             */
            get: function () {
                if (!this._idcategoryChanged) {
                    this._idcategoryChanged = new latte.LatteEvent(this);
                }
                return this._idcategoryChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>idcategoryChanged</c> event
         */
        personBase.prototype.onIdcategoryChanged = function () {
            if (this._idcategoryChanged) {
                this._idcategoryChanged.raise();
            }
            this.onFieldValueChanged('idcategory', this.idcategory);
        };
        Object.defineProperty(personBase.prototype, "title", {
            /**
             * Gets or sets the value of the title field of type varchar(128)
             */
            get: function () {
                return this._title;
            },
            /**
             * Gets or sets the value of the title field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._title;
                this._title = value;
                if (changed) {
                    this.onTitleChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "titleChanged", {
            /**
             * Gets an event raised when the value of the title property changes
             */
            get: function () {
                if (!this._titleChanged) {
                    this._titleChanged = new latte.LatteEvent(this);
                }
                return this._titleChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>titleChanged</c> event
         */
        personBase.prototype.onTitleChanged = function () {
            if (this._titleChanged) {
                this._titleChanged.raise();
            }
            this.onFieldValueChanged('title', this.title);
        };
        Object.defineProperty(personBase.prototype, "name", {
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            get: function () {
                return this._name;
            },
            /**
             * Gets or sets the value of the name field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._name;
                this._name = value;
                if (changed) {
                    this.onNameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "nameChanged", {
            /**
             * Gets an event raised when the value of the name property changes
             */
            get: function () {
                if (!this._nameChanged) {
                    this._nameChanged = new latte.LatteEvent(this);
                }
                return this._nameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>nameChanged</c> event
         */
        personBase.prototype.onNameChanged = function () {
            if (this._nameChanged) {
                this._nameChanged.raise();
            }
            this.onFieldValueChanged('name', this.name);
        };
        Object.defineProperty(personBase.prototype, "lastname", {
            /**
             * Gets or sets the value of the lastname field of type varchar(128)
             */
            get: function () {
                return this._lastname;
            },
            /**
             * Gets or sets the value of the lastname field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._lastname;
                this._lastname = value;
                if (changed) {
                    this.onLastnameChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "lastnameChanged", {
            /**
             * Gets an event raised when the value of the lastname property changes
             */
            get: function () {
                if (!this._lastnameChanged) {
                    this._lastnameChanged = new latte.LatteEvent(this);
                }
                return this._lastnameChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>lastnameChanged</c> event
         */
        personBase.prototype.onLastnameChanged = function () {
            if (this._lastnameChanged) {
                this._lastnameChanged.raise();
            }
            this.onFieldValueChanged('lastname', this.lastname);
        };
        Object.defineProperty(personBase.prototype, "birth", {
            /**
             * Gets or sets the value of the birth field of type date
             */
            get: function () {
                return this._birth;
            },
            /**
             * Gets or sets the value of the birth field of type date
             */
            set: function (value) {
                var changed = value !== this._birth;
                this._birth = value;
                if (changed) {
                    this.onBirthChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "birthChanged", {
            /**
             * Gets an event raised when the value of the birth property changes
             */
            get: function () {
                if (!this._birthChanged) {
                    this._birthChanged = new latte.LatteEvent(this);
                }
                return this._birthChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>birthChanged</c> event
         */
        personBase.prototype.onBirthChanged = function () {
            if (this._birthChanged) {
                this._birthChanged.raise();
            }
            this.onFieldValueChanged('birth', this.birth);
        };
        Object.defineProperty(personBase.prototype, "sex", {
            /**
             * Gets or sets the value of the sex field of type varchar(10)
             */
            get: function () {
                return this._sex;
            },
            /**
             * Gets or sets the value of the sex field of type varchar(10)
             */
            set: function (value) {
                var changed = value !== this._sex;
                this._sex = value;
                if (changed) {
                    this.onSexChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "sexChanged", {
            /**
             * Gets an event raised when the value of the sex property changes
             */
            get: function () {
                if (!this._sexChanged) {
                    this._sexChanged = new latte.LatteEvent(this);
                }
                return this._sexChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>sexChanged</c> event
         */
        personBase.prototype.onSexChanged = function () {
            if (this._sexChanged) {
                this._sexChanged.raise();
            }
            this.onFieldValueChanged('sex', this.sex);
        };
        Object.defineProperty(personBase.prototype, "address", {
            /**
             * Gets or sets the value of the address field of type varchar(255)
             */
            get: function () {
                return this._address;
            },
            /**
             * Gets or sets the value of the address field of type varchar(255)
             */
            set: function (value) {
                var changed = value !== this._address;
                this._address = value;
                if (changed) {
                    this.onAddressChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "addressChanged", {
            /**
             * Gets an event raised when the value of the address property changes
             */
            get: function () {
                if (!this._addressChanged) {
                    this._addressChanged = new latte.LatteEvent(this);
                }
                return this._addressChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>addressChanged</c> event
         */
        personBase.prototype.onAddressChanged = function () {
            if (this._addressChanged) {
                this._addressChanged.raise();
            }
            this.onFieldValueChanged('address', this.address);
        };
        Object.defineProperty(personBase.prototype, "phone", {
            /**
             * Gets or sets the value of the phone field of type varchar(128)
             */
            get: function () {
                return this._phone;
            },
            /**
             * Gets or sets the value of the phone field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._phone;
                this._phone = value;
                if (changed) {
                    this.onPhoneChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "phoneChanged", {
            /**
             * Gets an event raised when the value of the phone property changes
             */
            get: function () {
                if (!this._phoneChanged) {
                    this._phoneChanged = new latte.LatteEvent(this);
                }
                return this._phoneChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>phoneChanged</c> event
         */
        personBase.prototype.onPhoneChanged = function () {
            if (this._phoneChanged) {
                this._phoneChanged.raise();
            }
            this.onFieldValueChanged('phone', this.phone);
        };
        Object.defineProperty(personBase.prototype, "mobile", {
            /**
             * Gets or sets the value of the mobile field of type varchar(128)
             */
            get: function () {
                return this._mobile;
            },
            /**
             * Gets or sets the value of the mobile field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._mobile;
                this._mobile = value;
                if (changed) {
                    this.onMobileChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "mobileChanged", {
            /**
             * Gets an event raised when the value of the mobile property changes
             */
            get: function () {
                if (!this._mobileChanged) {
                    this._mobileChanged = new latte.LatteEvent(this);
                }
                return this._mobileChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>mobileChanged</c> event
         */
        personBase.prototype.onMobileChanged = function () {
            if (this._mobileChanged) {
                this._mobileChanged.raise();
            }
            this.onFieldValueChanged('mobile', this.mobile);
        };
        Object.defineProperty(personBase.prototype, "note", {
            /**
             * Gets or sets the value of the note field of type text
             */
            get: function () {
                return this._note;
            },
            /**
             * Gets or sets the value of the note field of type text
             */
            set: function (value) {
                var changed = value !== this._note;
                this._note = value;
                if (changed) {
                    this.onNoteChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "noteChanged", {
            /**
             * Gets an event raised when the value of the note property changes
             */
            get: function () {
                if (!this._noteChanged) {
                    this._noteChanged = new latte.LatteEvent(this);
                }
                return this._noteChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>noteChanged</c> event
         */
        personBase.prototype.onNoteChanged = function () {
            if (this._noteChanged) {
                this._noteChanged.raise();
            }
            this.onFieldValueChanged('note', this.note);
        };
        Object.defineProperty(personBase.prototype, "company", {
            /**
             * Gets or sets the value of the company field of type varchar(128)
             */
            get: function () {
                return this._company;
            },
            /**
             * Gets or sets the value of the company field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._company;
                this._company = value;
                if (changed) {
                    this.onCompanyChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "companyChanged", {
            /**
             * Gets an event raised when the value of the company property changes
             */
            get: function () {
                if (!this._companyChanged) {
                    this._companyChanged = new latte.LatteEvent(this);
                }
                return this._companyChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>companyChanged</c> event
         */
        personBase.prototype.onCompanyChanged = function () {
            if (this._companyChanged) {
                this._companyChanged.raise();
            }
            this.onFieldValueChanged('company', this.company);
        };
        Object.defineProperty(personBase.prototype, "email", {
            /**
             * Gets or sets the value of the email field of type varchar(128)
             */
            get: function () {
                return this._email;
            },
            /**
             * Gets or sets the value of the email field of type varchar(128)
             */
            set: function (value) {
                var changed = value !== this._email;
                this._email = value;
                if (changed) {
                    this.onEmailChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personBase.prototype, "emailChanged", {
            /**
             * Gets an event raised when the value of the email property changes
             */
            get: function () {
                if (!this._emailChanged) {
                    this._emailChanged = new latte.LatteEvent(this);
                }
                return this._emailChanged;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Raises the <c>emailChanged</c> event
         */
        personBase.prototype.onEmailChanged = function () {
            if (this._emailChanged) {
                this._emailChanged.raise();
            }
            this.onFieldValueChanged('email', this.email);
        };
        /**
        * Override. Gets data about the fields of the record.
        **/
        personBase.prototype.onGetFields = function () { return { 'idperson': this.idperson, 'idcategory': this.idcategory, 'title': this.title, 'name': this.name, 'lastname': this.lastname, 'birth': this.birth, 'sex': this.sex, 'address': this.address, 'phone': this.phone, 'mobile': this.mobile, 'note': this.note, 'company': this.company, 'email': this.email }; };
        /*
         * Remote Method.
 Searches for persons in the database


         */
        personBase.search = function (options, page, pageSize) {
            if (page === void 0) { page = 1; }
            if (pageSize === void 0) { pageSize = 50; }
            return new latte.RemoteCall('app.contacts', 'Person', 'search', { options: options, page: page, pageSize: pageSize });
        };
        return personBase;
    }(latte.DataRecord));
    latte.personBase = personBase;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var ContactsMainViewBase = (function (_super) {
        __extends(ContactsMainViewBase, _super);
        function ContactsMainViewBase() {
            _super.call(this, latte.Element.fromBank('ContactsMainViewBase'));
            this.bind(this, true);
        }
        Object.defineProperty(ContactsMainViewBase.prototype, "allContactsItem", {
            get: function () {
                if (!this._allContactsItem) {
                    this._allContactsItem = new latte.Element(this.querySelector('[data-property=allContactsItem]'));
                }
                return this._allContactsItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "btnAdd", {
            get: function () {
                if (!this._btnAdd) {
                    this._btnAdd = new latte.Element(this.querySelector('[data-property=btnAdd]'));
                }
                return this._btnAdd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "btnEdit", {
            get: function () {
                if (!this._btnEdit) {
                    this._btnEdit = new latte.Element(this.querySelector('[data-property=btnEdit]'));
                }
                return this._btnEdit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "detailToolbar", {
            get: function () {
                if (!this._detailToolbar) {
                    this._detailToolbar = new latte.Element(this.querySelector('[data-property=detailToolbar]'));
                }
                return this._detailToolbar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "listGroups", {
            get: function () {
                if (!this._listGroups) {
                    this._listGroups = new latte.Element(this.querySelector('[data-property=listGroups]'));
                }
                return this._listGroups;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "listPeople", {
            get: function () {
                if (!this._listPeople) {
                    this._listPeople = new latte.Element(this.querySelector('[data-property=listPeople]'));
                }
                return this._listPeople;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "myContacts", {
            get: function () {
                if (!this._myContacts) {
                    this._myContacts = new latte.Element(this.querySelector('[data-property=myContacts]'));
                }
                return this._myContacts;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "panelDetail", {
            get: function () {
                if (!this._panelDetail) {
                    this._panelDetail = new latte.Element(this.querySelector('[data-property=panelDetail]'));
                }
                return this._panelDetail;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "personWrapper", {
            get: function () {
                if (!this._personWrapper) {
                    this._personWrapper = new latte.Element(this.querySelector('[data-property=personWrapper]'));
                }
                return this._personWrapper;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainViewBase.prototype, "txtSearch", {
            get: function () {
                if (!this._txtSearch) {
                    this._txtSearch = new latte.Textbox(this.querySelector('[data-property=txtSearch]'));
                }
                return this._txtSearch;
            },
            enumerable: true,
            configurable: true
        });
        ContactsMainViewBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('ContactsMainViewBase'));
            }
            return this._Model;
        };
        return ContactsMainViewBase;
    }(latte.Element));
    latte.ContactsMainViewBase = ContactsMainViewBase;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var CategoryListItem = (function (_super) {
        __extends(CategoryListItem, _super);
        function CategoryListItem() {
            _super.call(this, latte.Element.fromBank('CategoryListItem'));
            this.bind(this, true);
        }
        CategoryListItem.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('CategoryListItem'));
            }
            return this._Model;
        };
        return CategoryListItem;
    }(latte.Element));
    latte.CategoryListItem = CategoryListItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var ListItemHeaderBase = (function (_super) {
        __extends(ListItemHeaderBase, _super);
        function ListItemHeaderBase() {
            _super.call(this, latte.Element.fromBank('ListItemHeaderBase'));
            this.bind(this, true);
        }
        ListItemHeaderBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('ListItemHeaderBase'));
            }
            return this._Model;
        };
        return ListItemHeaderBase;
    }(latte.Element));
    latte.ListItemHeaderBase = ListItemHeaderBase;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var PersonListItem = (function (_super) {
        __extends(PersonListItem, _super);
        function PersonListItem() {
            _super.call(this, latte.Element.fromBank('PersonListItem'));
            this.bind(this, true);
        }
        PersonListItem.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('PersonListItem'));
            }
            return this._Model;
        };
        return PersonListItem;
    }(latte.Element));
    latte.PersonListItem = PersonListItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var PersonViewBase = (function (_super) {
        __extends(PersonViewBase, _super);
        function PersonViewBase() {
            _super.call(this, latte.Element.fromBank('PersonViewBase'));
            this.bind(this, true);
        }
        Object.defineProperty(PersonViewBase.prototype, "detailHeader", {
            get: function () {
                if (!this._detailHeader) {
                    this._detailHeader = new latte.Element(this.querySelector('[data-property=detailHeader]'));
                }
                return this._detailHeader;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonViewBase.prototype, "detailRows", {
            get: function () {
                if (!this._detailRows) {
                    this._detailRows = new latte.Element(this.querySelector('[data-property=detailRows]'));
                }
                return this._detailRows;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonViewBase.prototype, "lblDescription", {
            get: function () {
                if (!this._lblDescription) {
                    this._lblDescription = new latte.Element(this.querySelector('[data-property=lblDescription]'));
                }
                return this._lblDescription;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonViewBase.prototype, "lblFirstName", {
            get: function () {
                if (!this._lblFirstName) {
                    this._lblFirstName = new latte.Element(this.querySelector('[data-property=lblFirstName]'));
                }
                return this._lblFirstName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonViewBase.prototype, "lblInitials", {
            get: function () {
                if (!this._lblInitials) {
                    this._lblInitials = new latte.Element(this.querySelector('[data-property=lblInitials]'));
                }
                return this._lblInitials;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonViewBase.prototype, "lblLastName", {
            get: function () {
                if (!this._lblLastName) {
                    this._lblLastName = new latte.Element(this.querySelector('[data-property=lblLastName]'));
                }
                return this._lblLastName;
            },
            enumerable: true,
            configurable: true
        });
        PersonViewBase.getModel = function () {
            if (!this._Model) {
                this._Model = new latte.Element(latte.Element.fromBank('PersonViewBase'));
            }
            return this._Model;
        };
        return PersonViewBase;
    }(latte.Element));
    latte.PersonViewBase = PersonViewBase;
})(latte || (latte = {}));
var latte;
(function (latte) {
    window['latte']['globalViewsBank'] = latte._merge(window['latte']['globalViewsBank'] || {}, {
        "ContactsMainViewBase": "<div data-class=\"ContactsMainViewBase\" class=\"contacts-ui\">\n\n    <!-- GROUPS PANEL -->\n    <div data-property=\"listGroups\" class=\"panel-groups\">\n        <div class=\"list-item\" data-property=\"allContactsItem\" data-event=\"click:loadAllContacts\">All Contacts</div>\n        <div class=\"list-item-header\">My Contacts</div>\n        <div data-property=\"myContacts\">\n            \n            <div class=\"list-item\">Family</div>\n            <div class=\"list-item\">Other</div>\n        </div>\n    </div>\n\n    <!-- NAMES LIST PANEL -->\n    <div class=\"panel-list\">\n        <div class=\"search-box\">\n            <input data-property=\"txtSearch\" data-event=\"input:loadContacts\" type=\"text\" placeholder=\"Search\">\n        </div>\n\n        <div data-property=\"listPeople\" class=\"list\">\n            <div class=\"no-items\">No contacts found</div>\n            \n            \n            <div class=\"list-item selected\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item\">Alchemist Joe</div>\n            <div class=\"list-item-header\">B</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item\">Bradbury Jack</div>\n            <div class=\"list-item-header\">D</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n            <div class=\"list-item\">Doe John</div>\n        </div>\n    </div>\n\n    <!-- CONTACT DETAIL PANEL -->\n    <div data-property=\"panelDetail\" class=\"panel-detail\">\n        <div data-property=\"personWrapper\">\n            \n        </div>\n        <div data-property=\"detailToolbar\" class=\"toolbar\">\n            <div data-property=\"btnAdd\" data-event=\"click: btnAdd_Click\" class=\"button btn-add\">+</div>\n            <div class=\"button btn-export\">...</div>\n            <div data-property=\"btnEdit\" data-event=\"click: btnEdit_Click\" class=\"button btn-edit\">Edit</div>\n        </div>\n    </div>\n</div>",
        "CategoryListItem": "<div class=\"list-item\" data-class=\"CategoryListItem\"><span data-bind=\"name\">Friends</span></div>",
        "ListItemHeaderBase": "<div class=\"list-item-header\" data-class=\"ListItemHeaderBase\">A</div>",
        "PersonListItem": "<div class=\"list-item\" data-class=\"PersonListItem\"><span data-bind=\"fullName\">Alchemist Joe</span></div>",
        "PersonViewBase": "<div data-class=\"PersonViewBase\">\n                <div data-property=\"detailHeader\" class=\"header\">\n                    <div class=\"picture-side\">\n                        <div class=\"picture\">\n                            <div data-property=\"lblInitials\" data-bind=\"initials\">AJ</div>\n                        </div>\n                    </div>\n                    <div class=\"name-side\">\n                        <div class=\"name-row\">\n                            <div data-property=\"lblFirstName\" data-event=\"focus: lblFirstName_Focus\" data-bind=\"name\" class=\"name\">Alchemist</div>\n                            <div data-property=\"lblLastName\" data-bind=\"lastname\" data-event=\"focus: lblLastName_Focus\" class=\"last\">Joe</div>\n                        </div>\n                        <div data-property=\"lblDescription\" data-bind=\"company\" class=\"description\">Superworks, Inc.</div>\n                    </div>\n                </div>\n                <div data-property=\"detailRows\" class=\"rows\">\n                    <div class=\"data\">\n                        <div class=\"name\">email</div>\n                        <div data-bind=\"email\" class=\"value\">a@a.com</div>\n                    </div>\n                    <div class=\"data\">\n                        <div class=\"name\">phone</div>\n                        <div data-bind=\"phone\" class=\"value\">+(55) 123456789</div>\n                    </div>\n                    <div class=\"data\">\n                        <div class=\"name\">mobile</div>\n                        <div data-bind=\"mobile\" class=\"value\">+(54) 123456789</div>\n                    </div>\n                    <div class=\"data\">\n                        <div class=\"name\">address</div>\n                        <div data-bind=\"address\" class=\"value\">Elm Street 1090, TX, PA 9875</div>\n                    </div>\n                    <div class=\"data\">\n                        <div class=\"name\">note</div>\n                        <div data-bind=\"note\" class=\"value\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat molestie enim, vel viverra odio malesuada quis. Nulla gravida vulputate nulla, non egestas elit pretium et. </div>\n                    </div>\n                </div>\n            </div>"
    });
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/29/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var ListItemHeader = (function (_super) {
        __extends(ListItemHeader, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the header with the specified text
         */
        function ListItemHeader(text) {
            if (text === void 0) { text = null; }
            _super.call(this);
            if (text) {
                this.text = text;
            }
        }
        return ListItemHeader;
    }(latte.ListItemHeaderBase));
    latte.ListItemHeader = ListItemHeader;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/27/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Main = (function () {
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function Main() {
            document.body.appendChild((new latte.ContactsMainView()).element);
        }
        return Main;
    }());
    latte.Main = Main;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/27/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var ContactsMainView = (function (_super) {
        __extends(ContactsMainView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         * Creates the view
         */
        function ContactsMainView() {
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._personView = null;
            /**
             * Property field
             */
            this._selectedCategory = null;
            this.loadCategories();
            this.loadContacts();
        }
        //region Private Methods
        /**
         * Selects the specified category item
         * @param item
         */
        ContactsMainView.prototype.selectCategoryItem = function (item) {
            // Deselect everyone
            this.listGroups.findAll('.selected').removeClass('selected');
            // Select item
            item.addClass('selected');
            // Pass selection
            this.selectedCategory = item.dataBinds.length > 0 ? item.dataBinds[0].record : null;
        };
        /**
         * Selects the specified category item
         * @param item
         */
        ContactsMainView.prototype.selectPersonItem = function (item) {
            // Deselect everyone
            this.listPeople.findAll('.selected').removeClass('selected');
            // Select ittem
            item.addClass('selected');
            // Pass selection
            this.personView = new latte.PersonView(item.dataBinds[0].record);
        };
        //endregion
        //region Methods
        /**
         * Event Handler.
         */
        ContactsMainView.prototype.btnAdd_Click = function () {
            if (this.personView.editMode) {
                this.personView.editMode = false;
            }
            this.personView.person = new latte.Person();
            this.personView.person.idcategory = this.selectedCategory instanceof latte.Category ? this.selectedCategory.idcategory : 0;
            this.personView.editMode = true;
        };
        /**
         * Event Handler.
         */
        ContactsMainView.prototype.btnEdit_Click = function () {
            this.personView.editMode = !this.personView.editMode;
        };
        /**
         * Event Handler.
         */
        ContactsMainView.prototype.loadCategories = function () {
            var _this = this;
            this.myContacts.clear();
            latte.Category.fullCatalog().send(function (cats) {
                // Create Items
                var items = _this.myContacts.addCollection(latte.ElementCollection.fromBindArray(cats, latte.CategoryListItem));
                // Add Listener
                items.addEventListener('click', function (item) { _this.selectCategoryItem(item); });
            });
        };
        /**
         * Loads contacts of all categories
         */
        ContactsMainView.prototype.loadAllContacts = function () {
            this.selectCategoryItem(this.allContactsItem);
        };
        /**
         * Loads the contacts of the specified filters
         */
        ContactsMainView.prototype.loadContacts = function () {
            var _this = this;
            this.listPeople.clear();
            var opts = {};
            if (this.selectedCategory instanceof latte.Category) {
                opts.idcategory = this.selectedCategory.idcategory;
            }
            if (this.txtSearch.value.length > 0) {
                opts.text = this.txtSearch.value;
            }
            latte.Person.search(opts, 1, 50).send(function (p) {
                var groups = {};
                //region Group by Starting Letter
                for (var i = 0; i < p.records.length; i++) {
                    (function (person) {
                        if (latte._undef(groups[person.charForIndex])) {
                            groups[person.charForIndex] = [];
                        }
                        groups[person.charForIndex].push(person);
                    })(p.records[i]);
                }
                //endregion
                //region Alert if no matches
                if (p.records.length == 0) {
                    var noItems = new latte.Element(document.createElement('div'));
                    noItems.addClass('no-items');
                    noItems.text = strings.noContacts;
                    _this.listPeople.add(noItems);
                }
                //endregion
                for (var g in groups) {
                    // Add Group Item
                    var groupItem = _this.listPeople.add(new latte.ListItemHeader());
                    groupItem.text = g;
                    // Crete Person Items
                    var items = _this.listPeople.addCollection(latte.ElementCollection.fromBindArray(groups[g], latte.PersonListItem));
                    // Assign Click
                    items.addEventListener('click', function (item) { _this.selectPersonItem(item); });
                }
            });
        };
        /**
         * Raises the <c>personView</c> event
         */
        ContactsMainView.prototype.onPersonViewChanged = function () {
            var _this = this;
            if (this._personViewChanged) {
                this._personViewChanged.raise();
            }
            this.personWrapper.setContent(this.personView);
            this.personView.editModeChanged.add(function () {
                if (_this.personView.editMode) {
                    _this.btnEdit.addClass('checked');
                }
                else {
                    _this.btnEdit.removeClass('checked');
                }
            });
        };
        /**
         * Raises the <c>selectedCategory</c> event
         */
        ContactsMainView.prototype.onSelectedCategoryChanged = function () {
            if (this._selectedCategoryChanged) {
                this._selectedCategoryChanged.raise();
            }
            this.loadContacts();
        };
        Object.defineProperty(ContactsMainView.prototype, "personViewChanged", {
            /**
             * Gets an event raised when the value of the personView property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._personViewChanged) {
                    this._personViewChanged = new latte.LatteEvent(this);
                }
                return this._personViewChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainView.prototype, "searchTextChanged", {
            /**
             * Gets an event raised when the value of the searchText property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._searchTextChanged) {
                    this._searchTextChanged = new latte.LatteEvent(this);
                }
                return this._searchTextChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainView.prototype, "selectedCategoryChanged", {
            /**
             * Gets an event raised when the value of the selectedCategory property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._selectedCategoryChanged) {
                    this._selectedCategoryChanged = new latte.LatteEvent(this);
                }
                return this._selectedCategoryChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainView.prototype, "personView", {
            /**
             * Gets or sets the person view
             *
             * @returns {PersonView}
             */
            get: function () {
                return this._personView;
            },
            /**
             * Gets or sets the person view
             *
             * @param {PersonView} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._personView;
                // Set value
                this._personView = value;
                // Trigger changed event
                if (changed) {
                    this.onPersonViewChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsMainView.prototype, "selectedCategory", {
            /**
             * Gets or sets the currently selected category, if any.
             *
             * @returns {Category}
             */
            get: function () {
                return this._selectedCategory;
            },
            /**
             * Gets or sets the currently selected category, if any.
             *
             * @param {Category} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._selectedCategory;
                // Set value
                this._selectedCategory = value;
                // Trigger changed event
                if (changed) {
                    this.onSelectedCategoryChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        return ContactsMainView;
    }(latte.ContactsMainViewBase));
    latte.ContactsMainView = ContactsMainView;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/29/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var PersonView = (function (_super) {
        __extends(PersonView, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function PersonView(person) {
            _super.call(this);
            //endregion
            //region Properties
            /**
             * Property field
             */
            this._editMode = null;
            /**
             * Property field
             */
            this._person = null;
            if (person) {
                this.person = person;
            }
        }
        //region Private Methods
        //endregion
        //region Methods
        /**
         * Event Handler.
         */
        PersonView.prototype.lblFirstName_Focus = function () {
            setTimeout(function () {
                document.execCommand('selectAll', false, null);
            }, 50);
        };
        /**
         * Event Handler.
         */
        PersonView.prototype.lblLastName_Focus = function () {
            setTimeout(function () {
                document.execCommand('selectAll', false, null);
            }, 50);
        };
        /**
         * Raises the <c>editMode</c> event
         */
        PersonView.prototype.onEditModeChanged = function () {
            if (this._editModeChanged) {
                this._editModeChanged.raise();
            }
            // Set edit mode of the binded elements
            this.findAll('[data-bind]').setProperty('contentEditable', this.editMode);
            if (this.editMode) {
                this.lblFirstName.element.focus();
            }
            else {
                // Save data
                this.person.save(function () {
                    //this.onPersonChanged();
                });
            }
        };
        /**
         * Raises the <c>person</c> event
         */
        PersonView.prototype.onPersonChanged = function () {
            if (this._personChanged) {
                this._personChanged.raise();
            }
            if (this.person) {
                this.bind(this.person);
            }
        };
        Object.defineProperty(PersonView.prototype, "editModeChanged", {
            /**
             * Gets an event raised when the value of the editMode property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._editModeChanged) {
                    this._editModeChanged = new latte.LatteEvent(this);
                }
                return this._editModeChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonView.prototype, "personChanged", {
            /**
             * Gets an event raised when the value of the person property changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._personChanged) {
                    this._personChanged = new latte.LatteEvent(this);
                }
                return this._personChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonView.prototype, "editMode", {
            /**
             * Gets or sets a value indicating if the view is in edit mode
             *
             * @returns {boolean}
             */
            get: function () {
                return this._editMode;
            },
            /**
             * Gets or sets a value indicating if the view is in edit mode
             *
             * @param {boolean} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._editMode;
                // Set value
                this._editMode = value;
                // Trigger changed event
                if (changed) {
                    this.onEditModeChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonView.prototype, "person", {
            /**
             * Gets or sets the person of the detail zone
             *
             * @returns {Person}
             */
            get: function () {
                return this._person;
            },
            /**
             * Gets or sets the person of the detail zone
             *
             * @param {Person} value
             */
            set: function (value) {
                // Check if value changed
                var changed = value !== this._person;
                // Set value
                this._person = value;
                // Trigger changed event
                if (changed) {
                    this.onPersonChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        return PersonView;
    }(latte.PersonViewBase));
    latte.PersonView = PersonView;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/27/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Category = (function (_super) {
        __extends(Category, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function Category() {
            _super.call(this);
        }
        return Category;
    }(latte.categoryBase));
    latte.Category = Category;
})(latte || (latte = {}));
/**
 * Created by josemanuel on 5/27/15.
 */
var latte;
(function (latte) {
    /**
     *
     */
    var Person = (function (_super) {
        __extends(Person, _super);
        //region Static
        //endregion
        //region Fields
        //endregion
        /**
         *
         */
        function Person() {
            _super.call(this);
        }
        //region Private Methods
        //endregion
        //region Methods
        Person.prototype.onFieldValueChanged = function (name, value) {
            _super.prototype.onFieldValueChanged.call(this, name, value);
            if (name == 'name' || name == 'lastname') {
                this.onFullNameChanged();
                this.onInitialsChanged();
            }
        };
        /**
         * Raises the <c>initialsChanged</c> event
         */
        Person.prototype.onInitialsChanged = function () {
            if (this._initialsChanged) {
                this._initialsChanged.raise();
            }
        };
        /**
         * Raises the <c>fullNameChanged</c> event
         */
        Person.prototype.onFullNameChanged = function () {
            if (this._fullNameChanged) {
                this._fullNameChanged.raise();
            }
        };
        Object.defineProperty(Person.prototype, "fullNameChanged", {
            /**
             * Gets an event raised when the full name changes
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._fullNameChanged) {
                    this._fullNameChanged = new latte.LatteEvent(this);
                }
                return this._fullNameChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "initialsChanged", {
            /**
             * Gets an event raised when the initials change
             *
             * @returns {LatteEvent}
             */
            get: function () {
                if (!this._initialsChanged) {
                    this._initialsChanged = new latte.LatteEvent(this);
                }
                return this._initialsChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "charForIndex", {
            //endregion
            //region Properties
            /**
             * Gets the character for indexing the contact
             *
             * @returns {string}
             */
            get: function () {
                var f = String(this.name);
                var l = String(this.lastname);
                if (l.length > 0) {
                    return l.charAt(0).toUpperCase();
                }
                else if (f.length > 0) {
                    return l.charAt(0).toUpperCase();
                }
                else {
                    return strings.noName;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "fullName", {
            /**
             * Gets the full name of the person
             *
             * @returns {string}
             */
            get: function () {
                return [this.name, this.lastname].join(' ');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "initials", {
            /**
             * Gets the initials of the person
             *
             * @returns {string}
             */
            get: function () {
                var f = String(this.name || '');
                var l = String(this.lastname || '');
                var data = [];
                if (f.length) {
                    data.push(f.charAt(0).toUpperCase());
                }
                if (l.length) {
                    data.push(l.charAt(0).toUpperCase());
                }
                return data.join('');
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }(latte.personBase));
    latte.Person = Person;
})(latte || (latte = {}));
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/app.contacts.strings.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/datalatte.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/latte.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/latte.data.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/latte.data.strings.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/latte.element.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/latte.strings.d.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/records.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/views.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/support/ts-include/views_bank.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/ts/ListItemHeader.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/ts/Main.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/ts/ContactsMainView.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/ts/PersonView.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/ts/records/Category.ts" />
/// <reference path="/Users/josemanuel/Sites/Latte/latte/app.contacts/ts/records/Person.ts" /> 
