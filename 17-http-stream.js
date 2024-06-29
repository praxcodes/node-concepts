var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    //if we visit the server thru browser on port 5000, it returns the file contents to our browser in one go

    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)  //push from read stream to write stream
    })                      //res object can be setup as write stream
                            //res sent back in chunks
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)

