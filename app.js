
/*
* Created By: Samuel Ndubuisi
* Primary file for the API
*/


//Core Node Modules
const fs = require('fs');
const http = require('http');
const https = require('https');

// Custom Modules
const config = require('./config');
const serverLogic = require('./app/server');

// Instantiate the HTTP server
const httpServer = http.createServer((req, res) => {
    serverLogic(req, res);
});

// Start the HPPT server
httpServer.listen(config.httpPort, () => {
    console.log(`The server is listening on port ${config.httpPort} in ${config.env} environment.`);
});

// Instantiate the HTTPS server
const httpsServerOptions = new Object();
httpsServerOptions.key = fs.readFileSync('./https/key.pem');
httpsServerOptions.cert = fs.readFileSync('./https/cert.pem');

const httpsServer = https.createServer(httpsServerOptions, (req, res) => {
    serverLogic(req, res);
});

// Start the HPPT server
httpsServer.listen(config.httpsPort, () => {
    console.log(`The https server is listening on port ${config.httpsPort} in ${config.env} environment.`);
});
