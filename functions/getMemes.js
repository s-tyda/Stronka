var fs = require('fs');
// var files = fs.readdirSync('./images/memes/');
var files = fs.readdirSync('..' + __dirname);

exports.handler = function (event, context, callback){
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({memes: files}),
    });
};