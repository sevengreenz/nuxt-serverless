const { Nuxt } = require("nuxt");
import * as express from "express";
const serverless = require("serverless-http");

const app = express();

// Nuxt.js をオプションとともにインスタンス化する
let config = require("../../nuxt.config.js");
config.dev = false;
const nuxt = new Nuxt(config);

// すべてのルートを Nuxt.js でレンダリングする
app.use((req, res) => setTimeout(() => nuxt.render(req, res), 0));

export const render = serverless(app);
