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
    if (!isValidUser(decoded.email)) {
        return {isValid: false};
    }
    else {
        return {isValid: true};
    }
};

const init = async () => {
    console.log(process.env)
    const server = Hapi.Server({
        host: process.env.HOST,
        port: process.env.POST,
        debug: {
            request: ['error']
        }
    });
    await server.register(require('hapi-auth-jwt2'));
    server.auth.strategy('jwt', 'jwt',
        {
            key: 'todos@arunkumarpalaniappan.me',
            validate: validate,
            verifyOptions: {algorithms: ['HS256']}
        });

    server.auth.default('jwt');
    // Add the routes
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
