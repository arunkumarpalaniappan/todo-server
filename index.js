'use strict';
const config = require('config');
const Hapi = require('hapi');
const Inert = require('inert');
const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');
const routes    = require('./routes/routes.js');
const isValidUser = require("./lib/isValidUser").isValidUser;

//logs with pretty stream only on development mode
const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const validate = async function (decoded) {
    if (!isValidUser(decoded)) {
        return {isValid: false};
    }
    else {
        return {isValid: true};
    }
};

const init = async () => {
    console.log(process.env)
    const server = Hapi.Server({
        host: process.env.APP_HOST || config.get('serverConf.host'),
        port: process.env.APP_PORT || config.get('serverConf.port'),
        debug: {
            request: ['error']
        }
    });
    await server.register(require('hapi-auth-jwt2'));
    server.auth.strategy('jwt', 'jwt',
        {
            key: config.get('jwt.key'),
            validate: validate,
            verifyOptions: {algorithms: [config.get('jwt.alg')]}
        });

    server.auth.default('jwt');
    server.route(routes);
    await server.start();
    return server;
};
init().then(server => {
    console.log('Server running at:', server.info.uri);
})
    .catch(error => {
        console.log(error);
    });
