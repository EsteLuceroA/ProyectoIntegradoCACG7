const getLogin = (req, res) => {
    res.send('Esta ruta devuelve la vista de login del usuario')
}

const postLogin = (req, res) => {
    res.send('postLogin')
}

const getRegister = (req, res) => {
    res.send('Esta ruta devuelve la vista de registro de usuario')
}

const postRegister = (req, res) => {
    res.send('postRegister')
}

const getLogout = (req, res) => {
    res.send('getLogout')
}

const controllers = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    getLogout
 };

 module.exports = controllers