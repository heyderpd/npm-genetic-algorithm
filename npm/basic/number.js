'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mathLab = require('./../lib/math-lab');

var _mathLab2 = _interopRequireDefault(_mathLab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var number = function number(value) {
  _classCallCheck(this, number);

  var num = void 0;

  switch (value.constructor.name) {
    case 'simple':
      num = _mathLab2.default.fromSimple.createNumber(value);
      break;

    case 'binary':
      num = _mathLab2.default.fromBinary.createNumber(value);
      break;

    default:
      throw new Error('unexpected object type');
  }

  this.before = num.before;
  this.after = num.after;
};

exports.default = number;