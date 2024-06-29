const http = require('http')
//features of node using http module
//http module allows us to setup a webserver

//server is always listening for requests at port 5000
//create server method requires a callback to be passed to it
//req object is incoming resquest that is coming to server from the client browser to reqyest a webpage
//res is the response the server is sending 
const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL


  
  if (req.url === '/') {
    //res.write('welcome')  if we go to localhost:5000 ,we can see this page, i.e we send request to server at 5000 thru broswer which gives us our page
    //console.log(req) url property will tell us what end point client is looking for 
    //we have to request the server and its endpt and run the file to see the result in the console and the browser 
    //the resposnse is sent ti the broswer using the cALLBACK
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
