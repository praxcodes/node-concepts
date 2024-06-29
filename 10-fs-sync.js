//sync is blocking
const { readFileSync, writeFileSync } = require('fs')
//these two are methods of fs module

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')//second parameter-encoding of file
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second)


//creates a new file to given path name if not already there
//if the file is already present, it overwrites all the content
//with the second parameter that is the content in that file
//can be a template string and a normal string or a variable too
//third value is options object with flag property if we want to append to file

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')


//synchronous code execution- node cannot serve any other user until one user has finished 
//it reads code line by line