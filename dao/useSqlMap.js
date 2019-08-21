var userSqlMap={
    getById:'SELECT * FROM user_login WHERE id = ?',
    getByName:'select * from user_login where name = ?',
    login:'select * from user_login where name = ? and password = ?',
    add: 'insert into user_login(name, password) values(?, ?)',
    list:'select * from use_info',
}

module.exports = userSqlMap;