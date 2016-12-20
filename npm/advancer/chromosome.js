'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geneticalOperator = require('./../lib/genetical-operator');

var _geneticalOperator2 = _interopRequireDefault(_geneticalOperator);

var _vetor = require('./../basic/vetor');

var _vetor2 = _interopRequireDefault(_vetor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chromosome = function () {
  function chromosome(values, ranges) {
    _classCallCheck(this, chromosome);

    if (values.length !== ranges.length) {
      throw new Error('ranges.length not equal values.length');
    }

    this.vetors = values.map(function (value, i) {
      return new _vetor2.default(value, ranges[i]);
    });
  }

  _createClass(chromosome, [{
    key: 'mix',
    value: function mix(chromosome) {
      var sampleA = this.extract('binary');
      var sampleB = chromosome.extract('binary');
      return _geneticalOperator2.default.shuffle(sampleA, sampleB);
    }
  }, {
    key: 'extract',
    value: function extract(part) {
      switch (part) {
        case 'fossilise':
        case 'simple':
        case 'number':
        case 'binary':
          break;

        default:
          throw new Error('unexpected part');
      }

      if (part === 'fossilise') {
        return this.vetors.map(function (vetor) {
          return vetor.simple.get();
        });
      } else {
        return this.vetors.map(function (vetor) {
          return vetor[part];
        });
      }
    }
  }]);

  return chromosome;
}();

exports.default = chromosome;