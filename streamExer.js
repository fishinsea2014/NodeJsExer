var fs= require('fs');
var data='';

//Create a readable stream
var readerStream= fs.createReadStream("input.txt");
readerStream.setEncoding('UTF8');

//Manipulate stream event: data, end, error
readerStream.on('data',function (chunk) {
    data +=chunk;
});

readerStream.on('end',function () {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack)
});

console.log("--end of reading--")

//Write to a stream
var dataWrite='Massey university website : www.massey.ac.nz';

//Create a writeable stream, write to output.txt file.
var writerStream=fs.createWriteStream("output.txt");

//Set code to utf8
writerStream.write(dataWrite,'UTF8');

//Mark the end of file
writerStream.end();

//Deal with stream event: data, end, error
writerStream.on('finish',function () {
    console.log("Writing success");
})

writerStream.on('error',function () {
    console.log(err.stack);
})
console.log("--end of writing--");

//Read a file and write its content to another file
var wS=fs.createWriteStream("copy.txt");
readerStream.pipe(wS);
