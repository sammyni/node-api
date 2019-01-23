/*
* Created By: Samuel Ndubuisi
* On: 23/01/2019
* Create and export config variables
*/

// Environment container
let env = {};

env.config = {
    name: 'RESTful API',
    httpPort: 3000,
    httpsPort: 3001
}

// Default  environment (staging)
env.staging = {
    env: 'staging',
};

env.development = {
    env: 'development'
};

env.production = {
    httpPort: 5000,
    httpsPort: 5001,
    env: 'production'
};

env.testing = {
    httpPort: 8080,
    httpsPort: 8081,
    env: 'testing',
}


let curEnv = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
let envExport  = typeof(env[curEnv]) !== 'undefined' ? env[curEnv]: env['staging'];
envExport = {...env['config'], ...envExport};

module.exports = envExport;
