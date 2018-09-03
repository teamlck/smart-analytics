import { SmartAnalytics } from '../../src/index'

new SmartAnalytics({
  interval: 2000,
  serverInfo: {
    url: 'http://localhost:8000/api/send',
    method: 'put',
    type: 'json'
  }
}).interval()
