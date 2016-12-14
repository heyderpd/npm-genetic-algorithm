
const operator = {
  shuffle: (sampleA, sampleB) => {
    sampleA
      .map((geneA, i) => {
        const geneB = sampleB[i]
        return {
          before: operator.shufflePart(
            geneA.before,
            geneB.before),
          after: operator.shufflePart(
            geneA.after,
            geneB.after)
        }
      })
  },

  shufflePart: (sampleA, sampleB) => {
    let minor, major, mix = [], combined = ''
    if (sampleA.length < sampleB.length) {
      minor = String(sampleA)
      major = String(sampleB)
    } else {
      minor = String(sampleB)
      major = String(sampleA)
    }
    let j
    for (let i=minor.length -1; i>=0; i--){
      let char
      j = major.length -minor.length +i
      mix[i] = minor.length > i
        ? (
          i % 2
            ? major[j]
            : minor[i])
        : major[j]
    }
    return major.substring(0, j) + mix.join('')
  }
}

export default operator
