

const getMainPage = (req, res) => {
    res.send('getMain')
}

const getHome = (req, res) => {
    res.send('getHome')
}

const getContact = (req, res) => {
    res.send('getContact')
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