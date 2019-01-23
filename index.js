
/*
* Primary file for the API
*
*/
//Core Node Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const router = require('./app/router');

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {

    // Get request url and parse it
    let parsedUrl = url.parse(req.url, true);

    // Get the path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+s/g, '');

    // Get the HTTP Request Method
    let method = req.method.toLowerCase();

    // Get Query String as an object
    let queryStringObject = parsedUrl.query;

    // Get the headers as an object
    let headers = req.headers;


    let decoder = new StringDecoder('utf-8');
    let buffer = '';

    // Parsing payload
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        buffer += decoder.end();

        // At request end, send response
        console.log(trimmedPath);
        // Route and Handle Request
        let handler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : router['notFound'];

        console.log(handler);
        // Send the response
        // res.end('Hello World\n');

        let data = {
            'trimmedPath' : trimmedPath,
            'query' : queryStringObject,
            'method' : method,
            'headers' : headers,
            'payload' : buffer
        };

        handler(res, data);

        // Log the request path
        console.log(`Request received on path:`, trimmedPath);
        console.log(`Request received with method:`, method);
        console.log(`Request received with query string parameters:`, queryStringObject);
        console.log(`Request received with headers:`, headers);
        console.log('Request received with payload:', buffer);
    });

});

// Start the server, and have it listen on port 3000
server.listen(5000, () => {
    console.log('The server is listening on port 5000 now');
});

// Request Router
