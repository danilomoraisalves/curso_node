var mysql = require('mysql');

// foi passado uma variavel para receber a função pra que o autoloade não inicialice a conexão no momento de iniciar o servidor.
var connMysql = function()
{
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'password',
        database : 'portal_noticias'
    });
}

module.exports = function()
{
   return connMysql;
}