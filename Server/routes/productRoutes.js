var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.json("");
});

module.exports = router;
