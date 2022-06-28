const express = require('express');
const app = express();
const mainRouter = require ("./routes/mainRouter");
const membershipsRouter = require ('./routes/membershipsRouter')

// EJS
app.set('view engine','ejs');

// CARPETA PUBLIC, deje el app.js y el views afuera del src porque no me cargaba el css ( me decía error MIME TYPE)
app.use(express.static(__dirname + '../../public'));

// PROCESAR FORMULARIOS
app.use(express.urlencoded({ extended: false}));

// SERVIDOR
app.listen(process.env.PORT || 3010, () => {
  console.log("Servidor corriendo!");
});


// RUTAS
app.use('/', mainRouter);

app.use('/login', mainRouter);

app.use('/signin', mainRouter);

app.use('/edit-account', mainRouter);

app.use('/change-password', mainRouter);

app.use("/carrito", mainRouter);

app.use("/memberships", membershipsRouter);
