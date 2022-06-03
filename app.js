const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve( __dirname, './public' );


app.listen( process.env.PORT || 3010,() => {
    console.log("Servidor corriendo!");
})

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join( __dirname,'./views/index.html'))
})

app.get('/login', function (req, res) {
    res.sendFile(path.join( __dirname,'./views/login.html'));
  });
  app.get('/signin', function (req, res) {
    res.sendFile(path.join( __dirname,'./views/signin.html'));
  });
  app.get('/edit-account', function (req, res) {
    res.sendFile(path.join( __dirname,'./views/edit-account.html'));
  });
  app.get('/change-password', function (req, res) {
    res.sendFile(path.join( __dirname,'/views/change-password.html'));
  });
