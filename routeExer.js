var express=require('express');
var app=express();

app.get('/',function (req,res) {
    console.log("GET request");
    res.send("Hello GET");
})

app.post("/",function (req,res) {
    console.log("POST request");
    res.send("Hello Post");
})

app.get('/del_user',function (req,res) {
    console.log("/del_user, response DELETE request");
    res.send('Delete current page.')
})

app.get('/list_user',function (req,res) {
    console.log("/list user GET request");
    res.send('user list page');
})

var server=app.listen(8888,function () {
    var host=server.address().address;
    var port=server.address().port;
    console.log("App case, access address is http://%s:%s",host,port);
})