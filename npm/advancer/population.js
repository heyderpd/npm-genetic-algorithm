'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _citizen = require('./citizen');

var _citizen2 = _interopRequireDefault(_citizen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var population = function () {
  function population(ranges, judgeFunction, values) {
    _classCallCheck(this, population);

    if (ranges[0].constructor.name !== 'range') {
      throw new Error('unexpected object type');
    }

    this.judgeFunction = judgeFunction;
    this.ranges = ranges;
    this.citizens = [];

    switch (values.constructor.name) {
      case 'Number':
        this.createPopulation(values, judgeFunction);
        break;

      case 'Array':
        this.revivePopulation(values, judgeFunction);
        break;

      default:
        throw new Error('unexpected object type');
    }
  }

  _createClass(population, [{
    key: 'split',
    value: function split(_split) {
      this.clear();
      _split = this.citizens.length - _split;
      return {
        worsts: this.citizens.slice(0, _split),
        bests: this.citizens.slice(_split)
      };
    }
  }, {
    key: 'selection',
    value: function selection(groups) {
      groups.worsts.map(function (wanted) {
        return wanted.die();
      });
      this.citizens = groups.bests;
    }
  }, {
    key: 'isNewCouple',
    value: function isNewCouple(father, mother) {
      return father.couple.filter(function (pair) {
        return pair.chromosome === mother.chromosome;
      }).length === 0;
    }
  }, {
    key: 'populate',
    value: function populate(list) {
      var _this = this;

      list.map(function (father) {
        return father.couple = [];
      });
      list.map(function (father) {
        list.map(function (mother) {
          if (father.chromosome !== mother.chromosome) {
            if (_this.isNewCouple(father, mother)) {
              mother.couple.push(father);
              father.couple.push(mother);

              var binary = mother.birth(father);
              _this.citizens.push(new _citizen2.default(_this.ranges, _this.judgeFunction, binary));
            }
          }
        });
      });
    }
  }, {
    key: 'order',
    value: function order() {
      this.clear();
      this.citizens = this.citizens.sort(function (a, b) {
        return a.fitness > b.fitness ? 1 : -1;
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.citizens = this.citizens.filter(function (item) {
        return !!item;
      });
    }
  }, {
    key: 'createPopulation',
    value: function createPopulation(citizensLimit, judgeFunction) {
      if (citizensLimit < 0) {
        throw new Error('unexpected value');
      }

      while (citizensLimit-- >= 0) {
        this.citizens.push(new _citizen2.default(this.ranges, judgeFunction));
      }
    }
  }, {
    key: 'revivePopulation',
    value: function revivePopulation(fossils, judgeFunction) {
      var _this2 = this;

      if (fossils.length > 0 && fossils[0].length > 0 && fossils[0][0].constructor.name === 'simple') {
        fossils.map(function (values) {
          return _this2.citizens.push(new _citizen2.default(_this2.ranges, judgeFunction, values));
        });
      } else {
        throw new Error('unexpected value');
      }
    }
  }]);

  return population;
}();

exports.default = population;