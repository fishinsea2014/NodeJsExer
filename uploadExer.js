/*
Have running problem on file uploda, see uploadExerSample.js.
 */
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));

app.get('/upload.html',function (req,res) {
    res.sendFile(__dirname+"/"+"upload.html");
})

app.post('/file_upload',function (req,res) {
    console.log(req.files[0]);

    var des_file=__dirname+"/"+req.file[0].orginalname;
    fs.readFile((req.files[0].path,function (err,data) {
        fs.writeFile(des_file,data,function (err) {
            if(err){
                console.log(err);
            }else{
                response={
                    message:"File upload successfully",
                    filename:req.files[0].orginalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    }));
})

var server=app.listen(8888,function () {
    var host=server.address().address;
    var port=server.address().port
    console.log(host+",port:"+port);
})