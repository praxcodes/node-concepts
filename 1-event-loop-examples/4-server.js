const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
//we approach port 5000 from browser which is a request to that port listened by server on that port

//server listens on port 5000 and successfully listens there that callback runs once 

//event loop keeps listening and responding to requests, therefore , it keeps responsing and invoking the callback on successfully recieving the request as the server continues listening

//listen is asynchronous, so is createserver function in the http module