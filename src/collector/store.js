export class Store {
  constructor () {
    this.store = {}
  }

  save (name, data) {
    if (!this.store[name]) this.store[name] = []
    this.store[name].push(data)
    return this
  }

  clear () {
    this.store = {}
    return this
  }

  getData () {
    return this.store
  }
}
