const Promise = require('bluebird');
const db = require("./connectDB").dynamoDB;
const AuthLib = require("./authenticate").auth;
exports.validateUser = function (userParams) {
    const params = {
        AttributesToGet: [
            "name", "email", "password"
        ],
        TableName: 'todos_users',
        Key: {
            "email": {
                "S": userParams.email
            }
        }
    };
    return new Promise(function (resolve, reject) {
        db.getItem(params, function (err, data) {
            if (err) {
                reject(false);
            }
            else {
                if (Object.keys(data).length) {
                    const user = {
                        password: userParams.password,
                        hash: data['Item']['password']['S']
                    };
                    return AuthLib.verify.call(user).then(response => {
                        resolve(response);
                    })
                        .catch(err => {
                            reject(err);
                        })
                }
                reject(false);
            }
        });
    });

};