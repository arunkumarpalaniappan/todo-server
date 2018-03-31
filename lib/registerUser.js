const db = require("./connectDB").dynamoDB;
const Boom = require('boom');
const AuthLib = require("./authenticate").auth;
exports.registerUser = function (userParams) {
    return AuthLib.generate.call({password: userParams.password}).then(passwordHash => {
        const params = {
            TableName: 'todos_users',
            Item: {
                "email": {
                    "S": userParams.email
                },
                "name": {
                    "S": userParams.name
                },
                "password": {
                    "S": passwordHash
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
    })
        .catch(err => {
            return err;
        })
};