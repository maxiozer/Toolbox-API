var express = require('express');
var router = express.Router();

router.get('/:texto', function(req, res, next) {
  res.send(req.params.texto);
});

module.exports = router;
