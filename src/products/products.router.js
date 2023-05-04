const ProductServices = require('./products.services')

const Router = require('express').Router()

Router.get('/products', ProductServices.getAllProducts)
Router.post('/products', ProductServices.createNewProduct)
Router.get('/products/:id', ProductServices.getProductById)
Router.patch('/products', ProductServices.patchProduct)
Router.put('/products', ProductServices.putProduct)
Router.delete('/products', ProductServices.deleteProduct)

module.exports = Router