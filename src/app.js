const express = require('express');
const app = express();
const methodOverride = require('method-override');


const consolelogMiddleware = require('./middlewares/consolelogMiddleware')

// EJS
app.set('view engine','ejs');

// MIDDLEWARES
app.use(express.static(__dirname + '../../public'));
app.use(consolelogMiddleware);
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false})); //para procesar formularios


// SERVIDOR
app.listen(process.env.PORT || 3010, () => {
  console.log("Servidor corriendo!");
});


// RUTAS
const mainRouter = require ("./routes/mainRouter");
const membershipsRouter = require ('./routes/membershipsRouter');
const userRouter = require ('./routes/userRouter');


app.use(mainRouter);

app.use(membershipsRouter);

app.use(userRouter);


