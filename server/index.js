import { Nuxt } from 'nuxt'
import express from 'express'

const app = express()
const compression = require('compression')

app.disable('x-powered-by')
app.use(compression())

// Nuxt.js をオプションとともにインスタンス化する
let config = require('../nuxt.config.js')
config.dev = false 
const nuxt = new Nuxt(config)

// すべてのルートを Nuxt.js でレンダリングする
app.use(nuxt.render)

export default app 

