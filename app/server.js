/*
* Created By: Samuel Ndubuisi
* On: 23/01/2019
* Server logic for both http and https
*/

//Core Node Modules
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// Custom Modules
const router = require('./router');
// const config = require('../config');

let unifiedServer =  (req, res) => {
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

        
        // Route and Handle Request
        let handler = typeof(router[method][trimmedPath]) !== 'undefined' ? router[method][trimmedPath] : router.get.notFound;

        let data = {
            'trimmedPath' : trimmedPath,
            'query' : queryStringObject,
            'method' : method,
            'headers' : headers,
            'payload' : buffer
        };

        handler(res, data);

        // Log the request path
        // console.log(`Request received on path:`, trimmedPath);
        // console.log(`Request received with method:`, method);
        // console.log(`Request received with query string parameters:`, queryStringObject);
        // console.log(`Request received with headers:`, headers);
        // console.log('Request received with payload:', buffer);
    });
};

module.exports = unifiedServer;
