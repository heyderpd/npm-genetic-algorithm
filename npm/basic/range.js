'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathLab = require('./../lib/math-lab');

var _mathLab2 = _interopRequireDefault(_mathLab);

var _simple = require('./simple');

var _simple2 = _interopRequireDefault(_simple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var range = function () {
  function range(min, max) {
    _classCallCheck(this, range);

    this.min = min;
    this.max = max;
    this.random = _mathLab2.default.random(min, max);
  }

  _createClass(range, [{
    key: 'limit',
    value: function limit(value) {
      switch (value.constructor.name) {
        case 'simple':
          value = value.get();
          break;

        case 'Number':
          break;

        default:
          throw new Error('unexpected object type');
      }
      if (value > this.max) {
        value = this.max;
      }
      if (value < this.min) {
        value = this.min;
      }
      return new _simple2.default(value);
    }
  }, {
    key: 'new',
    value: function _new() {
      return this.limit(this.random());
    }
  }]);

  return range;
}();

exports.default = range;