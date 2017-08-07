var express=require('express');
var app=express();
var fs=require("fs");

app.get('/listUsers',function (req,res) {
    fs.readFile(__dirname+"/"+"users.json","utf-8",function (err,data) {
        console.log(data);
        res.end(data);
    });
})

var server=app.listen(8888,function () {
    var host=server.address().address;
    var port=server.address().port;

    console.log("App case: "+ host+" , "+port);
})