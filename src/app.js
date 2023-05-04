const expresse = require('express')
const productRouter = require('./products/products.router')
const db = require('./utils/database')
const initModels = require('./models/initModels')

const app = express()
const port = 9000

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log("Credenciales correctas")
    })
    .catch((error) => {
        console.log(error)
    })

db.sync()
    .then(() => {
        console.log("Actualizado")
    })
    .catch((error) => {
        console.log(error)
    })

initModels()

app.get('/'), (request, response) => {
    response.json({
        message: "Server ready",
        routes: {
            products: `http://localhost:${port}/api/v1/products`
        }
    })
}

app.use('/api/v1', productRouter)

app.listen(port, () => {
    console.log('Server started')
})