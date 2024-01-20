const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request server');
    res.end("Hello world")
})

server.listen(5000, ()=>{
    console.log("Server listening on port : 5000....")
})