// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

//events module is required and is stored in a class
//for a custom , extend the class
//if we just want to emit the event and listen for it, we will create a new instance of it i.e an object

const customEmitter = new EventEmitter()

// on and emit methods
//on- listen for an event
//emit - emit an event
// keep track of the order
// additional arguments
// built-in modules utilize it


//first parameter- name of the event
//second parameter- callback function when the event takes place
//once you have subscribed to the event, emit it
//we can listen twice for the same event to implement different logic
//emitting that event will execute both logics

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)
