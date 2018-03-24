'use strict'
const Boom = require("boom");
const Login = require("../models/login")

exports.authenticateUser = function(request,response) {
    const payload = request.payload
    return Login.authenticateUser.call(payload).then(function(user){
        response(user)
    }).catch(function(err){
        response(Boom.unauthorized(err));
    })
}