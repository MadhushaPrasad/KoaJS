const koa = require('koa')
const app = new koa()

app.listen(2400, () => {console.log('Server running at PORT 2400')})