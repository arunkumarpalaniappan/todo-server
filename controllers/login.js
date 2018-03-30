'use strict';
const Boom = require("boom");
const Login = require("../models/login");

exports.authenticateUser = function (request, reply) {
    const payload = request.payload;
    return Login.authenticateUser.call(payload).then(function(user){
        return user
    }).catch(function(err){
        return err;
    })
};