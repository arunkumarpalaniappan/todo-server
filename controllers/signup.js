'use strict';
const Boom = require('boom');
const Signup = require('../models/signup');

exports.registerUser = function (request, response) {
    const payload = request.payload;
    return Signup.registerUser.call(payload).then(status => {
        return status
    }).catch(err => {
        return Boom.serverUnavailable(err)
    })
};