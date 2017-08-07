var fs= require("fs");

console.log("Start to open a file...");
fs.open('input.txt',"r+",function (err,stats) {
    if (err){
        return console.error(err);
    }

    console.log(stats);
    console.log("Open file successfully.")
});

fs.stat('./test',function (err,stats) {
    console.log(stats.isDirectory());
})
fs.close();