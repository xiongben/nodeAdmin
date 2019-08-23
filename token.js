const jwt= require('jsonwebtoken');
const expressJwt = require('express-jwt');

//定义签名
const secret = 'salt';
//生成token
const token = jwt.sign({
    name: 123
}, secret, {
    expiresIn:  3600 //秒到期时间
});

module.exports = token;