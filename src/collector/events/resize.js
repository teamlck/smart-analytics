import { Collector } from '../collector'

export class ResizeEventCollector extends Collector {
  constructor (store) {
    super(store)
  }

  registerEvent () {
    this.on('resize', e => this.resize(e))
  }

  resize (e) {
    this.save({
      time: Date.now(),
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      type: e.type
    })
  }
}
