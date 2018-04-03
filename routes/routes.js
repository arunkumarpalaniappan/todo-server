const Joi = require("joi");
const login = require("../controllers/login");
const signup = require("../controllers/signup");
const todos = require("../controllers/todo");
const profile = require("../controllers/profile");
module.exports = [
    {
        path: '/login',
        method: 'POST',
        config : {
            handler : login.authenticateUser,
            auth: false,
            validate : {
                payload : {
                    'email': Joi.string().required(),
                    'password': Joi.string().required()
                }
            }
        }
    },
    {
        path: '/signup',
        method: 'POST',
        config: {
            handler: signup.registerUser,
            auth: false,
            validate: {
                payload: {
                    'name': Joi.string().required(),
                    'email': Joi.string().required(),
                    'password': Joi.string().required()
                }
            }
        }
    },
    {
        path: '/todo',
        method: 'POST',
        config: {
            handler: todos.createTodo,
            auth: 'jwt',
            validate: {
                payload: {
                    'todos': Joi.any().required()
                }
            }
        }
    },
    {
        path: '/todo',
        method: 'PUT',
        config: {
            handler: todos.editTodo,
            auth: 'jwt',
            validate: {
                payload: {
                    'todos': Joi.any().required()
                }
            }
        }
    },
    {
        path: '/todo',
        method: 'DELETE',
        config: {
            handler: todos.deleteTodo,
            auth: 'jwt',
            validate: {
                payload: {
                    'todos': Joi.any().required()
                }
            }
        }
    },
    {
        path: '/profile',
        method: 'GET',
        config: {
            handler: profile.getInfo,
            auth: 'jwt'
        }
    }
];