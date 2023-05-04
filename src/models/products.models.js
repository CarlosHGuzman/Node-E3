const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Categories = require('./categories.models')

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKeys: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categories, 
            key: 'id'
        }
    }
})

module.exports = Products