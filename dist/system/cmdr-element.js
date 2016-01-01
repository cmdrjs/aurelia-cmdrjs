System.register(['cmdrjs/cmdrjs', 'aurelia-framework'], function (_export) {
    'use strict';

    var Shell, customElement, bindable, inject, CmdrElement;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_cmdrjsCmdrjs) {
            Shell = _cmdrjsCmdrjs['default'];
        }, function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            CmdrElement = (function () {
                function CmdrElement(element) {
                    _classCallCheck(this, _CmdrElement);

                    this.element = element;
                    this.shell = null;
                }

                _createClass(CmdrElement, [{
                    key: 'attached',
                    value: function attached() {
                        this.shell = new Shell(this.element);
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        this.shell.dispose();
                    }
                }]);

                var _CmdrElement = CmdrElement;
                CmdrElement = inject(Element)(CmdrElement) || CmdrElement;
                CmdrElement = customElement('cmdr')(CmdrElement) || CmdrElement;
                return CmdrElement;
            })();

            _export('CmdrElement', CmdrElement);
        }
    };
});