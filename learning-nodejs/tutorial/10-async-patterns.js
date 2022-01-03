const { readFile, writeFile } = require("fs").promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        console.log(first, second);
        await writeFile(
            './content/result-mind-grenade.txt', 
            `\nThis is awesome: ${first} ${second}`,
            { flag : 'a'}
            )
    } catch (error) {
        console.log(error);
    }
}

start();

// const getText = (path) => {
    //     return new Promise((resolve, reject) => {
    //         readFile(path, 'utf-8', (err, data) => {
    //             if (err) {
    //                 reject (err);
    //             }
    //             else {
    //                 resolve(data);
    //             }
    //         })
    //     })
    // }
    
    
    
    // const start = async () => {
    //     try {
    //         const first = await getText('./content/first.txt');
    //         const second = await getText('./content/second.txt');
    //         console.log(first, second);
    //     } catch (error) {
    //         console.log((error));
    //     }
        
    // }
    

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log((err)))