'use strict';
const Promise = require("bluebird");
const isValidUser = require("../lib/verifyLogin").validateUser;
exports.authenticateUser = function () {
    return new Promise((resolve,reject) => {
        isValidUser(this).then(response => {
            resolve(response)
        })
            .catch(error => {
                reject(error)
            });
    });
};
