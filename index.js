require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser') //добавил  cookie-parser в проект

const userRouter = require('./routes/user.routes.js')
const ordersRouter = require('./routes/orders.routes.js')
const productsRouter = require('./routes/products.routes.js')
const reviewsRouter = require('./routes/reviews.routes.js')
const authRouter = require('./routes/auth.routes.js')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api', userRouter)
app.use('/api', ordersRouter)
app.use('/api', productsRouter)
app.use('/api', reviewsRouter)
app.use('/api', authRouter)

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`))
    }catch(e){
        console.log(e);
    }
}
start()