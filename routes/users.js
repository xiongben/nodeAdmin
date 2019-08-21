var express = require('express');
var router = express.Router();
var url=require("url");
var http = require("http");
var mysql = require('mysql');
/* GET users listing. */

var info;
// router.get('/', function(req, res, next) {
//   // var pathname =req.query;
//   // res.send('respond with a resource new'+pathname.hello);
//   res.render('xb', { title: 'use page' });
//   res.end();
// });

// var connection = mysql.createConnection({
//   host     : 'bdm114585403.my3w.com',
//   user     : 'bdm114585403',
//   password : 'xb19930319',
//   database : 'bdm114585403_db',
//   insecureAuth: true
// });


// var connection = mysql.createConnection({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : '123456',
//   database : 'xbtest',
//   insecureAuth: true
// });


// connection.connect();
// var  sql = 'SELECT * FROM use_info';

// connection.query(sql, function (err, results, fields) {
//   if(err){
//           console.log('[SELECT ERROR] - ',err.message);
//           return;
//         }
//   var res=results;
//   info=JSON.stringify(res);
//   info=JSON.parse(info);
//   console.log(info);
// });




// router.get('/', function(req, res, next) {
//   res.render('info', { data :info});
// });


// router.get('/test', function(req, res, next) {
//   var pathname =req.query;
//   var user=pathname.user;
//   if(user == 'xiongben'){
//     res.send(info);
//     res.end();
//   }else{
//     res.send('respond with a resource new'+pathname.hello);
//     res.end();
//   }

// });

module.exports = router;
