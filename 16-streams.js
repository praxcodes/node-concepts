const { createReadStream } = require('fs')

// default size of buffer 64kb
// last buffer - remainder
// highWaterMark - control size //options object
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

//this function is invoked and returns readstream class and that extends from stream.readable
//readable class has data and error events

//reading data in chunks
//data is the event we are listening for 
stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
