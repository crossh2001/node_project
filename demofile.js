var http = require("http");
var fs = require("fs");
http.createServer(function(req, res){
    fs.readFile('demofile.html', function(err, data){
        res.writeHead(200, {'Context-Type':'Text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);