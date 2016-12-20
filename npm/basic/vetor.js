'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathLab = require('./../lib/math-lab');

var _mathLab2 = _interopRequireDefault(_mathLab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vetor = function () {
  function vetor(value, range) {
    _classCallCheck(this, vetor);

    this.range = range;

    switch (value.constructor.name) {
      case 'binary':
        this.binary = value;
        break;

      case 'number':
        this.number = value;
        break;

      case 'simple':
        this.simple = value;
        break;

      default:
        throw new Error('unexpected object type');
    }

    switch (value.constructor.name) {
      case 'binary':
        this.number = _mathLab2.default.fromBinary.createNumber(this.binary);

      case 'number':
        this.simple = _mathLab2.default.fromNumber.createSimple(this.number);

      case 'simple':
        this.simple = this.range.limit(value);
        this.spread(this.simple);
        break;

      default:
        throw new Error('unexpected object type');
    }
  }

  _createClass(vetor, [{
    key: 'spread',
    value: function spread(value) {
      switch (value.constructor.name) {
        case 'simple':
          this.simple = value;
          this.number = _mathLab2.default.fromSimple.createNumber(this.simple);
          this.binary = _mathLab2.default.fromNumber.createBinary(this.number);
          break;

        case 'number':
          this.number = value;
          this.simple = _mathLab2.default.fromNumber.createSimple(this.number);
          this.binary = _mathLab2.default.fromNumber.createBinary(this.number);
          break;

        case 'binary':
          this.binary = value;
          this.number = _mathLab2.default.fromBinary.createNumber(this.binary);
          this.simple = _mathLab2.default.fromNumber.createSimple(this.number);
          break;

        default:
          throw new Error('unexpected object type');
      }
    }
  }]);

  return vetor;
}();

exports.default = vetor;