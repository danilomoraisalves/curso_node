var app = require('./config/server');

// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaFormInclusaoNotica = require('./app/routes/formulario_inclusao_noticia')(app);

// rotaNoticias(app);
// rotaHome(app);
// rotaFormInclusaoNotica(app);

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});