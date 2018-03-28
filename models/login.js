'use strict';
const Promise = require("bluebird");
const isValidUser = require("../lib/isValidUser").isValidUser;
exports.authenticateUser = function (payload) {
    return new Promise((resolve,reject) => {
        if (isValidUser(payload)) {
            resolve({status: true})
        } else {
            reject(false)
        }
    })
};