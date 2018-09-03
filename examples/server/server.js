const http = require('http')

const host = '0.0.0.0'
const port = 8000

http.createServer((request, response) => {
  const { method } = request

  let body = ''
  request
    .on('data', chunk => {
      body += chunk
    })
    .on('end', () => {
      body = body.toString()

      switch (method) {
        case 'POST':
        case 'PUT':
          console.log(body)
          break
        case 'OPTIONS':
          break

        default:
          console.error(`do not permit: ${method}`)
          break
      }
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'POST, PUT')
      response.end('success\n')
    })
}).listen(port, host, () => {
  console.log(`Started at ${host}:${port}`)
})
