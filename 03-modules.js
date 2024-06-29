// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


//every file is a module (because of Commonjs library)

//module is a global object, therefore in any file we can use module to access 
//exports property and set it to our desired value (object or a function or an array)

//module.exports is an object 
//and we can import it in our desired file using require variable and by passing it the module name
//for self made modules(files) we start with ./
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor') //alternative syntax for module.exports

require('./07-mind-grenade')
//when you import a module, you actually invoke it, therefore it will run 
//the imported module(file) too when we run this file
//thr imported module in this case doesnt contain an export but a function call
//when node exports mind-grenade it wraps it in a function



sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 

//we can also de structure names like
//const {john, peter} = require('./04-names')


//console.log(data) -- results in a object containing two properties;
//singlePerson (object) and items (array) as they were exported 

//console.log(names)
