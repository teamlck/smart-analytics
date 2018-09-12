import { Collector } from '../collector'

export class TouchEventCollector extends Collector {
  constructor (store) {
    super(store)

    this.cache = []
  }

  registerEvent () {
    this.on('touchstart', this.touchStart)
    this.on('touchmove', this.touchMove)
    this.on('touchend', this.touchEnd)
    this.on('touchcancel', this.touchEnd)
  }

  touchStart (ev) {
    this.cache.push(ev)

    // TODO Not yet
  }

  touchMove (ev) {
    // TODO Not yet
  }

  touchEnd (ev) {
    // TODO Not yet

    super.save(ev)
  }
}
