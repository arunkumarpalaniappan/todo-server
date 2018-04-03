'use strict';
const Boom = require("boom");
const Profile = require("../models/profile");

exports.getInfo = function (request, reply) {
    const currentUer = request.auth.credentials;
    return Profile.getInfo.call(currentUer).then(function(user){
        return user
    }).catch(function(err){
        return Boom.badRequest(err);
    })
};