"use strict";

var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Data = mongoose.model('Data');

router.get('/', function (req, res, next) {

    //var name = req.query.name;
    //var age = req.query.age;

    var limit = parseInt(req.query.limit) || null;
    var skip = parseInt(req.query.skip) || null;
    var fields = req.query.fields || null;
    var sort = req.query.sort || null;

    var filter = {};

    /*if (name) {
        filter.name = name;
    }

    if (typeof(age) !== 'undefined') {
        filter.age = age;
    }*/

    Data.list(filter, limit, skip, fields,sort, function (err, list) {
        if (err) {
            next(err);
            return;
        }
        res.json({ok: true, list: list});
    });
});

//crear un Data

router.post('/', function (req, res, next) {
    var data = new Data(req.body);

    data.save(function (err, DataGuardado) {
        if (err) {
            next(err);
            return;
        }
        res.json({ok: true, data: DataGuardado});
    });
});

//actualizar un Data

router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    Data.update({_id: id}, req.body, function (err, Data) {
        if (err) {
            next(err);
            return;
        }
        res.json({ok: true, Data: Data});
    });
});

//borrar un Data

router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    Data.remove({_id: id}, function (err, result) {
        if (err) {
            next(err);
            return;
        }
        res.json({ok: true, Data: result});
    });
});

module.exports = router;