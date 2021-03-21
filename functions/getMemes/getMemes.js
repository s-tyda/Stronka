const fs = require('fs');
const readline = require('readline');
var files = []

const rl = readline.createInterface({
    input: fs.createReadStream('./assets/memes.txt'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
    files.push(line)
});
// var files = fs.readdirSync('./images/memes/');
// var files = fs.readdirSync('/var/runtime/build/Release');
// const files = fs.readFileSync(require.resolve('./assets/memes.txt'));
// const memes = files.split(/\n/);
// var directories = []
// for (var i = 0; i < files.length; i++){
//     try{
//         directories.push({
//             name: files[i],
//             content: fs.readdirSync('/var/' + files[i])
//         });
//     } catch (err){
//         continue;
//     }
// }

exports.handler = function (event, context, callback){
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({memes: files}),
    });
};