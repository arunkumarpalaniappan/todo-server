'use strict';
const Promise = require("bluebird");
const updateTodos = require("../lib/todos").updateTodos;
exports.createTodo = function () {
    return new Promise((resolve, reject) => {
        updateTodos(this).then(response => {
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
        updateTodos(this).then(response => {
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
        updateTodos(this).then(response => {
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