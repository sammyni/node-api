/*
* Created By: Samuel Ndubuisi
* On: 23/01/2019
* Create and export config variables
*/

// Environment container
let env = {};

env.config = {
    name: 'RESTful API',
    port: 3000,
}

// Default  environment (staging)
env.staging = {
    env: 'staging',
};

env.development = {
    env: 'development'
};

env.production = {
    port: 5000,
    env: 'production'
};

env.testing = {
    port: 8080,
    env: 'testing',
}


let curEnv = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
let envExport  = typeof(env[curEnv]) !== 'undefined' ? env[curEnv]: env['staging'];
envExport = {...env['config'], ...envExport};

module.exports = envExport;
