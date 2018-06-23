"use strict";

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
   console.log('middleware de router clients');
   //res.send('respuesta doble'); Esto da error
   next();
});

router.get('/', function (req, res, next) {
    console.log('req.query',req.query);
    res.send('Respuesta a clients');
});

router.get('/:id', function (req, res,next) {
    console.log(req.params);
   res.send('Recibido parametro '+ req.params.id);
});

router.post('/',function (req,res,next) {
    console.log('req.body',req.body);
    res.json({recibido: req.body.num});
});



module.exports = router;