// events module
const EventEmitter = require('events');

// invoking the module
const customEmitter = new EventEmitter()

// on method (listens for the response event)
customEmitter.on('response', (name, id)=>{
    console.log(`Data received: user ${name} with ${id}`);
})

customEmitter.on('response', (name, id)=>{
    console.log(`Some other logic: user ${name} with ${id}`);
})


// emit method (emits an event)
// emitting a response event
customEmitter.emit('response', "john", 34)