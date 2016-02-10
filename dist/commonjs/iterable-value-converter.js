"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IterableValueConverter = (function () {
    function IterableValueConverter() {
        _classCallCheck(this, IterableValueConverter);
    }

    _createClass(IterableValueConverter, [{
        key: "toView",
        value: function toView(value) {
            var _ref;

            var index = 0;
            var propKeys = Reflect.ownKeys(value);
            return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
                return this;
            }), _defineProperty(_ref, "next", function next() {
                if (index < propKeys.length) {
                    var key = propKeys[index];
                    index++;
                    return { value: [key, value[key]] };
                } else {
                    return { done: true };
                }
            }), _ref;
        }
    }]);

    return IterableValueConverter;
})();

exports.IterableValueConverter = IterableValueConverter;