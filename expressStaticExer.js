var express=require('express');
var app=express();

app.use(express.static('public'));
app.get('/',function (req,res) {
    res.send('Hello world by express static.');
})

var server=app.listen(8888,function () {
    var host=server.address().address;
    var port=server.address().port;
    console.log("App case, access address is http://%s:%s",host,port);
})