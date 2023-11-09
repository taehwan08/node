"use strict"
// 라우팅 관리 별도로 하기

const express = require("express")
const router = express.Router()

const ctrl = require("./home.ctrl")

router.get('/', ctrl.home)
router.get('/login', ctrl.login)

module.exports = router