
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
    return {
      bests: this.citizens.slice(0, split),
      worsts: this.citizens.slice(split)
    }
  }

  selection(groups) {
    groups.worsts
      .map(
        wanted => {
          const post = this.find(wanted)
          this.citizens[post].die()
          delete this.citizens[post]
        })
    this.citizens = groups.bests
  }

  find(wanted) {
    let found = false
    this.citizens
      .map(
        (citizen, i) => {
          if (!found && wanted.chromosome === citizen.chromosome) {
            found = true
            wanted = i
      }})
    return wanted
  }

  findFathers(wanteds, fathers) {
    let found = false
    fathers
      .map(
        parent => {
          if ( (wanteds.f === parent.f && wanteds.m === parent.m)
            || (wanteds.f === parent.m && wanteds.m === parent.f) ) {
            found = true
          }
      })
    return found
  }

  populate(list) {
    const fathers = []
    list.map( father => {
      list.map( mother => {
        if (father.chromosome !== mother.chromosome) {
          const parent = {
            f: father,
            m: mother
          }
          if (!this.findFathers(parent, fathers)) {
            fathers.push(parent)
            const binary = mother.birth(father)
            this.citizens.push(
              new citizen(this.ranges, this.judgeFunction, binary))
        }}
    })})
  }

  order() {
    this.clear()
    this.citizens = this.citizens.sort((a, b) => {
      return a.fitness > b.fitness
    })
  }

  clear() {
    const polluted = this.citizens, clear = []
    polluted
      .map(
        item => clear.push(item))
    this.citizens = clear
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
