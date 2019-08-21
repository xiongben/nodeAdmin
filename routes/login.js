var express = require('express');
var router = express.Router();

var userDAO = require('../dao/useDAO');
var result = require('../model/result');
const querystring = require('querystring');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('xb', { title: 'welcome to here' });
// });

router.get('/:id', function(req, res) {
  var id = req.params.id;
  userDAO.getById(id, function (user) {
      res.json(result.createResult(true, user));
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
