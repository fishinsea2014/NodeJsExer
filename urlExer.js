var http=require('http');
var url=require('url');
var util=require('util');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    // res.end(util.inspect(url.parse(req.url,true)));
    var params=url.parse(req.url,true).query;
    res.write("website name:"+params.name);
    res.write("\n");
    res.write("website url: "+params.url);
    res.end();
}).listen(8888);