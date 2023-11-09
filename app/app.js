// 파이썬 import와 같은 느낌 npm에서 install 해주면 됨!
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


// 라우팅
const home = require("./src/routes/home")

app.set("views","./src/views")
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`)) // 정적경로 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/",home) // use => 미들웨어 등록해주는 메서드

module.exports = app