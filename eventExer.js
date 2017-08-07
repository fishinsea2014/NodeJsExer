var events= require('events');
var eventEmitter=new events.EventEmitter();

//Listener one
var listener1=function listener1() {
    console.log('Monitor listerner1 is running.')
}

//Listener two
var listener2=function listener2(){
    console.log('Monitor listener2 is running.')
}
//Bond 'connection' event, do listener1
eventEmitter.addListener('connection', listener1);

//Bond 'connection' event, do listener2
eventEmitter.addListener('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "listener connection events");

//deal with connection event
eventEmitter.emit('connection');

//remove bonded listener1 method
eventEmitter.removeListener('connection',listener1);
console.log('listener1 no longer be listened');

//triger connection events
eventEmitter.emit('connection');

eventListeners= require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + ' listener connection events');

console.log("--End--");

// var e=new events.EventEmitter();
// e.emit('error');