const db = require("./connectDB").dynamoDB;
const params = {
    AttributesToGet: [
        "name", "email", "password"
    ],
    TableName: 'todos_users',
    Key: {
        "email": {
            "S": "akrp@live.in"
        }
    }
};
db.getItem(params, function (err, data) {
    if (err) {
        console.log(err); // an error occurred
    }
    else {
        console.log(data); // successful response
    }
});