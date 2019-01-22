
/*
* Primary file for the API
*
*/
//Core Node Dependencies
const http = require('http');
const url = require('url');

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
    // console.log();

    // Send the response
    res.end('Hello World\n');

    // Log the request path
    console.log(`Request received on path ${trimmedPath} with method: ${method} and with query string parameters ${JSON.stringify(queryStringObject)}`);
})

// Start the server, and have it listen on port 3000
server.listen(5000, () => {
    console.log('The server is listening on port 5000 now');
});
