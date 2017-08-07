function say(word) {
    console.log(word);
}

function execute(somefunction, value) {
    somefunction(value);
}

execute(say,'1: hello')

execute(function (word) {console.log(word)},'2 : anonymous methos -- hello');

//Http
var http=require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hi,welcome to Jasons page');
    response.end();
}).listen(8888);
