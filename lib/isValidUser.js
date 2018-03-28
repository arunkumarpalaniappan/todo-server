const db = require("./connectDB").dynamoDB;
exports.isValidUser = function (userId) {
    const params = {
        AttributesToGet: [
            "name"
        ],
        TableName: 'todos_users',
        Key: {
            "email": {
                "S": userId
            }
        }
    };
    db.getItem(params, function (err, data) {
        if (err) {
            return false;
        }
        else {
            return Object.keys(data).length;
        }
    });
};