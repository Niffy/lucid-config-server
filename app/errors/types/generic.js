const ExtendableError = require ('../extendable')

class NoExists extends ExtendableError {
  constructor(name) {
    super(`${name} does not exist`)
  }
}

class AlreadyExists extends ExtendableError {
  constructor(name) {
    super(`${name} already exists`)
  }
}

module.exports = {
  NoExists,
  AlreadyExists
}
