const express = require('express');
const {resolve} = require('path');

/**COOKIES */
const session = require('express-session')
const cookieParser = require('cookie-parser')


/**ROUTES */
const mainRoutes = require("./routes/mainRoutes.js");
const shopRoutes = require("./routes/shopRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const authRoutes = require("./routes/authRoutes.js");


const app = express();
const PORT = 8080;

app.set('view engine','ejs');
app.set('views', resolve()+'/src/views')

app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'nico',
    resave: true,
    saveUninitialized: true,
    cookie:{maxAge:6000}
}))
/*COOKIES */
app.use(cookieParser('nikito'))

app.get('/login',(req,res)=>{
    if(req.session.nombre==='admin'){
        return res.send('Ya has logeado como ADMIN')
    }
    res.sendFile(resolve()+'/public/pages/login.html')
})

app.post('/login',(req,res)=>{

    if(req.body.user ==='admin' && req.body.pass === 'admin'){
        req.session.nombre = 'admin'
    }else{
        res.send('no sos admin')
    }
    res.send('sos administrador')
})



app.get('/ver', (req,res)=>{
    console.log(req.session.nombre)
    if(req.sessionID)
        res.send(`Ya te encuentras logueado con tu id: ${req.sessionID}`)
    else 
        res.send('Error')
})  

app.get('/cambiar',(req,res)=>{
    req.session.nombre='otro'
    console.log(req.sessionID)
    res.send(req.session.nombre)
})

app.get('/cookie/crear',(req,res)=>{
    res.cookie('nombreCookie', 303456);
    res.cookie('cookieFirmada','Sopa',{signed:true});
    res.send('Se creó la cookie;')
})

app.get('/cookie/leer',(req,res)=>{
    const nombreCookie = req.cookies.nombreCookie;
    const cookieFirmada = req.signedCookies.cookieFirmada;
    console.log(nombreCookie);
    console.log(cookieFirmada);
    res.send(`EL VALOR DE LA COOKIE nombreCookie es ${nombreCookie} y de la cookieFirmada ${cookieFirmada}`)
})

app.use(express.static('public'))

app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth',authRoutes)


app.listen(PORT, () => {
    console.log(`Listening at ${PORT} - http://localhost:${PORT}`)
})




/*
 npm init -y
 npm i express
 node app.js
 npm i ejs
 instalar nodemon

*/