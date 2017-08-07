/*
There is problem on running the program,don't know why.
 */
var server=require("./server");
var router=require("./router");


server.start(router.route);//TypeError: server.start is not a function