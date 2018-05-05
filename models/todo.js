'use strict';
const Promise = require("bluebird");
const todoLib = require("../lib/todos");
exports.createTodo = function () {
    return new Promise((resolve, reject) => {
        todoLib.updateTodos(this).then(response => {
            if (Object.keys(response).length === 0) {
                resolve({status: true})
            } else {
                reject(Boom.badData(response));
            }
        })
            .catch(err => {
                reject(err);
            });
    })
};
exports.editTodo = function () {
    return new Promise((resolve, reject) => {
        todoLib.updateTodos(this).then(response => {
            if (Object.keys(response).length === 0) {
                resolve({status: true})
            } else {
                reject(Boom.badData(response));
            }
        })
            .catch(err => {
                reject(err);
            });
    })
};
exports.deleteTodo = function () {
    return new Promise((resolve, reject) => {
        todoLib.updateTodos(this).then(response => {
            if (Object.keys(response).length === 0) {
                resolve({status: true})
            } else {
                reject(Boom.badData(response));
            }
        })
            .catch(err => {
                reject(err);
            });
    })
};
exports.getTodo = function () {
    return new Promise((resolve,reject) => {
        todoLib.getTodos(this).then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        })
    })
}