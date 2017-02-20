module.exports.r = module.exports.rr = global.r = global.rr = ([m], _) => {
  const mm = m.split(',').map(m => require(m))
  return mm.length === 1 ? mm[0] : mm
}
