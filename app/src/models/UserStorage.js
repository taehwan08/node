"use strict"

class UserStoarage {
    static #users = {
        id: ["admin"],
        password: ["1234"],
        name: ["김태환"]
    }

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})
        // console.log(newUsers)
        return newUsers
    }

    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users)
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser
        }, {})

        return userInfo
    }
}

module.exports = UserStoarage