const db = require('../db.js')

class productController{
    async createProduct(req, res){
        try{
            const {type, title, titleTwo, descriptionMaterial, descriptionAdvantages, price, urlImage} = req.body;
            const newProduct = await db.query(`INSERT INTO products (type, title, titleTwo, descriptionMaterial, descriptionAdvantages, price, urlImage) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [type, title, titleTwo, descriptionMaterial, descriptionAdvantages, price, urlImage])
            res.json(newProduct.rows[0])
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async getAllProducts(req, res){
        try{
            const products = await db.query(`SELECT * FROM products`)
            res.json(products.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async getProductByParametr(req, res){
        try{
            const parametr = req.params.parametr
            const products = await db.query(`SELECT * FROM products where title = $1`, [parametr])
            //??? Тут не верно Так что нужно будет переделывать
            // Сделать цыкл по массиву products.rows Поиск по параметру и потом прировнять к самому себе, 
            //вот так вот примерно А брать с BD Все товары
            res.json(products.rows[0])
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async updateThisProduct(req, res){
        try{
            const parametr = req.params.id
            // Добавить и в USER тоже условие если пусто то не меняем этот параметр
            // Взять массив по id потом провести манипуляци с полями и занести его в базу по новой.
            // Сначала select по id 
            // потом products.rows == новым параметрам при условии что в том параметре что-то етсь
            // Затем новые поля вносим UPDATE
            // ПОКА ТУТ И В ПОЛЬЗОВАТЕЛЯХ НЕ ВЕРНО !!!!

            // либо - что проще сделать так чтобы на фронте передалвались все поля пользователя в форму редактирования (как id)
            // Это реализованно в проекте по корнилову

            const products = await db.query(`SELECT * FROM products where id = $1`, [id])
            res.json(products.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async deleteAllProducts(req, res){
        try{
            const deleteAllProducts = await db.query(`DELETE FROM products`)
            // const products = await db.query(`SELECT * FROM products`)
            res.json(deleteAllProducts.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async deleteOneProduct(req, res){
        try{
            
            const productsId = req.params.id
            const products = await db.query(`DELETE FROM products where id = $1`, [productsId])
            // const products = await db.query(`SELECT * FROM products`)
            res.json(`Product deleted. ProductsId :${productsId}`)
            // const products = await db.query(`SELECT * FROM products`)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }

}

module.exports = new productController()

/*
    type: ''
    title: ''
    titleTwo: ''
    descriptionMaterial: ''
    descriptionAdvantages: ''
    price: ''
    urlImage: ''
*/