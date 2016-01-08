System.register(['cmdrjs', 'aurelia-framework'], function (_export) {
    'use strict';

    var Shell, customElement, bindable, inject, CmdrElement;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_cmdrjs) {
            Shell = _cmdrjs.Shell;
        }, function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            CmdrElement = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(CmdrElement, [{
                    key: 'options',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return {};
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function CmdrElement(element) {
                    _classCallCheck(this, _CmdrElement);

                    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

                    this.element = element;
                    this.shell = null;
                }

                _createDecoratedClass(CmdrElement, [{
                    key: 'attached',
                    value: function attached() {
                        this.shell = new Shell(this.element, this.options);
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        this.shell.dispose();
                    }
                }], null, _instanceInitializers);

                var _CmdrElement = CmdrElement;
                CmdrElement = inject(Element)(CmdrElement) || CmdrElement;
                CmdrElement = customElement('cmdr')(CmdrElement) || CmdrElement;
                return CmdrElement;
            })();

            _export('CmdrElement', CmdrElement);
        }
    };
});