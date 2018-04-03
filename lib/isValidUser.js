const db = require("./connectDB").dynamoDB;
exports.isValidUser = function (userParams) {
    const params = {
        AttributesToGet: [
            "name"
        ],
        TableName: 'todos_users',
        Key: {
            "email": {
                "S": userParams.email
            },
            "password": {
                "S": userParams.password
            }
        }
    };
    return db.getItem(params, function (err, data) {
        if (err) {
            return false;
        }
        else {
            return Object.keys(data).length;
        }
    });
};