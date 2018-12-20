function NoticiasDAO(connection) {
    this_connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this_connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    this_connection.query('select * from noticias where id_noticia = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this_connection.query('insert into noticias set ?', noticia, callback)
}

module.exports = function () {
    return NoticiasDAO;
}