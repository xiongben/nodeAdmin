var express = require('express');
var router = express.Router();
var url=require("url");
var http = require("http");
/* GET users listing. */
router.get('/', function(req, res, next) {
  var pathname =req.query;
  res.send('respond with a resource new'+pathname.hello);
  res.end();
});

module.exports = router;
