import { Communicator } from './communicator'

export class SmartAnalytics {
  constructor (opt) {
    let defaults = {
      interval: 3000,
      serverInfo: {}
    }

    this.opt = {
      ...defaults,
      ...opt
    }

    this.data = '123'

    this.communicator = new Communicator(this.opt.serverInfo)
  }

  interval () {
    setInterval(() => {
      this.communicator.send(this.data)
    }, this.opt.interval)
  }

  send () {
    this.communicator.send(this.data)
  }
}
