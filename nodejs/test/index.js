"use strict";
const aws = require("aws-sdk");
const moment = require("moment");
exports.handler = async function(event, context, callback) {
  const dateStr = moment(+new Date())
    .format("YYYY-MM-DD");
const s3 = new aws.S3();

    let data = event["content"];
    
    const decode_content = Buffer.from(data, 'base64');
        s3.putObject({
          Body: decode_content,
          Bucket: "workingwithlambdas3test",
          Key: `${dateStr}.txt`,
        }, (err, data) => {
          if(err) {
            console.log(err);
          } else {
            console.log("Stored data in S3");
          }
        });
        
    return {'statusCode' :200, 'body':'lambda done successfully'};
};