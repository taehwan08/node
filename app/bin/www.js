"use strict"

const app = require("../app.js")
const port = 3000

app.listen(port, () => {
    console.log(`서버 시작`)
    console.log(`복사 > localhost:${port}`)
})