
class operator {
  shuffle = (sampleA, sampleB) => {
    return {
      before: this.shufflePart(
        sampleA.before,
        sampleB.before),
      after: this.shufflePart(
        sampleA.after,
        sampleB.after)
    }
  }

  shufflePart = (sampleA, sampleB) => {
    let minor, major
    if (sampleA.length < sampleB.length) {
      minor = sampleA
      major = sampleB
    } else {
      minor = sampleB
      major = sampleA
    }
    minor.map(
      (char, i) => {
        if (i % 2){
          major[i] = char
        }
      })
    return major
  }
}

export default operator
