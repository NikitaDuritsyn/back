const db = require('../db.js')

class reviewsController{
    async createReview(req, res){
        try{
            const {name, lastname, date, description, grade} = req.body;
            const newReview = await db.query(`INSERT INTO reviewsstatic (name, lastname, date, description, grade ) values ($1, $2, $3, $4, $5) RETURNING *`, [name, lastname, date, description, grade ])
            res.json(newReview.rows[0])
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async getReview(req, res){
        try{
            const Reviews = await db.query(`SELECT * FROM reviewsstatic`)
            res.json(Reviews.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async deleteOneReview(req, res){
            try{
                const reviewId = req.params.id
                const reviewById = await db.query(`DELETE FROM reviewsstatic where id = $1`,[reviewId])
                res.json(reviewById.rows)
            }catch(e){
                console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
            }
        }
}

module.exports = new reviewsController()