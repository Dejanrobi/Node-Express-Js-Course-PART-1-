const { writeFileSync } = require('fs')

for (let i=0; i<10000; i++){
    writeFileSync('./content/stream-big.txt', `hello stream ${i}\n`, {flag: 'a'})
}