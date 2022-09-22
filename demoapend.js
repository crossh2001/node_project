var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello Friend', function(err){
    if (err) throw err
    console.log('saved');
});