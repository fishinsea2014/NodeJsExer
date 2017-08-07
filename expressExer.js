var express =require('express');
var app = express();

app.get('/', function (req,res){
    res.send('Hello world by Jason in express');
});
var server = app.listen(8888,function () {
    var host=server.address().address;
    var port=server.address().port;
    console.log("App sample, access address is http://%s:%s",host,port)
})