const { readFile, writeFile } = require('fs')


//callback function runs once the fiven fucntion , task or functionality is completed
//like onclick, whenever a person clicks, the callback function is executed 
//similarly here, when function is done, callback executes
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  const first = result
  console.log(result) //will print contents from that file
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)  //gives undefined and writes to the file
        console.log('done with this task')
      } //third callback end
    )
  }) //second callback end
})// first callback end
console.log('starting next task')

//asynchronous approach by node with fs module-node offloads this task and immediately starts with the next taska dn starts serving to next user
//alternatives to callback hell are promises and async await