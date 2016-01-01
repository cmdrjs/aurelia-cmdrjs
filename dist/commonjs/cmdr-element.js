'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cmdr = require('cmdr');

var _cmdr2 = _interopRequireDefault(_cmdr);

var _aureliaFramework = require('aurelia-framework');

var CmdrElement = (function () {
    function CmdrElement(element) {
        _classCallCheck(this, _CmdrElement);

        this.element = element;
        this.shell = null;
    }

    _createClass(CmdrElement, [{
        key: 'attached',
        value: function attached() {
            this.shell = new _cmdr2['default'](this.element);
        }
    }]);

    var _CmdrElement = CmdrElement;
    CmdrElement = (0, _aureliaFramework.inject)(Element)(CmdrElement) || CmdrElement;
    CmdrElement = (0, _aureliaFramework.customElement)('cmdr')(CmdrElement) || CmdrElement;
    return CmdrElement;
})();

exports.CmdrElement = CmdrElement;