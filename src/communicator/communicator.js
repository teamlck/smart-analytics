import axios from 'axios'

export class Communicator {
  constructor (opt) {
    let defaults = {
      headers: opt.type === 'xml' ? {
        'content-type': 'application/xml', 'accept': 'application/xml'
      } : {
        'content-type': 'application/json', 'accept': 'application/json'
      }
    }

    this.opt = {
      ...defaults,
      ...opt
    }
  }

  send (data) {
    if (!data || Object.keys(data).length === 0) return

    // TODO: Need to normalize data before send()
    // this.normalize(data)

    axios({
      url: this.opt.url,
      method: this.opt.method,
      data: data
    }).then(response => {
      console.log(`status: ${response.status} / data: ${response.data}`)
    }).catch(error => {
      console.error(error)
    })
  }

  normalize (data) {
    // TODO: Need to consider how to normalize data

    if (typeof data === 'string') {
      if (/^[\],:{}\s]*$/.test(data
        .replace(/\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        // the json is ok

      } else {
        console.log('no json')
      }
    }
  }
}
