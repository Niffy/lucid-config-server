const Stage = require('../resource/stage')

module.exports = (server) => {
  server.get('/', (req, res, next) => {
    res.send('hello')
  })

  // get json
  server.get('/config',(req, res, next) => {

  })
    //send json
  server.put('/config', (req, res, next) => {

  })

  // remove from stage
  server.del('/:stage', Stage.remove)

  // set entire stage with versions
  server.put('/:stage', Stage.set)

  // get entire stage with versions
  server.get('/:stage', Stage.get)

  // remove version from stage
  server.del('/:stage/:version', Stage.removeVersion)

  // set entire config for stage and version
  server.put('/:stage/:version', Stage.setVersion)

  // get config for stage and version
  server.get('/:stage/:version', Stage.getVersion)

  // get property from stage and version
  server.get('/:stage/:version/property', Stage.setProperty)

  // remove property from stage and version
  server.del('/:stage/:version/property', Stage.removeProperty)

  // Put property into stage and version
  server.put('/:stage/:version/property', Stage.getProperty)

}
