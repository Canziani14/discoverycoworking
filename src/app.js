const express = require('express'); //requiere express
const app = express(); //uso la funcionalidad de express
const methodOverride = require('method-override'); // paquete para usar PUT y DELETE
const path = require ("path"); //crea rutas absolutas
const session = require('express-session'); //paquete para loguear usuarios
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3010; //variable dinamica de puerto


// RUTAS
const mainRouter = require ("./routes/mainRouter");
const membershipsRouter = require ('./routes/membershipsRouter');
const userRouter = require ('./routes/userRouter');
const adminRouter = require ('./routes/adminRouter')

//SESSION
app.use(session({
  secret: "mensaje secreto",
  resave: false,
  saveUninitialized: false
}))

// MIDDLEWARES GLOBALES
app.use(express.static(path.resolve(__dirname, ".." ,"public")))
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));

// ubicacion de la carpeta de vistas para express
app.set('views', path.join(__dirname, 'views'));
//motor de vista usado en la app
app.set('view engine','ejs');




//ROUTES PATHS
app.use(mainRouter);
app.use(membershipsRouter);
app.use(userRouter);
app.use(adminRouter);

// LEVANTAR SERVIDOR DE EXPRESS
app.listen(PORT, () => {
  console.log(`listening on PORT en el puerto http://localhost:${PORT}`);
  
});


