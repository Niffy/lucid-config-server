 const ExtendableError = require ('../extendable')

 class NoStageExists extends ExtendableError {
   constructor(stageName) {
     super(`No such stage ${stageName} exists`)
   }
 }

 class StageAlreadyExists extends ExtendableError {
   constructor(stageName) {
     super(`Stage ${stageName} already exists`)
   }
 }

 module.exports = {
   NoStageExists,
   StageAlreadyExists
 }
