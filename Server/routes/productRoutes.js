var express = require('express');
var router = express.Router();
let ProductController =require('/controller/productController')
/* GET users listing. */
router.get('/all' , ProductController.getAllProducts);

module.exports = router;
