import { Collector } from '../collector'

export class ResizeEventCollector extends Collector {
  constructor (store) {
    super(store)

    this.cache = {}
  }

  registerEvent () {
    this.on('resize', e => this.resize(e))
  }

  resize (e) {
    this.cache.resize = {
      time: Date.now(),
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      type: e.type
    }

    this.save(this.cache)

    this.cache = {}
  }
}
