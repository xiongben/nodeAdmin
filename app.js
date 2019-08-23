var express = require('express');

const jwt= require('jsonwebtoken');
const expressJwt = require('express-jwt');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs=require('ejs');
var index = require('./routes/index');
// var users = require('./routes/users');
var login = require('./routes/login');

var token = require('./token');



// //定义签名
const secret = 'salt';
// //生成token
// const token = jwt.sign({
//     name: 123
// }, secret, {
//     expiresIn:  60 //秒到期时间
// });

var app = express();


// view engine setup
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');
app.engine('html',ejs.__express);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'page')));
// app.use(express.static(path.join(__dirname, 'dao')));
// app.use(express.static(path.join(__dirname, 'model')));

//使用中间件验证token合法性
app.use(expressJwt ({
  secret:  secret 
}).unless({
  path: ['/login', '/getUserInfo']  //除了这些地址，其他的URL都需要验证
}));

//拦截器
app.use(function (err, req, res, next) {
  //当token验证失败时会抛出如下错误
  if (err.name === 'UnauthorizedError') {   
      //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
      res.status(401).send('invalid token...');
  }
});

app.use('/', index);
// app.use('/users', users);
app.use('/login',login);


//定义一个接口，返回token给客户端
app.get('/getUserInfo', function(req, res) {
  res.json({
      token: token
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
