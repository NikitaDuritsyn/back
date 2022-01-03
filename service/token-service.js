const jwt = require('jsonwebtoken')

class TokenService{
    generateTokens (payload){
        const refreshTiken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "12h"})
        const accessToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "12h"})
        return {
            accessToken,
            refreshTiken
        };
    }
    //Доделать реализацию двух токенов продумать логику взаимодействия с pgSQL
    async saveToken(){
        try{

        }catch(e){

        }
    }
}

module.exports = new TokenService();