const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// }) //callback executes everytime someone visits the server


// Using Event Emitter API
const server = http.createServer() //class extends event emitter
// server emits request event behind the scenes
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
