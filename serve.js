#!/usr/bin/env node

const Koa = require('koa')
const static = require('koa-static')

const app = new Koa()

app.use(static('.'))

app.listen(3000)