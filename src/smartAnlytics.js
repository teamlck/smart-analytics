import { Communicator } from './communicator'
import { Store, TouchEventCollector } from './collector'

export class SmartAnalytics {
  constructor (opt) {
    let defaults = {
      interval: 3000,
      serverInfo: {},
      collect: ['touch']
    }

    this.opt = {
      ...defaults,
      ...opt
    }

    this.communicator = new Communicator(this.opt.serverInfo)

    this.store = new Store()
    this.collectorFactory()
  }

  collectorFactory () {
    this.opt.collect.map(collect => {
      switch (collect) {
        case 'touch': return TouchEventCollector
        default: break
      }
    }).forEach(Collector => new Collector(this.store))
  }

  interval () {
    setInterval(() => {
      this.communicator.send(this.store.getData())
      this.store.clear()
    }, this.opt.interval)
  }

  send () {
    this.communicator.send(this.store.getData())
    this.store.clear()
  }
}
