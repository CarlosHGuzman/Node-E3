const Products = require('../models/products.models')
const Categories = require('..models/categories.models')

const findAllProducts = async () => {
    const data = await Products.findAll({
        attributtes: ['id', 'name', 'description', 'price', 'stock'],
        include:{
            model: Categories, 
            attributes: ['id', 'name']
        }
    })
    return data
}

const findProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createNewProduct = async (obj) => {
    const newProduct = {
        name: obj.name,
        description: obj.description,
        price: obj.price,
        stock: obj.stock
    }

    const data = await Products.create(newProduct)
    return data
}

const updateProduct = async (id, obj) => {
    const data = await Products.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllProducts,
    findProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}