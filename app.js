const express = require('express');
const app = express();
const router = require ("./router/main")


app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3010, () => {
  console.log("Servidor corriendo!");
});

app.use('/', router);

app.use('/login', router);

app.use('/signin', router);

app.use('/edit-account', router);

app.use('/change-password', router);

app.use("/carrito", router);

app.use("/membership", router);

/*Definimos para las membresias*/
app.use("/lab", router);

app.use("/flex", router);

app.use("/desk", router);

app.use("/office", router);
