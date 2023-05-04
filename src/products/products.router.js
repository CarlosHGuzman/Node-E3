const ProductServices = require('./products.services')

const Router = require('express').Router()

Router.get('/products', ProductServices.getAllProducts)
Router.post('/products', ProductServices.createNewProduct)
Router.get('/products/:id', ProductServices.getProductById)
Router.patch('/products/:id', ProductServices.patchProduct)
Router.put('/products/:id', ProductServices.putProduct)
Router.delete('/products/:id', ProductServices.deleteProduct)

module.exports = Router