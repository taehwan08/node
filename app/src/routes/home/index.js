"use strict"
// 라우팅 관리 별도로 하기

const express = require("express")
const router = express.Router()

const ctrl = require("./home.ctrl")

router.get('/', ctrl.output.home)
router.get('/login', ctrl.output.login)
router.post('/login', ctrl.process.login)

module.exports = router