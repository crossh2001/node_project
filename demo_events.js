var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function (){
    console.log("I heard something");
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit("scream");