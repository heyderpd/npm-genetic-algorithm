'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _randomTendentious = require('random-tendentious');

var _randomTendentious2 = _interopRequireDefault(_randomTendentious);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mathLab = {
  random: function random(min, max) {
    return (0, _randomTendentious2.default)({
      l: [min, max] });
  },

  fromSimple: {
    toInt: function toInt(number) {
      return parseInt(number);
    },

    toDecimal: function toDecimal(number) {
      return parseInt(number, 2);
    },

    toBinary: function toBinary(number) {
      return number.toString(2);
    },

    createNumber: function createNumber(simple) {
      var splited = String(simple.get()).split('.').map(function (x) {
        return mathLab.fromSimple.toInt(x);
      });
      var beforeComma = splited[0];
      var afterComma = splited[1];
      return {
        before: beforeComma,
        after: afterComma
      };
    }
  },

  fromNumber: {
    createSimple: function createSimple(number) {
      return mathLab.fromSimple.toInt(number.before + '.' + number.after);
    },

    createBinary: function createBinary(number) {
      var beforeComma = mathLab.fromSimple.toBinary(number.before);
      var afterComma = mathLab.fromSimple.toBinary(number.after);
      return {
        before: beforeComma,
        after: afterComma
      };
    }
  },

  fromBinary: {
    createNumber: function createNumber(binary) {
      var beforeComma = mathLab.fromSimple.toDecimal(binary.before);
      var afterComma = mathLab.fromSimple.toDecimal(binary.after);
      return {
        before: beforeComma,
        after: afterComma
      };
    }
  },

  citizens: {
    fossilise: function fossilise(citizen) {
      return citizen.chromosome.extract('fossilise');
    },

    unFossilise: function unFossilise(citizen) {
      return citizen.map(function (value) {
        return new simple(value);
      });
    }
  }
};

exports.default = mathLab;