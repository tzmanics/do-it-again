'use strict'

const Hapi = require('hapi')
const Hoek = require('hoek')
const Settings = require('./settings')

const server = new Hapi.Server({
  host: 'localhost',
  port: Settings.port
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return 'Hello, Toshi!'
  }
})

async function start() {
  try {
    await server.start()
  }
  catch (err) { 
    Hoek.assert(!err, err)
    process.exit()
  }

  console.log(`Server running at: ${server.info.uri}`)
}

start()
