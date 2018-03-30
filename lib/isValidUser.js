const db = require("./connectDB").dynamoDB;
exports.isValidUser = function (userParams) {
    console.log(userParams);
    const params = {
        AttributesToGet: [
            "name"
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
            return Object.keys(data).length;
        }
    });
};