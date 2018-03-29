'use strict';
const Promise = require("bluebird");
const isValidUser = require("../lib/isValidUser").isValidUser;
exports.authenticateUser = function () {
    return new Promise((resolve,reject) => {
        if (isValidUser(this)) {
            resolve({status: true})
        } else {
            reject(false)
        }
    })
};
