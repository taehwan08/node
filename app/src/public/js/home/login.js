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
    console.log(JSON.stringify(req))

    // ajax 비동기 처리같넹..
    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => console.log(res.json()))
    .then((res) => console.log(res))
}