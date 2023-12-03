db = [
    {
        product_id: 1,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
        product_id: 2,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp"
    }
]

const getShop = (req, res) => {
    res.send(db)
}

const getItem = (req, res) => {
    const result = db.find(item => item.product_id === parseInt(req.params.id))
    res.send(result)
}

const postItem = (req, res) => {
    res.send('postItem')
}

const getCart = (req, res) => {
    res.send('getCart')
}
const postCart = (req, res) => {
    res.send('postCart')
}

const controllers = {
    getShop,
    getItem,
    postItem,
    getCart,
    postCart
 };

 module.exports = controllers