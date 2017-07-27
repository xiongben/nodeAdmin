var express = require('express');
var router = express.Router();
var url=require("url");
var http = require("http");
var mysql = require('mysql');
/* GET users listing. */

var info;
router.get('/', function(req, res, next) {
  var pathname =req.query;
  res.send('respond with a resource new'+pathname.hello);
  res.end();
});

var connection = mysql.createConnection({
  host     : 'bdm114585403.my3w.com',
  user     : 'bdm114585403',
  password : 'xb19930319',
  database : 'bdm114585403_db',
  insecureAuth: true
});

connection.connect();
var  sql = 'SELECT * FROM mytest';

connection.query(sql, function (err, results, fields) {
  if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
  info=results;
  console.log(results);
});

router.get('/test', function(req, res, next) {
  var pathname =req.query;
  var user=pathname.user;
  if(user == 'xiongben'){
    res.send(info);
    res.end();
  }else{
    res.send('respond with a resource new'+pathname.hello);
    res.end();
  }

});

module.exports = router;
