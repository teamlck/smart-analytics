import { Collector } from '../collector'

export class TouchEventCollector extends Collector {
  constructor (store) {
    super(store)

    this.cache = {}
  }

  registerEvent () {
    this.on('touchstart', e => this.touchStart(e))
    this.on('touchmove', e => this.touchMove(e))
    this.on('touchend', e => this.touchEnd(e))
    this.on('touchcancel', e => this.touchEnd(e))
  }

  touchStart (e) {
    /*
      Touch
      clientX : 490.0255126953125
      clientY : 981.4205932617188
      force : 1
      identifier : 0
      pageX : 490.0255126953125
      pageY : 981.4205932617188
      radiusX : 25.044443130493164
      radiusY : 25.044443130493164
      rotationAngle : 0
      screenX : 597.01171875
      screenY : 637.65234375
    */
    this.cache.strat = Date.now()

    for (let i = 0 ; i < e.touches.length; i++) {
    }

    this.cache.touches = e.touches
    this.cache.target = e.target

    // TODO Not yet
  }

  touchMove (e) {
    // TODO Not yet

    this.cache.touches.push(...e.touches)
    this.cache.target = e.target
  }

  touchEnd (e) {
    // TODO Not yet

    console.log(e)
    this.save(this.cache)
    this.cache = {}
  }
}
