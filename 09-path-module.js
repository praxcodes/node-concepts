const path = require('path')


//we can interact with file path and file system in node


console.log(path.sep) //separator is /

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath) //we get the normalised pathname using the separator


const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute) //gives absolute path

//resolve accepts path segments
//we need path name as our application will run in different environments
//therefore pathname will be different in our local machine than heroku
