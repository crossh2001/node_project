var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello everyone', function(err){
    if (err) throw err
    console.log('saved');
});