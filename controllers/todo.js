'use strict';
const Boom = require('boom');
const Todo = require('../models/todo');

exports.createTodo = function (request, response) {
    const payload = request.payload;
    payload.email = request.auth.credentials.Item.email.S;
    return Todo.createTodo.call(payload).then(status => {
        return status
    }).catch(err => {
        return Boom.serverUnavailable(err)
    })
};

exports.editTodo = function (request, response) {
    const payload = request.payload;
    payload.email = request.auth.credentials.Item.email.S;
    return Todo.editTodo.call(payload).then(status => {
        return status
    }).catch(err => {
        return Boom.serverUnavailable(err)
    })
};

exports.deleteTodo = function (request, response) {
    const payload = request.payload;
    payload.email = request.auth.credentials.Item.email.S;
    return Todo.deleteTodo.call(payload).then(status => {
        return status
    }).catch(err => {
        return Boom.serverUnavailable(err)
    })
};

exports.getTodo = function (request, response) {
    const payload = {};
    payload.email = request.auth.credentials.Item.email.S;
    return Todo.getTodo.call(payload).then(status => {
        return status;
    }).catch(err => {
        return Boom.serverUnavailable(err);
    })
}