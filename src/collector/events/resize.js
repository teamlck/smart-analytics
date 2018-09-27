import { Collector } from '../collector'

export class ResizeEventCollector extends Collector {
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
