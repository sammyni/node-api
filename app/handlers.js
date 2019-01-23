class RequestHandler {
    constructor() {
        // console.log(this.sendResponse());
    }

    ping(res) {
        RequestHandler.SEND_RESPONSE(res, 200);
    }

    notFound(res) {
        RequestHandler.SEND_RESPONSE(res, 404, {message: 'Invalid request: Resource not found.'});
    }

    static SEND_RESPONSE(res, statusCode, data) {
        statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
        data = typeof(data) == 'object' ? data : new Object();
        let dataString = JSON.stringify(data);

        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(dataString);
    }
}

module.exports = RequestHandler;
