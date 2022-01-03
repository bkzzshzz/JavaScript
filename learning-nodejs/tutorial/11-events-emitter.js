const EventEmitter = require('events');

const customEmitter = new EventEmitter();


// on to listen for event, emit to emit the event
customEmitter.on('response', (name, id) => {
    console.log(`date received ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
    console.log(`some other logic here`);
});

customEmitter.emit('response', 'john', 34);