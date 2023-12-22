const ejs = require('ejs')
const {resolve} = require('path');


const getMainPage = async(req, res) => {
    res.send('getMainPage')
    
}

const getHome = (req, res) => {   
    res.sendFile(resolve()+'/public/pages/edit.html')
    /*const a = [{ id: 1, nombre: 'Juan'}, {id:2, nombre:'eL Pepe'}]
    res.render('pagina',{mensaje:"asdfmovie", a})*/
}

const getContact = (req, res) => {
    res.sendFile(resolve()+'/public/pages/contact.html')
}
const getAbout = (req, res) => {
    res.send('getAbout')
}

const getFaqs = (req, res) => {
    res.send('getHome')
}

const controllers = {
    getMainPage,
    getHome,
    getContact,
    getAbout,
    getFaqs
 };

 module.exports = controllers