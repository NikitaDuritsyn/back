const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.routes.js')
const ordersRouter = require('./routes/orders.routes.js')
const productsRouter = require('./routes/products.routes.js')
const reviewsRouter = require('./routes/reviews.routes.js')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api', userRouter)
app.use('/api', ordersRouter)
app.use('/api', productsRouter)
app.use('/api', reviewsRouter)

app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`))