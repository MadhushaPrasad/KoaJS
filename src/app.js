const koa = require('koa')
const app = new koa()
const router = require('./routes/index.router')

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, () => {
    console.log('Server running at PORT 8000')
})