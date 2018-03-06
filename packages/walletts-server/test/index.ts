import * as test from 'ava'

let server;

test.before((t) => {
  server = ps.spawn([])
})