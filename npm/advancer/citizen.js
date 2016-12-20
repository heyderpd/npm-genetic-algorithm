'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chromosome = require('./chromosome');

var _chromosome2 = _interopRequireDefault(_chromosome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var citizen = function () {
  function citizen(ranges, judge) {
    var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, citizen);

    if (ranges[0].constructor.name !== 'range') {
      throw new Error('unexpected object type');
    }

    this.couple = [];
    this.judge = judge;
    this.ranges = ranges;
    this.fitness = undefined;
    this.chromosome = null;

    if (values === null) {
      values = ranges.map(function (x) {
        return x.new();
      });
    }

    if (values.constructor.name === 'chromosome') {
      values = values.vetors.map(function (x) {
        return x.simple;
      });
    }

    if (values[0].constructor.name === 'simple') {
      this.chromosome = new _chromosome2.default(values, ranges);
      this.fitness = this.getFitness();
    } else {
      throw new Error('unexpected object type');
    }
  }

  _createClass(citizen, [{
    key: 'birth',
    value: function birth(father) {
      return this.chromosome.mix(father.chromosome);
    }
  }, {
    key: 'getFitness',
    value: function getFitness() {
      var _this = this;

      var sum = 0;
      var simples = this.chromosome.extract('simple');
      simples.map(function (simple) {
        sum += _this.judge(simple.get());
      });
      return sum / simples.length;
    }
  }, {
    key: 'die',
    value: function die() {
      this.judge = null;
      this.ranges = null;
      this.fitness = null;
      this.chromosome = null;
    }
  }]);

  return citizen;
}();

exports.default = citizen;