const AWS = require("aws-sdk");
const myConfig = require("../config/awsConfig").awsConfig;
AWS.config.update({
    accessKeyId: myConfig.accessKeyId,
    secretAccessKey: myConfig.secretAccessKey,
    signatureVersion: 'v4',
    region: myConfig.region
});
exports.dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});