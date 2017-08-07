var http=require('http');
var querystring=require('querystring');

var postHTML=
    '<html><head><meta charset="utf-8"><title>Node.js sample</title></head>' +
    '<body>' +
    '<form method="post">' +
    'website name： <input name="name"><br>' +
    'URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req,res) {
    var body="";
    req.on('data',function (chunk) {
        body +=chunk;
    })

    req.on('end',function () {

        body=querystring.parse(body);
        res.writeHead(200,{'Content-Type':'text/html'});

        if(body.name && body.url){
            res.write('res name: '+body.name+'<br>');
            res.write('res URL:'+ body.url);
        }else{
            res.write(postHTML);
        }
        res.end();
    });
}).listen(8888);