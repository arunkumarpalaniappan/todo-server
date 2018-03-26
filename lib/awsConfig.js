const dynamoDB = require("aws-sdk/clients/dynamodb");

var createUsers = function (callback) {

    var dynamodb = new AWS.DynamoDB();

    var params = {
        TableName: "Users",
        KeySchema: [
            {AttributeName: "email", KeyType: "HASH"}
        ],
        AttributeDefinitions: [
            {AttributeName: "email", AttributeType: "S"}
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };

    dynamodb.createTable(params, callback);
};
var insetBatchLogins = function (callback) {

    var dynamodb = new AWS.DynamoDB();
    var batchRequest = {
        RequestItems: {
            "Logins": [
                {
                    PutRequest: {
                        Item: {
                            "email": {S: "jon@doe.com"},
                            "timestamp": {N: "1467041009976"}
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            "email": {S: "jon@doe.com"},
                            "timestamp": {N: "1467041019976"}
                        }
                    }
                }]
        }
    };

    dynamodb.batchWriteItem(batchRequest, callback);
};
var fetchLoginsDesc = function(email,callback) {

	var docClient = new AWS.DynamoDB.DocumentClient();

	var params = {
	    TableName:"Logins",
	    KeyConditionExpression:"#email = :emailValue",
	    ExpressionAttributeNames: {
	    	"#email":"email"
	    },
	    ExpressionAttributeValues: {
	    	":emailValue":email
	    },
	    ScanIndexForward: false
	};
	
	docClient.query(params,callback);
}
