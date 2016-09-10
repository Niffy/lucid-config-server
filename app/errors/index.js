/*
  This file will load in all the exported functions in the types folder in to
  one export to make it easier and less verbose to get a different error
  @example
  const Errors = require('../errors')
  const NoStageExists = Errors.NoStageExists

  new NoStageExists('stageNameHere')
 */

const fs = require('fs')
const path = require('path')
const typesPath = path.join(__dirname, '/types')
let fns = module.exports = {}

// Read in each file in the types dir
fs.readdirSync(typesPath)
  .filter(function (item) {
    // Filter out files which are index.js
    return item !== 'index.js'
  })
  .forEach(function (item) {
    // For each file get extends its exports to the fns exports
    Object.assign(fns, require(path.join(typesPath, item)))
  })
