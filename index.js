"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
// For POST-Support
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/api/sayget/', function (request, response) {
    var name = request.query.name;
    var result = {
        message: name
    };
    if (!isNaN(name)) {
        response
            .status(400)
            .send('No string as name');
    }
    else {
        response.json(result);
    }
});
app.post('/api/sayHello', upload.array(), function (request, response) {
    var name = request.body.name;
    if (!isNaN(name)) {
        response
            .status(400)
            .send('No string as name');
    }
    else {
        console.log('Hello ' + name);
    }
    response.send('POST here');
});
app.listen(3000);
//# sourceMappingURL=index.js.map