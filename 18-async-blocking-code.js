const http = require('http')

// creating the server

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Homepage")
    }else if(req.url === '/about'){
        // BLOCKING CODE
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`)

            }
        } 
        res.end("About Page")
    }else{
        res.end("Error Page")
    }

})

// server listening to a port
server.listen(5000, ()=>{
    console.log("Server Listening to port 5000....")
})