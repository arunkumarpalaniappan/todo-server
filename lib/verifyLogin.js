const db = require("./connectDB").dynamoDB;
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
    return db.getItem(params, function (err, data) {
        if (err) {
            return false;
        }
        else {
            if (Object.keys(data).length) {
                if (data.password === userParams.password) {
                    return true
                }
            }
            return false;
        }
    });
};