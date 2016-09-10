const package = require('../../package.json')
let Formatters = {}

function makeSuccessBody (data) {
  return {
    version: package.version,
    status: 'success',
    data: data
  }
}

function makeErrorBody (res, data) {
  return {
    version: package.version,
    status: 'error',
    message: data.message,
    type: data.name
  }
}

Formatters['application/json'] = function (req, res, body, cb) {
  let response = {}

  if (body instanceof Error) {
    response = makeErrorBody(res, body)
  } else {
    response = makeSuccessBody(body)
  }
  response = JSON.stringify(response)
  return cb(null, response)
}

module.exports = Formatters
