/* global test */

const {ok, equal, deepEqual} = require('assert')
const {r, rr} = require('..')

test('exports `r` and `rr`', () => {
  ok(r)
  ok(rr)
})

test('exports `r` and `rr` on the global scope', () => {
  ok(global.r)
  ok(global.rr)

  equal(r, global.r)
  equal(rr, global.rr)
})

test('requires a module', () => {
  equal(require('url'), r`url`)
})

test('requires multiple modules object destructuring', () => {
  const {url, net} = r`url,net`
  deepEqual(url, require('url'))
  deepEqual(net, require('net'))
})

test('requires multiple modules array destructuring', () => {
  const [url, net] = Array.from(r`url,net`)
  equal(url, require('url'))
  equal(net, require('net'))
})
