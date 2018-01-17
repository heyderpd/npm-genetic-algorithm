
import fs from 'fs-extra'
import mathLab from './lib/math-lab'
import generation from './control/generation'
import population from './advancer/population'
import simple from './basic/simple'
import range from './basic/range'

class fastGenetic {
  constructor (args = {}) {

    this.crono = false
    if (args.debug) {
      this.crono = +new Date()
    }

    if (!args.create && !args.load) {
      throw new Error(`unexpected value of "create", [${JSON.stringify(create)}]`)
    }

    if (args.create) {
      if (args.popLimit < 2) {
        throw new Error(`unexpected value of "popLimit", [${JSON.stringify(popLimit)}]`)
      }

      if (args.surviver < 2) {
        throw new Error(`unexpected value of "surviver", [${JSON.stringify(surviver)}]`)
      }

      if (args.surviver >= args.popLimit) {
        throw new Error(`unexpected value of "surviver", [${JSON.stringify(surviver)}]`)
      }
    }

    if (args.ageLimit < 2) {
      throw new Error(`unexpected value of "ageLimit", [${JSON.stringify(ageLimit)}]`)
    }

    if (args.ranges && args.ranges.constructor.name !== 'Array') {
      throw new Error(`unexpected value of "ranges", [${JSON.stringify(ranges)}]`)
    }

    if (args.judgeFunction && args.judgeFunction.constructor.name !== 'Function') {
      throw new Error(`unexpected value of "judgeFunction", [${JSON.stringify(judgeFunction)}]`)
    }

    this.ranges = this.createRanges(args.ranges)
    this.limit = args.popLimit
    let population = null

    if (args.create) {
      population = this.createCitizens(args.judgeFunction)
    } else if (args.load) {
      population = this.data.load()
    }

    this.generation = new generation(
      population,
      args.ageLimit,
      args.popLimit,
      args.surviver)
  }

  execute() {
    this.generation.execute()
    if (!!this.crono) {
      this.crono = (+new Date() -this.crono) /1000
      console.log(`ALL iteration's in ${this.crono} ms.`)
    }
    return this.generation.resume()
  }

  createCitizens(judgeFunction) {
    return new population(
      this.ranges,
      judgeFunction,
      this.limit)
  }

  load() {
    const age = JSON.parse(
      fs.readFileSync(
        './age',
        'utf8'))

    this.ranges = this.citizens.createRanges(age['ranges'])
    this.population = new population(
      this.ranges,
      this.citizens.unFossilise(age['fossils']))
  }

  save() {
    const age = {
      ranges: this.ranges,
      fossils: this.citizens.fossilise()
    }
    fs.writeFileSync(
      './age',
      age)
  }

  fossilise() {
    return this.population.map(mathLab.citizens.fossilise)
  }

  unFossilise(fossils) {
    return fossils.map(mathLab.citizens.unFossilise)
  }

  createRanges(ranges) {
    return ranges
      .map(
        x => new range(x[0], x[1]))
  }
}

export default fastGenetic
