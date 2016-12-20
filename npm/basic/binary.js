'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mathLab = require('./../lib/math-lab');

var _mathLab2 = _interopRequireDefault(_mathLab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var binary = function binary(value) {
  _classCallCheck(this, binary);

  var bin = void 0;

  switch (value.constructor.name) {
    case 'number':
      bin = _mathLab2.default.fromNumber.createBinary(value);
      break;

    default:
      throw new Error('unexpected object type');
  }

  this.before = bin.before;
  this.after = bin.after;
};

exports.default = binary;