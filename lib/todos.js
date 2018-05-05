const db = require("./connectDB").dynamoDB;
const Boom = require('boom');
exports.updateTodos = function (todoParams) {
    const params = {
        TableName: 'todos_master',
        Item: {
            "id": {
                "S": todoParams.email
            },
            "todos": {
                "S": todoParams.todos
            }
        }
    };
    return new Promise(function (resolve, reject) {
        db.putItem(params, function (err, data) {
            if (err)
                reject(Boom.badData(err));
            else {
                resolve(data);
            }
        })
    });
};

exports.getTodos = function (todoParams) {
    const params = {
        TableName: 'todos_master',
        Key: {
            "id": {
                "S": todoParams.email
            }
        }
    };
    return new Promise(function (resolve, reject) {
        db.getItem(params, function (err, data) {
            if (err) 
                reject(Boom.badData(err));
            else
                resolve(data);
        })
    })
}