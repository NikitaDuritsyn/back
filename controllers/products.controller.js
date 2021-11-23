const db = require('../db.js')

class productController{
    async createProduct(req, res){
        try{
            const {type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage} = req.body;
            const newProduct = await db.query(`INSERT INTO products (type, title, titleTwo, descriptionMaterial, descriptionAdvantages, price, urlImage) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage])
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
            // Тут по типу товара будет искать
            // console.log(req.params);

            const parametr = req.params.parametr
            const products = await db.query(`SELECT * FROM products where type = $1`, [parametr])
            res.json(products.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async updateThisProduct(req, res){
        try{
            const productId = req.params.id
            const {type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage} = req.body
            await db.query(`UPDATE products set type = $1, title = $2, titletwo = $3, descriptionmaterial = $4, descriptionadvantages = $5, price= $6, urlimage = $7 where id = $8 RETURNING *`, [type, title, titletwo, descriptionmaterial, descriptionadvantages, price, urlimage, productId])
            const productsNew = await db.query(`SELECT * FROM products`)
            res.json(productsNew.rows)
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
            await db.query(`DELETE FROM products where id = $1`, [productsId])
            const productsNew = await db.query(`SELECT * FROM products`)
            res.json(productsNew.rows)

            // res.json(`Product deleted. ProductsId :${productsId}`)
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