const os = require('os')
//we have to install external odules and not the built in ones
 
//we have access to all properties and methods of os module

// info about current user
const user = os.userInfo()
console.log(user) //returns an object

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(), //type method
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
