const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require ("path");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const rememberMiddleware = require('./middlewares/rememberMiddleware')
// RUTAS
const mainRouter = require ("./routes/mainRouter");
const membershipsRouter = require ('./routes/membershipsRouter');
const userRouter = require ('./routes/userRouter');
const adminRouter = require ('./routes/adminRouter')


// const consolelogMiddleware = require('./middlewares/consolelogMiddleware')

//SESSION
app.use(session({
  secret: "mensaje secreto",
  resave: false,
  saveUninitialized: false
}))
//COOKIES
app.use(cookieParser());


// EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// MIDDLEWARES
app.use(express.static(path.resolve(__dirname, ".." ,"public")))
//app.use(consolelogMiddleware);
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use(rememberMiddleware) 

// SERVIDOR
app.listen(process.env.PORT || 3010, () => {
  console.log(`Servidor corriendo! en el puerto http://localhost:3010/` );
});


app.use(mainRouter);
app.use(membershipsRouter);
app.use(userRouter);
app.use(adminRouter);



