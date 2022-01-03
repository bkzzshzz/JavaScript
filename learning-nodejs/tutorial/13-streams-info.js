// stream divides the big files into chunks

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000, 
    encoding:'utf-8'
}); // highWaterMark to adjust the size of chunks

stream.on('data', (result) => {
    console.log(result.length);
} )

stream.on('error', (err) => {
    console.log(error);
});