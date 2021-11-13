const jwt = require('jsonwebtoken')
const { secret } = require('../controllers/config.js')

module.exports = function(roles) {
    return function(req, res, next){
        if(req.method == "OPTIONS"){
            next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                res.status(403).json({massage:"Пользователь не авторизован"})
            }
            const {role: userRole} = jwt.verify(token,secret)
            let hasRole = false

            if(roles.includes(userRole)){
                hasRole = true
            }
            if(!hasRole){
                res.status(403).json({massage:"У вас нет доступа"})
            }
            next()
        }catch(e){
            console.log(e);
            res.status(403).json({massage:"Пользователь не авторизован"})
        }    
    }
}