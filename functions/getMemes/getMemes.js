const fs = require('fs');
var files = fs.readFileSync(require.resolve('./assets/memes.txt')).toString().split("\n");

exports.handler = function (event, context, callback){
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({memes: files}),
    });
};