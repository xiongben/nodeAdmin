var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var userSqlMap = require('./useSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    getById: function (id, callback) {
        pool.query(userSqlMap.getById, id, function (error, result) {
            if (error) throw error;
            callback(result[0]);
        });
    },
    loginCheck:function(user,callback){
        pool.query(userSqlMap.login,[user.username, user.password],function(error,result){
            if(error) throw error;
            callback(result[0]!= null,result[0]);
        })
    },
    add:function(user,callback){
        pool.query(userSqlMap.getByName,user.username,function(error,result){
            if(error) throw error;
            if(result[0]!=null){
                callback(false,'用户名重复');
            }else{
                pool.query(userSqlMap.add,[user.username, user.password],function(error,result){
                    if(error) throw error;
                    callback(result.affectedRows > 0,'注册成功');
                })
            }
        })
       
    },
    getList:function(user,callback){
        pool.query(userSqlMap.getList,function (error, result) {
            if (error) throw error;
            callback(result);
        });
    }
};