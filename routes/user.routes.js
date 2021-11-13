const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware.js')
const rightsMiddleware = require('../middleware/rightsMiddleware.js')
const userController = require('../controllers/user.controller.js')
// [authMiddleware, rightsMiddleware(['admin','superadmin'])],
router.get('/user', rightsMiddleware(["admin"]), userController.getUser)
router.get('/user/:id', userController.getOneUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router