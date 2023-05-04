const Categories = require('./categories.models')
const Products = require('./products.models')

const initModels = () => {
    Products.belongsTo(Categories)
    Categories.hasMany(Products)
}

module.exports = initModels