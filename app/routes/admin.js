module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia', {validacao : {}, noticia : {} });
    });


    app.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        //req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Notícia é obrigatório').notEmpty();

      var errors = req.validationErrors();

        if(errors)
        {
          res.render('admin/form_add_noticia', {validacao : errors, noticia : noticia});
          return;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
         });

    });
};
