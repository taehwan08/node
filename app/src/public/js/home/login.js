"use strict"

const id = document.getElementById("id")
const psword = document.getElementById("password")
const button = document.querySelector("button")

button.addEventListener("click", login)

function login(){
    const req = {
        id: id.value,
        password: password.value,
    }
    console.log(req)
}