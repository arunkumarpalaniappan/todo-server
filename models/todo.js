'use strict';
const Promise = require("bluebird");
exports.createTodo = function () {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve({status: true})
        } else {
            reject(false)
        }
    })
};
exports.editTodo = function () {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve({status: true})
        } else {
            reject(false)
        }
    })
};
exports.deleteTodo = function () {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve({status: true})
        } else {
            reject(false)
        }
    })
};