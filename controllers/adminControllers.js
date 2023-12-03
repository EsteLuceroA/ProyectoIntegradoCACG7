const getAdmin = (req, res) => {
    res.send('getAdmin')
}

const getCreate = (req, res) => {
    res.send('getCreate')
}

const postCreate = (req, res) => {
    res.send('postCreate')
}

const getEdit = (req, res) => {
    res.send('getEdit')
}

const putEdit = (req, res) => {
    res.send('putEdit')
}

const deleteEdit = (req, res) => {
    res.send('deleteEdit')
}

const controllers = {
    getAdmin,
    getCreate,
    postCreate,
    getEdit,
    putEdit,
    deleteEdit
 };

 module.exports = controllers