"use strict"

const id = document.querySelector("#id")
const psword = document.querySelector("#password")
const button = document.querySelector("button")

button.addEventListener("click", login)

function login(){
    const req = {
        id: id.value,
        password: password.value,
    }
    // console.log(req)
    // console.log(JSON.stringify(req))

    // ajax 비동기 처리같넹..
    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/"
            }else{
                alert(res.msg)
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생")
        })
        
}