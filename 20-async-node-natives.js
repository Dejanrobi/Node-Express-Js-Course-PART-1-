// Async Patterns - Setup Promises

const { readFile, writeFile } = require('fs');

// importing a util module
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        
        // writing files
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
        
    }
    
}


start();