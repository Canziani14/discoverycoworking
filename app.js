const express = require('express');
const app = express();
const mainRouter = require ("./routes/mainRouter");
const membershipsRouter = require ('./routes/membershipsRouter')


app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3010, () => {
  console.log("Servidor corriendo!");
});

app.use('/', mainRouter);

app.use('/login', mainRouter);

app.use('/signin', mainRouter);

app.use('/edit-account', mainRouter);

app.use('/change-password', mainRouter);

app.use("/carrito", mainRouter);

app.use("/memberships", membershipsRouter);

app.use ("/lab",membershipsRouter)

app.use ("/desk",membershipsRouter)

app.use ("/office",membershipsRouter)

app.use ("/flex",membershipsRouter)

