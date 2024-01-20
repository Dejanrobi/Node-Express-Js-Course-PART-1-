// Async Patterns - Setup Promises

const { readFile } = require('fs');


// we setup a getText function passing the file path as a parameter
const getText = (path)=>{
    // returning a new promise
    // we then pass two functions, one for resolve and one for reject
    return new Promise((resolve, reject)=>{

        // reading a file
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })

    })

}


// invoking the getText function with the file path
// the promise will return a data or an error
// getText('./content/first.txt').then(result=>console.log(result)).catch(err=>console.log(err))

// Creating an async await function
const start = async()=>{
    // wrapping in the try catch block
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        // previously when we were setting the callbacks, we had to nest everything.
        // But now, we are waiting for the promise to be resolved and only once its resolved, then we can do something with the value
        console.log(first, second)
    } catch (error) {
        console.log(error)
        
    }
    
}

// invoking the async await function
start();