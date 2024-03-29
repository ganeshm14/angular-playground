var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
    Item : {
    "Id" : uuid.v5(),
    "au_first_name" : event.firstName,
    "au_last_name": event.lastName,
    "au_email": event.email,
    "au_gender": event.gender
    },
    TableName : 'application_users'
  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"User details saved successfully."
    });
  });
};
