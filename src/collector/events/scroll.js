import { Collector } from '../collector'

export class ScrollEventCollector extends Collector {
  registerEvent () {
    this.on('scroll', e => this.scroll(e))
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
