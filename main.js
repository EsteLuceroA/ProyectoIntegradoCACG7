const express = require('express');
const mainRoutes = require("./routes/mainRoutes.js");
const shopRoutes = require("./routes/shopRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const authRoutes = require("./routes/authRoutes.js");


const app = express();
const PORT = 8080;

app.use(express.static('public'))
app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth',authRoutes)


app.listen(PORT, () => {
    console.log(`Listening at ${PORT} - http://localhost:${PORT}`)
})