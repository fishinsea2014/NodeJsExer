var express=require('express');
var app=express();

app.use(express.static('public'));

app.get('/index.html',function (req,res) {
    res.sendFile(__dirname+"/"+"index.html");
})

app.get('/process_get',function (req,res) {

    //Export JSON fromat data
    var response={
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response))
})

var server =app.listen(8888,function () {
    var host=server.address().address;
    var port = server.address().port;

    console.log("App case, access address is: http://%s:%s",host,port);
})