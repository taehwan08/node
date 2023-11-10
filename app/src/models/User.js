"use strict"

const UserStoarage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body
        const { id,password } = UserStoarage.getUserInfo(body.id)
        console.log(id,password)

        if(id) {
            if(id === body.id && password === body.password){
                return {success: true}
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."}
        }
        return {success: false, msg: "아이디가 존재하지 않습니다."}
    }

}

module.exports = User