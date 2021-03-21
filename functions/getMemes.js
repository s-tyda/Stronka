var fs = require('fs');
// var files = fs.readdirSync('./images/memes/');
var files = fs.readdirSync('/var/runtime');
var directories = []
for (var i = 0; i < files.length; i++){
    try{
        directories.push({
            name: files[i],
            content: fs.readdirSync('/var/' + files[i])
        });
    } catch (err){
        continue;
    }
}

exports.handler = function (event, context, callback){
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({memes: directories}),
    });
};