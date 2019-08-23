var express = require('express');
var jwt = require("express-jwt");
var router = express.Router();

var userDAO = require('../dao/useDAO');
var result = require('../model/result');
const querystring = require('querystring');
var token = require('./../token');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('xb', { title: 'welcome to here' });
// });

router.get('/', function(req, res) {
  // console.log(req.query);
  var id = req.query.id;
  userDAO.getById(id, function (user) {
      if(!!user){
        user.token = token;
        res.json(result.createResult(true, user));
      }else{
        var mess = "丢！没这个人";
        res.json(result.createResult(true, user,mess));
      }
  });
});

router.get('/testtoken', function(req, res) {
  // console.log(req.query);
  var id = 1;
  userDAO.getById(id, function (user) {
      if(!!user){
        res.json(result.createResult(true, user));
      }else{
        var mess = "丢！没这个人";
        res.json(result.createResult(true, user,mess));
      }
  });
});

//add user
router.post('/adduser',function(req,res){
  var user=req.body;
  console.log(user)
  userDAO.add(user, function (success,data) {
    var r =  result.createResult(success, data);
    res.json(r);
  });
})
//userlogin
router.post('/userlogin',function(req,res){
  var user=req.body;
  console.log("user:",user);
  userDAO.loginCheck(user, function (success,data) {
    var r =  result.createResult(success, data);
    console.log(r);
    if(!r.success){
      r.status=300;
      r.data="your password is wrong!login again"
    }
    res.json(r);
  });
})

module.exports = router;
