import express = require('express');
let app = express();

// For POST-Support
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.urlencoded({
    extended: true
}));




app.get('/api/sayget/', (request, response) => {
    let name = request.query.name;

    let result = {
        message: name
    };

    if (!isNaN(name)) {
        response
            .status(400)
            .send('No string as name');
    } else {
        response.json(result);
    }
});



app.post('/api/sayHello', upload.array(), (request, response) => {
    let name = request.body.name;

    if (!isNaN(name)) {
        response
            .status(400)
            .send('No string as name');
    } else {
        console.log('Hello ' + name);
    }

    response.send('POST here');
});

app.listen(3000);
