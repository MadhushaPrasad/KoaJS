const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.prefix("/customer")

router.get('/', async (ctx) => {
    ctx.body = 'Hello Customer';
});

router.post('/customer', async (ctx) => {
    ctx.body = 'This is post API';
});

router.put('/update', async (ctx) => {
    ctx.body = 'This is put API';
});

router.delete('/delete', async (ctx) => {
    ctx.body = 'This is delete API';
});

router.get('/:id', async (ctx) => {
    ctx.body = `This is search customer API and ID is ${ctx.request.body.id}`;
});


module.exports = router;

