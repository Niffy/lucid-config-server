const restify = require('restify')
const chance = require('chance').Chance(process.pid)
const routes = require('./routes')
const formatters = require('./extra/formatters')
const server_options = {
  name: chance.guid(),
  port: 4000,
  formatters: formatters
}

class server {
  constructor() {
    this.serverInstance = restify.createServer(server_options)
    this.serverInstance.use(restify.bodyParser({ mapParams: false }))
    routes(this.serverInstance)
  }

  run() {
    this.serverInstance.listen(server_options.port, () => {
      console.log(`${this.serverInstance.name} started on port ${server_options.port}`)
    })
  }
}


module.exports = new server()
