require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors({
    origin: '*'
}));



// var DATABASE_URL = process.env.DATABASE_URL || 'http://localhost'
// mongoose.connect(`mongodb://${DATABASE_URL}/webshop`, { useNewUrlParser: true });

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database opened'))

app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)
const ordersRouter = require('./routes/orders')
app.use('/orders', ordersRouter)
const questionsRouter = require('./routes/questions')
app.use('/questions', questionsRouter)





app.listen(3000, () => console.log("Server started"))