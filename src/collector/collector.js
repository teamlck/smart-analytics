export class Collector {
  constructor (store) {
    // This class CANNOT be instance
    if (new.target === Collector) {
      throw new TypeError('Cannot construct \'Collector\' instances directly')
    }

    // Abstract methods
    if (this.registerEvent === undefined) {
      throw new TypeError('Must override abstract method \'registerEvent\'')
    }

    this.registerEvent()

    this.name = this.constructor.name
    this.store = store
  }

  registerEvent () { /* Abstract method */ }

  on (event, callback) {
    window.addEventListener(event, callback, false)
  }

  off (event, callback) {
    window.removeEventListener(event, callback)
  }

  save (data) {
    this.store.save(this.name, data)
  }
}
