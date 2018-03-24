'use strict';
const config = require('config');
const Hapi = require('hapi');
const Inert = require('inert');
const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');
const routes    = require('./routes/routes.js');

//logs with pretty stream only on development mode
const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const server = Hapi.Server({
    host: config.get('serverConf.host'),
    port: config.get('serverConf.port'),
    debug: {
        request: ['error']
    }
});
// Add the routes
server.route(routes);

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();