var express = require('express');
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/todolistModel'),
    cors = require('cors'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res) {
    res.status(404).send({url:req.originalUrl} + 'not found')
});

var routes = require('./api/routes/todolistRoutes');
routes(app);

app.listen(port);

console.log('todolist RESTful API server started on: ' + port);