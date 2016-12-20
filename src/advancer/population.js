
import citizen from './citizen'

class population {
  constructor (ranges, judgeFunction, values) {
    if (ranges[0].constructor.name !== 'range') {
      throw new Error('unexpected object type')
    }

    this.judgeFunction = judgeFunction
    this.ranges = ranges
    this.citizens = []

    switch(values.constructor.name) {
      case 'Number':
        this.createPopulation(values, judgeFunction)
        break

      case 'Array':
        this.revivePopulation(values, judgeFunction)
        break

      default:
        throw new Error('unexpected object type')
    }
  }

  split(split) {
    this.clear()
    split = this.citizens.length -split
    return {
      worsts: this.citizens.slice(0, split),
      bests: this.citizens.slice(split)
    }
  }

  selection(groups) {
    groups.worsts
      .map(wanted => wanted.die())
    this.citizens = groups.bests
  }

  isNewCouple(father, mother) {
    const couple = father
      .couple.filter(
        pair => pair.chromosome === mother.chromosome)
      // .length > 0
    console.log(couple)
    return couple.length === 0
  }

  populate(list) {
    list.map(father => father.couple = [])
    list.map(father => {
      list.map(mother => {
        if (father.chromosome !== mother.chromosome) {
          if (this.isNewCouple(father, mother)) {
            mother.couple.push(father)
            father.couple.push(mother)

            const binary = mother.birth(father)
            this.citizens.push(
              new citizen(this.ranges, this.judgeFunction, binary))
        }}
    })})
  }

  order() {
    this.clear()
    this.citizens = this.citizens.sort(
      (a, b) => a.fitness > b.fitness ? 1 : -1)
  }

  clear() {
    this.citizens = this.citizens
      .filter(item => !!item)
  }

  createPopulation(citizensLimit, judgeFunction) {
    if (citizensLimit < 0) {
      throw new Error('unexpected value');
    }

    while (citizensLimit-- >= 0) {
      this.citizens.push(
        new citizen(this.ranges, judgeFunction))
    }
  }

  revivePopulation(fossils, judgeFunction) {
    if (fossils.length > 0
        && fossils[0].length > 0
        && fossils[0][0].constructor.name === 'simple') {
      fossils
        .map(
          values => this.citizens
            .push(
              new citizen(this.ranges, judgeFunction, values)))

    } else {
      throw new Error('unexpected value')
    }
  }
}

export default population
