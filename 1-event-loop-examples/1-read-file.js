const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result) //reading contents from the file
  console.log('completed first task')
})
console.log('starting next task')

//event loop offloads this to a file system
