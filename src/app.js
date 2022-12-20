const koa = require('koa')
const app = new koa()

const indexRoutes = require('./routes/index.router')
const customerRoutes = require('./routes/customer.router')

app.use(indexRoutes.routes()).use(indexRoutes.allowedMethods());
app.use(customerRoutes.routes()).use(customerRoutes.allowedMethods());


app.listen(8000, () => {
    console.log('Server running at PORT 8000')
})