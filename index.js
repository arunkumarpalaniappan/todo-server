'use strict'
const config = require('config');
const Hapi = require('hapi');
const Inert = require('inert');
const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');
const routes    = require('./routes/routes.js');

//logs with pretty stream only on development mode
const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

new Hapi.Server({
    host: config.get('serverConf.host'),
    port: config.get('serverConf.port'),
    routes : routes,
    debug: {
        request: ['error']
    }
});
