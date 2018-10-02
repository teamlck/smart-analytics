import { Collector } from '../collector'
import _ from 'lodash'
export class ScrollEventCollector extends Collector {
  constructor (store) {
    super(store)

    this.cache = []
  }

  registerEvent () {
    this.on('scroll', _.throttle(e => this.scroll(e), 100))
  }

  scroll (e) {
    let data = {
      time: Date.now(),
      type: e.type,
      scrollY: window.scrollY,
      scrollX: window.scrollX
    }

    super.save(data)
  }
}
