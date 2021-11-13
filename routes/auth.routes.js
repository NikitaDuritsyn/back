const Router = require('express')
const authController = require('../controllers/auth.controller.js')
const router = new Router()
const {check} = require("express-validator")

// const userController = require('../controllers/user.controller.js')
// const {check} = require("express-validator")

// Прописать такие же валидации (подумать какие поля нужно валидировать и это важно !!!!!!!!!!!)
// Может быть с альбой буду сидеть решать этот вопрос

router.post('/login', authController.login)
router.post('/registration',[
    check('name', 'Имя не должно быть пустым').notEmpty(),
    check('password', 'Пароль не должен быть меньше 4 и больше 12 символов').isLength({min:4,max:10}),
    check('email', "your custom error message").isEmail().normalizeEmail(),], authController.registration)

module.exports = router