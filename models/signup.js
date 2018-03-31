'use strict';
const Promise = require("bluebird");
const Boom = require("boom");
const registerUser = require('../lib/registerUser').registerUser;
exports.registerUser = function () {
    return new Promise((resolve, reject) => {
        registerUser(this).then(response => {
            if (Object.keys(response).length === 0) {
                resolve({status: true})
            } else {
                reject(Boom.badData(response));
            }
        })
            .catch(error => {
                reject(error)
            });
    })
};