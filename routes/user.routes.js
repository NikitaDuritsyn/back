const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller.js')
const {check} = require("express-validator")

// Прописать такие же валидации (подумать какие поля нужно валидировать и это важно !!!!!!!!!!!)
// Может быть с альбой буду сидеть решать этот вопрос

router.post('/user',[
    check('name', 'Имя не должно быть пустым').notEmpty(),
    check('password', 'Пароль не должен быть меньше 4 и больше 12 символов').isLength({min:4,max:10}),
    check('email', "your custom error message").isEmail().normalizeEmail(),
    
], userController.createUser)
router.get('/user', userController.getUser)
router.get('/user/:id', userController.getOneUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router