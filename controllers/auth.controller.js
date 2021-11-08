// Тут будет контроллекр авторизации пользоватея и регистрации его
// Описание задачи
// При регистрации реализовать проверку есть ли такой пользователь или нет
// Зашифровать соль, пароль ... сделать токен
// Данные функции класса auth будут вызываться через функции USER или же напрямую с фронта по пути сюда сразу


// Функция  по созданию пользователя (registration) реализованная в классе User - CreateNewperson
// Функция Login будет реализованна здесь Если так получиться

const db = require('../db.js')
const bcrypt = require('bcrypt');

class aythController {
    // async registration(req, res){
    //     try{
    //         const {name, lastname, email, password, phone, role} = req.body;
    //         const hashPassword = bcrypt.hashSync(password, 7);
    //         const newPersone = await db.query(`INSERT INTO person (name, lastname, email, password, phone, role) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, lastname, email, hashPassword, phone, role])
    //         res.json(newPersone.rows[0])

    //     }catch (e){
    //         console.log(e);
    //         res.status(400).json({message: "registration error"})
    //     }
    // }
    async login(req,res){
        try{
            
        }catch(e){
            console.log(e);
            res.status(400).json({message: "login error"})
        }
    }

}

module.exports = new aythController()