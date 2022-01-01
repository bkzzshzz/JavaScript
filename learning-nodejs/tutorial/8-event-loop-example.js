// The event loop gives priority to the immediate actions first but registers the asynchronous operations for after the immediate operations are completed.


const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000...');
});

// Here, in the console we see the text in the bottm 'Server listening on port : 5000...' first then the request event texts
