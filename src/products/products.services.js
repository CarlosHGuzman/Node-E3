const productControllers = require('./products.controllers')

const getAllProducts = (request, response) => {
    productControllers.findAllProducts()
        .then((data) => {
            response.status(200).json(data)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
}

const getProductById = (request, response) => {
    const id = Number(request.params.id)
    productControllers.findProductById(id)
        .then((data) => {
            if(data){
                response.status(200).json(data)
            }else{
                response.status(404).json({message: 'Product not found'})
            }
        })
        .catch((error) => {
            response.status(400).json(error)
        })
}

const createNewProduct = (request, response) => {
    const obj = request.body
    productControllers.createNewProduct(obj)
        .then((data) => {
            response.status(201).json(data)
        })
        .catch((error) => {
            response.status(400).json(error)
        })
}

const deleteProduct = (response, request) => {
    const id = request.params.id
    productControllers.deleteProduct(id)
        .then((data) => {
            if(data){
                response.status(204).json({message: 'created'})
            }else{
                response.status(404).json({message: 'Product not found'})
            }
        })
        .catch((error) => {
            response.status(404).json(error)
        })
}

const patchProduct = (request, response) => {
    const id = request.params.id
    const obj = request.body
    productControllers.updateProduct(id, obj)
        .then((data) => {
            if(data){
                response.status(200).json({message: `Product with id ${id} updated succesfully`})
            }else{
                response.status(404).json({message: 'Product not found'})
            }
        })
        .catch((error) => {
            response.status(400).json(error)
        })
}

const putProduct = (request, response) => {
    const id = request.params.id
    const obj = request.body
    if(!obj.name || !obj.description || !obj.price || obj.stock){
        return response.status(400).json({
            message: 'Missing Data',
            fields: {
                name: 'String',
                description: 'String',
                price: 'Integer',
                stock: 'String'
            }
        })
    }

    productControllers.updateProduct(id, obj)
        .then((data) => {
            if(data){
                response.status(200).json({message: `Product with id: ${id} updated succesfully`})
            }else{
                response.status(404).json({message: 'Product not found'})
            }
        })
        .catch((error) => {
            response.status(400).json(error)
        })
}

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    deleteProduct,
    patchProduct,
    putProduct
}