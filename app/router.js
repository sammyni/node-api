const handlers = require('./handlers');
const Handlers = new handlers();
// Export Router Object
module.exports = {
    // path: handler
    'sample': Handlers.sample,
    'notFound': Handlers.notFound
};
