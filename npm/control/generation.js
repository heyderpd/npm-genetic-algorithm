'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _population = require('./../advancer/population');

var _population2 = _interopRequireDefault(_population);

var _simple = require('./../basic/simple');

var _simple2 = _interopRequireDefault(_simple);

var _range = require('./../basic/range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generation = function () {
  function generation(population, ageLimit, popLimit, surviver) {
    _classCallCheck(this, generation);

    this.population = population;
    this.surviver = surviver;
    this.limit = ageLimit;
    this.pop = popLimit;
    this.year = 0;
  }

  _createClass(generation, [{
    key: 'execute',
    value: function execute() {
      console.log('generations');
      this.population.order();
      var groups = void 0,
          limit = this.limit;
      while (limit-- > 0) {
        groups = this.population.split(this.surviver);
        this.population.populate(groups.bests);
        this.population.order();
        groups = this.population.split(this.pop);
        this.population.selection(groups);
        console.log(this.limit - limit + '\xBA');
      }
      this.population.order();
    }
  }, {
    key: 'resume',
    value: function resume() {
      var best = this.population.citizens.pop();
      console.log('fitness\t\tsolution');
      this.population.citizens.map(function (citizen) {
        return console.log(citizen.fitness, citizen.chromosome.extract('fossilise'));
      });
      console.log('best fitness:', best.fitness, 'citizens:', this.population.citizens.length);
      var bestFossil = best.chromosome.extract('fossilise');
      console.log('solution:', bestFossil);
      return bestFossil[0];
    }
  }]);

  return generation;
}();

exports.default = generation;