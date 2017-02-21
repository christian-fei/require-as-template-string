'use strict'

const {assign} = Object

module.exports.r = module.exports.rr = global.r = global.rr = ([name], _) => {
  return name.includes(',')
    ? name.split(',').reduce(toModule, {})
    : require(name)

  function toModule (dict, name, i, {length}) {
    return assign(dict, {[name]: require(name), [i]: require(name), length})
  }
}
