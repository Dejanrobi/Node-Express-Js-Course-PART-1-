const http = require('http');

// using the events Emitter API
const server = http.createServer()

// listening to a request event
server.on('request', (req, res)=>{
    res.end("Welcome")
})

server.listen(5000)