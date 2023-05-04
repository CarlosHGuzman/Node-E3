const Products = require('../models/products.models')

try {
    Products.bulkCreate([
        {
            name: 'Nombre 1',
            description: 'Descripcion 1',
            price: 100,
            stock: 1,
            categoryId: 1
        },
        {
            name: 'Nombre 2',
            description: 'Descripcion 2',
            price: 200,
            stock: 2,
            categoryId: 2
        },
        {
            name: 'Nombre 3',
            description: 'Descripcion 3',
            price: 300,
            stock: 3,
            categoryId: 3
        },
        {
            name: 'Nombre 4',
            description: 'Descripcion 4',
            price: 400,
            stock: 4,
            categoryId: 4
        },
        {
            name: 'Nombre 5',
            description: 'Descripcion 5',
            price: 500,
            stock: 5,
            categoryId: 5
        }
       
    ])
} catch (error) {
    console.log(error)
}