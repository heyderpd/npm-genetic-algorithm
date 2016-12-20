'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var operator = {
  shuffle: function shuffle(sampleA, sampleB) {
    sampleA.map(function (geneA, i) {
      var geneB = sampleB[i];
      return {
        before: operator.shufflePart(geneA.before, geneB.before),
        after: operator.shufflePart(geneA.after, geneB.after)
      };
    });
  },

  shufflePart: function shufflePart(sampleA, sampleB) {
    var minor = void 0,
        major = void 0,
        mix = [],
        combined = '';
    if (sampleA.length < sampleB.length) {
      minor = String(sampleA);
      major = String(sampleB);
    } else {
      minor = String(sampleB);
      major = String(sampleA);
    }
    var j = void 0;
    for (var i = minor.length - 1; i >= 0; i--) {
      var char = void 0;
      j = major.length - minor.length + i;
      mix[i] = minor.length > i ? i % 2 ? major[j] : minor[i] : major[j];
    }
    return major.substring(0, j) + mix.join('');
  }
};

exports.default = operator;