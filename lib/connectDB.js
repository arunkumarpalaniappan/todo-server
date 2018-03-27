const AWS = require("aws-sdk");
const myConfig = require("../config/awsConfig").awsConfig;
AWS.config.update({
    accessKeyId: myConfig.accessKeyId,
    secretAccessKey: myConfig.secretAccessKey,
    signatureVersion: 'v4',
    region: myConfig.region
});
const dB = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const params = {
    Item: {
        "id": {
            S: 'test1'
        },
        "AlbumTitle": {
            S: "Somewhat Famous"
        },
        "Artist": {
            S: "No One You Know"
        },
        "SongTitle": {
            S: "Call Me Today"
        }
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "todos_master"
};
dB.putItem(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});