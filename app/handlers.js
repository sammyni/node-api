class RequestHandler {
    constructor() {
        // console.log(this.sendResponse());
    }

    sample(res, reqData) {
        let data = {
            message: 'We are striving'
        }
        RequestHandler.SEND_RESPONSE(res, 200, data);
    }

    notFound(res) {
        RequestHandler.SEND_RESPONSE(res, 404, {message: 'Invalid request: Resource not found.'});
    }

    static SEND_RESPONSE(res, statusCode, data) {
        statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
        data = typeof(data) == 'object' ? data : new Object();
        let dataString = JSON.stringify(data);

        res.writeHead(statusCode);
        res.end(dataString);
    }
}

module.exports = RequestHandler;
