//Sample 1
// buf = new Buffer(10);
// len=buf.write("www.runoob.com");
//
// console.log('Total bytes: '+ len)

//Sample 2
buf1=new Buffer(26);
for (var i=0;i<26;i++){
    buf1[i]=i+91;
}

console.log(buf1.toString('ascii')); //output whole string
console.log(buf1.toString('ascii',0,5));
console.log(buf1.toString(undefined,0,9));

//Json object
// console.log(buf1.toJSON()); //output whole string

//Combine buffer object
var b1=new Buffer('Hello word');
var b2=new Buffer('www.massey.ac.nz');
var b3=Buffer.concat([b1,b2]);
console.log("Combined content: "+b3.toString());

//Copy a buffer
var b4=new Buffer(b1.length);
b1.copy(b4);
console.log("Copied contents: "+b4);

//Slice a buffer
var b5=b1.slice(1,3);
console.log("Sliced contents of b1:" + b5)