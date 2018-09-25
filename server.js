'use strict'

const Hapi = require('hapi')
const Hoek = require('hoek')
const Routes = require('./lib/routes')
const Settings = require('./settings')

const server = new Hapi.Server({
  host: 'localhost',
  port: Settings.port
});

server.route(Routes)

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
