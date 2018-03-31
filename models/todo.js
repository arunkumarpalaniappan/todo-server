'use strict';
const Promise = require("bluebird");
const updateTodos = require("../lib/todos").updateTodos;
exports.createTodo = function () {
    return new Promise((resolve, reject) => {
        updateTodos(this).then(response => {
            resolve(response);
        })
            .catch(err => {
                reject(err);
            });
    })
};
exports.editTodo = function () {
    return new Promise((resolve, reject) => {
        updateTodos(this).then(response => {
            resolve(response);
        })
            .catch(err => {
                reject(err);
            });
    })
};
exports.deleteTodo = function () {
    return new Promise((resolve, reject) => {
        updateTodos(this).then(response => {
            resolve(response);
        })
            .catch(err => {
                reject(err);
            });
    })
};