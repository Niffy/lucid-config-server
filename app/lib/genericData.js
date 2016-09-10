const Errors = require('../errors')

class GenericData {
  constructor() {
    this.data = new Map()
    this.NoExists = Errors.NoExists // eslint-disable-line no-undef
    this.AlreadyExists = Errors.AlreadyExists // eslint-disable-line no-undef
  }

  remove (name) {
    return new Promise((resolve, reject) => {
      if (!this.data.has(name)) {
        return reject(new this.NoExists(name))
      }

      this.data.delete(name)
      return resolve()
    })
  }

  set (name, data) {
    return new Promise((resolve, reject) => {
      var exists = this.data.has(name)
      this.data.set(name, data)
      return resolve({
        overwritten: exists
      })
    })
  }

  get(name) {
    return new Promise((resolve, reject) => {
      if (!this.data.has(name)) {
        return reject(new this.NoExists(name))
      }
      return resolve(this.data.get(name))
    })
  }
}

module.exports = GenericData
