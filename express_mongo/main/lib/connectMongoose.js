"use strict";

var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', function (err) {
    console.log(err);
});

db.once('open', function () {
    console.info('Conectado a mongoDB.')
});
var url = 'mongodb://localhost:27017/datas';

mongoose.connect(url, {
    useMongoClient: true,
});


