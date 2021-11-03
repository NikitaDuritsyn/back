const Router = require('express')
const router = new Router()
const productController = require('../controllers/products.controller.js')

router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProducts)
router.get('/products/:parametr', productController.getProductByParametr)
router.put('/products/:id', productController.updateThisProduct)
router.delete('/products', productController.deleteAllProducts)
router.delete('/products/:id', productController.deleteOneProduct)

module.exports = router

// Создание товара
// Вывод всех товаров
// Вывод товаров по параметру
// Редактирование товара
// Удаление всех товаров
// Удаление товара по id
// ТОВАРЫ СВЯЗАНЫ С АДМИНИСТРАТОРОМ ?? Пока хз как сделать