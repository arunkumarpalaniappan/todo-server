'use strict';
const Promise = require("bluebird");
exports.registerUser = function () {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve({status: true})
        } else {
            reject(false)
        }
    })
};