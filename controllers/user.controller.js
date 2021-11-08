const db = require('../db.js')
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')

class UserController{
    async createUser(req, res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                res.status(400).json({message: "Ошибки при регистрации", errors: errors.array()})
            }
            const {name, lastname, email, password, phone, role} = req.body;
            const hashPassword = bcrypt.hashSync(password, 7);
            const newPersone = await db.query(`INSERT INTO person (name, lastname, email, password, phone, role) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, lastname, email, hashPassword, phone, role])
            res.json(newPersone.rows[0])
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
            res.status(400).json({message: "registration error"})

        }
    }
    async getUser(req, res){
        try{
            const users = await db.query(`SELECT * FROM person`)
            res.json(users.rows)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async getOneUser(req, res){
        try{
            const userId = req.params.id
            const user = await db.query(`SELECT * FROM person where id = $1`, [userId])
            res.json(user.rows[0])
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async updateUser(req, res){
        try{
            const id = req.params.id
            const {name, lastname, email, password, phone, role} = req.body
            const user = await db.query(`UPDATE person set name = $1, lastname = $2, email = $3, password = $4, phone = $5, role = $6 where id = $7 RETURNING *`, [name, lastname, email, password, phone, role, id])
            res.json(user.rows[0])
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        }
    }
    async deleteUser(req, res){
        try{
            const userId = req.params.id
            const user = await db.query(`DELETE FROM person where id = $1`, [userId])
            res.json(`User deleted. But And his Posts. User id:${userId}`)
        }catch(e){
            console.log('Ошибка ' + e.name + ":\n " + e.message + "\n\n" + e.stack);
        } 
    }
}

module.exports = new UserController()