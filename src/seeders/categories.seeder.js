const Categories = require('../models/categories.models')


try {
    Categories.bulkCreate([
        {
            name: 'Categoria 1'
        },
        {
           name: 'Categoria 2' 
        },
        {
            name: 'Categoria 3'
        },
        {
            name: 'Categoria 4'
        },
        {
            name: 'Categoria 5'
        }
    ])
    console.log('Las categorias han sido creadas')
} catch (error) {
    console.log({message: 'Error en categories seeders', error})
}