'use strict'

const test = require('tape'),
      tapDoctest = require('../src/index.js')

test('Dummy test', t => {
  t.plan(1)

  t.equal(42, 0x2A)
})
