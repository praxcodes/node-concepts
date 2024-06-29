setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

//setinterval is asynchronous
//event loop invokes callback every 2 secs or time given 
