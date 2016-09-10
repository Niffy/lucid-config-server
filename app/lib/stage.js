const GenericData = require('./genericData')
const Errors = require('../errors')

class Stage extends GenericData {
  constructor() {
    super()
    this.NoExists = Errors.NoStageExists // eslint-disable-line no-undef
    this.AlreadyExists = Errors.StageAlreadyExists // eslint-disable-line no-undef'
  }
}

module.exports = new Stage()
