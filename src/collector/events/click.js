import { Collector } from '../collector'

export class ClickEventCollector extends Collector {
  constructor (store) {
    super(store)

    this.cache = {}
  }

  registerEvent () {
    this.on('mousedown', e => this.mousedown(e))
    this.on('mouseup', e => this.mouseup(e))
  }

  mousedown (e) {
    this.cache.mousedown = {
      time: Date.now(),
      pageX: e.pageX,
      pageY: e.pageY,
      type: e.type,
      target: {
        id: e.target.id,
        nodeName: e.target.nodeName,
        className: e.target.className
      }
    }
  }

  mouseup (e) {
    this.cache.mouseup = {
      time: Date.now(),
      pageX: e.pageX,
      pageY: e.pageY,
      type: e.type,
      target: {
        id: e.target.id,
        nodeName: e.target.nodeName,
        className: e.target.className
      }
    }

    this.save(this.cache)

    this.cache = {}
  }
}
