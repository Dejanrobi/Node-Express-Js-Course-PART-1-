// obtaining the createReadStream method

const { createReadStream } = require('fs')

// invoking the method with the file path to read
const stream = createReadStream('./content/big-file.txt', { highWaterMark:90000 ,encoding: 'utf8'});

// listening to an event
stream.on('data', (result)=>{
    console.log(result)
})

// checking on an error
stream.on('error', (err)=>{
    console.log(err)
})