var express = require('express');
var router = express.Router();

/* GET pedir datos. */
/* POST crear recurso. */
/* PUT actualizar recurso. Idempotente. */
/* DELETE eliminar recurso. Idempotente. */

/* Idempotente: si lo ejecutas varias veces el estado del servidor no cambia*/

router.get('/', function(req, res, next) {

    var segundo = (new Date().getSeconds());

  res.render('index', {
      title: 'Express'
  });
});

module.exports = router;
