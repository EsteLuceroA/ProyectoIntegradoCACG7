const express = require('express');
const controllers = require('../controllers/mainControllers.js')
const router = express.Router();

router
    .get('/', controllers.getMainPage)
    .get('/home', controllers.getHome)
    .get('/contact', controllers.getContact)
    .get('/about', controllers.getAbout)
    .get('/faqs', controllers.getFaqs)
    

module.exports = router;