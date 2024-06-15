var express = require('express');
var router = express.Router();

router.post('/submit', function(req, res, next) {
   const requestBody=req.body;
   console.log(requestBody);
   res.send("Contact details recieved");
});

module.exports = router;