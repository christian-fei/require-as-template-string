'use strict'

const {assign} = Object

module.exports.r = module.exports.rr = global.r = global.rr = ([requireString], _) => {
  const modules = requireString.split(',')
  if (modules.length === 1) {
    return require(modules[0])
  }
  const toModuleDict = (dict, name) => assign(dict, {[name]: require(name)})
  return modules.reduce(toModuleDict, {})
}
