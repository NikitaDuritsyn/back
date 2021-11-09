const Router = require('express')
const authController = require('../controllers/auth.controller.js')
const router = new Router()
// const userController = require('../controllers/user.controller.js')
// const {check} = require("express-validator")

// Прописать такие же валидации (подумать какие поля нужно валидировать и это важно !!!!!!!!!!!)
// Может быть с альбой буду сидеть решать этот вопрос

router.post('/login', authController.login)

module.exports = router