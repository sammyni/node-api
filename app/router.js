const handlers = require('./handlers');
const Handlers = new handlers();


// Create new Route object
let router = new Object();

// GET Routes
router.get = {
    ping: Handlers.ping
}

// Available by default
router.get.notFound = Handlers.notFound;

// POST Routes
router.post = {

}

// PUT Routes
router.put = {

}

// DELETE Routes
router.delete = {

}

// Export route as module
module.exports = router;
