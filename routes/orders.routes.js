const Router = require('express')
const router = new Router()
const ordersController = require('../controllers/orders.controller.js')

router.post('/orders', ordersController.createOrder)
router.get('/orders', ordersController.getAllOrders)
router.delete('/orders/:id', ordersController.deletOrder)
router.delete('/orders', ordersController.deleteAllOrders)

module.exports = router