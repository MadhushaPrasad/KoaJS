const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.prefix("/koaFund")

router.get('/', async (ctx) => {
    ctx.body = 'Hello World';
});

router.post('/create', async (ctx) => {
    ctx.body = 'This is post API';
});

router.put('/create', async (ctx) => {
    ctx.body = 'This is put API';
});

router.delete('/create', async (ctx) => {
    ctx.body = 'This is delete API';
});

router.get('/:id', async (ctx) => {
    ctx.body = `This is search API and ID is ${ctx.request.body.id}`;
});


module.exports = router;

