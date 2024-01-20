const http = require('http');
const fs = require('fs');

http.createServer(function (req, res){
    const fileStream = fs.createReadStream('./content/stream-big.txt', 'utf8')
    
    fileStream.on('open', ()=>{
        // pipe method pushes from the readstream to the write stream.
        fileStream.pipe(res)

    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })



}).listen(5000)