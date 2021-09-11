const db = require('../db.js')

class ordersController {
    async createOrder(req, res){
        try{
            const {title, description, username, patronymic, userlastname, email, phone} = req.body;
            const newOrder = await db.query(`INSERT INTO orders (title, description, username, patronymic, userlastname, email, phone) values ($1, $2, $3,$4, $5, $6, $7) RETURNING *`, [title, description, username, patronymic, userlastname, email, phone])
            res.json(newOrder.rows[0])
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async getAllOrders(req,res){
        try{
            const orders = await db.query(`SELECT * FROM orders`)
            res.json(orders.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async deletOrder(req, res){
        try{
            const orderId = req.params.id
            const postByUser = await db.query(`DELETE FROM orders where id = $1`,[orderId])
            res.json(postByUser.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async deleteAllOrders(req,res){
        try{
            const deleteAllOrders = await db.query(`DELETE FROM orders`)
            res.json(deleteAllOrders.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
}

module.exports = new ordersController()