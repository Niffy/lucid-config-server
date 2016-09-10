const Stages = require('../lib/stage')

function remove (req, res) {
  let stage = req.params.stage
  Stages.remove(stage)
    .then (() => {
      res.send(`Remove stage ${stage}`)
    })
    .catch((err) => {
      res.send(err)
    })
}

function set (req, res) {
  let stage = req.params.stage
  Stages.set(stage, req.body)
  .then (() => {
    return res.send(`Set stage ${stage}`)
  })
  .catch((err) => {
    return res.send(err)
  })
}

function get (req, res) {
  let stage = req.params.stage
  Stages.get(stage)
  .then ((data) => {
    return res.send(data)
  })
  .catch((err) => {
    return res.send(err)
  })
}

function removeVersion (req, res) {
  console.log('stuff')
  res.send(req.url)
}

function setVersion (req, res) {
  console.log('stuff')
  res.send(req.url)
}

function getVersion (req, res) {
  console.log('stuff')
  res.send(req.url)
}

function setProperty (req, res) {
  console.log('stuff')
  res.send(req.url)
}

function removeProperty (req, res) {
  console.log('stuff')
  res.send(req.url)
}

function getProperty (req, res) {
  console.log('stuff')
  res.send(req.url)
}

module.exports = {
  remove,
  set,
  get,
  removeVersion,
  setVersion,
  getVersion,
  setProperty,
  removeProperty,
  getProperty
}
