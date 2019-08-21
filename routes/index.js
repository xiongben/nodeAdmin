var express = require('express');
var router = express.Router();

// var userDAO = require('../dao/useDAO');
// var result = require('../model/result');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('xb', { title: 'welcome to here' });
});

// router.get('/:id', function(req, res) {
//   var id = req.params.id;
//   console.log(id);
//   userDAO.getById(id, function (user) {
//       res.json(result.createResult(true, user));
      
//   });
// });


router.get('/xbtest', function(req, res) {
  var params = req.query;
  console.log(params);
  var a= {data:[1,2,3,4,5,6,7,8,9]};
  res.send(a);
});


router.get('/award/detail', function(req, res) {
  var params = req.query;
  console.log(params);
  var resData = {
    status:0,
    data:{id:params.id},
    mess: "request is success"
  }
  var a= {resData};
  res.send(a);
});


router.get('/award/list', function(req, res) {
  var params = req.query;
  console.log(params);
  var arrlist = [];
  for(var i = 0;i<10;i++){
    var that = i;
    arrlist.push({
      id: that,
      name:"xb aa" + that,
      num: that,
    })
  }
  var a= {data:arrlist};
  res.send(a);
});

router.get('/wechat/list', function(req, res) {
  var params = req.body;
  console.log(params);
  var arrlist = [];
  for(var i = 0;i<6;i++){
    var that = i;
    arrlist.push({
      id: that,
      name:"friend" + that,
    })
  }
  var a= {data:arrlist};
  res.send(a);
});

router.post('/xx/xx',function(req,res) {
  console.log(req.body);
  var a= {data:[1,2,3,4,5,6,7,8,9]};
  res.send(a);
})

router.post('/wechat/login',function(req,res) {
  console.log(req.body);
  var data = {userId:2010550918}
  res.send(data);
})


module.exports = router;
