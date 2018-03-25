'use strict';
const Boom = require('boom');
const Todo = require('../models/todo');

exports.createTodo = function (request, response) {
    const payload = request.payload;
    return Todo.createTodo.call(payload).then(status => {
        return status
    }).catch(err => {
        return Boom.serverUnavailable(err)
    })
};

exports.editTodo = function (request, response) {
    const payload = request.payload;
    return Todo.editTodo.call(payload).then(status => {
        return status
    }).catch(err => {
        return Boom.serverUnavailable(err)
    })
};

exports.deleteTodo = function (request, response) {
    const payload = request.payload;
    return Todo.deleteTodo.call(payload).then(status => {
        return status
    }).catch(err => {
        return Boom.serverUnavailable(err)
    })
};