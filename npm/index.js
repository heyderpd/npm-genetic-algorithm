'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _mathLab = require('./lib/math-lab');

var _mathLab2 = _interopRequireDefault(_mathLab);

var _generation = require('./control/generation');

var _generation2 = _interopRequireDefault(_generation);

var _population = require('./advancer/population');

var _population2 = _interopRequireDefault(_population);

var _simple = require('./basic/simple');

var _simple2 = _interopRequireDefault(_simple);

var _range = require('./basic/range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fastGenetic = function () {
  function fastGenetic() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, fastGenetic);

    this.crono = false;
    if (args.debug) {
      this.crono = +new Date();
    }

    if (!args.create && !args.load) {
      throw new Error('unexpected value of');
    }

    if (args.create) {
      if (args.popLimit < 2) {
        throw new Error('unexpected value of');
      }

      if (args.surviver < 2) {
        throw new Error('unexpected value of');
      }

      if (args.surviver >= args.popLimit) {
        throw new Error('unexpected value of');
      }
    }

    if (args.ageLimit < 2) {
      throw new Error('unexpected value of');
    }

    if (args.ranges && args.ranges.constructor.name !== 'Array') {
      throw new Error('unexpected value of');
    }

    if (args.judgeFunction && args.judgeFunction.constructor.name !== 'Function') {
      throw new Error('unexpected value of');
    }

    this.ranges = this.createRanges(args.ranges);
    this.limit = args.popLimit;
    var population = null;

    if (args.create) {
      population = this.createCitizens(args.judgeFunction);
    } else if (args.load) {
      population = this.data.load();
    }

    this.generation = new _generation2.default(population, args.ageLimit, args.popLimit, args.surviver);
  }

  _createClass(fastGenetic, [{
    key: 'execute',
    value: function execute() {
      this.generation.execute();
      if (!!this.crono) {
        this.crono = (+new Date() - this.crono) / 1000;
        console.log('ALL iteration\'s in ' + this.crono + ' ms.');
      }
      return this.generation.resume();
    }
  }, {
    key: 'createCitizens',
    value: function createCitizens(judgeFunction) {
      return new _population2.default(this.ranges, judgeFunction, this.limit);
    }
  }, {
    key: 'load',
    value: function load() {
      var age = JSON.parse(_fsExtra2.default.readFileSync('./age', 'utf8'));

      this.ranges = this.citizens.createRanges(age['ranges']);
      this.population = new _population2.default(this.ranges, this.citizens.unFossilise(age['fossils']));
    }
  }, {
    key: 'save',
    value: function save() {
      var age = {
        ranges: this.ranges,
        fossils: this.citizens.fossilise()
      };
      _fsExtra2.default.writeFileSync('./age', age);
    }
  }, {
    key: 'fossilise',
    value: function fossilise() {
      return this.population.map(_mathLab2.default.citizens.fossilise);
    }
  }, {
    key: 'unFossilise',
    value: function unFossilise(fossils) {
      return fossils.map(_mathLab2.default.citizens.unFossilise);
    }
  }, {
    key: 'createRanges',
    value: function createRanges(ranges) {
      return ranges.map(function (x) {
        return new _range2.default(x[0], x[1]);
      });
    }
  }]);

  return fastGenetic;
}();

exports.default = fastGenetic;