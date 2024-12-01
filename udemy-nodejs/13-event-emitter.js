const EventEmitter = require('events').EventEmitter;

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) => {
    console.log(`Data received user ${name} with id: ${id}`);
})

customEmitter.on('response', () => {
    console.log(`Some other logics `);
})

customEmitter.emit('response', 'john', 34);