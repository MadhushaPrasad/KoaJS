const KoaRouter = require('koa-router');
const {
    deleteCustomer,
    getAllCustomers,
    saveCustomer,
    updateCustomer,
    searchCustomer
} = require('./../controller/Customer.controller');

const router = new KoaRouter();

router.prefix("/customer")

router.get('/', async (ctx) => {
    await getAllCustomers(ctx.request, ctx.response);
});

router.post('/customer', async (ctx) => {
    await saveCustomer(ctx.request, ctx.response);
});

router.put('/update', async (ctx) => {
    await updateCustomer(ctx.request, ctx.response);
});

router.delete('/delete', async (ctx) => {
    await deleteCustomer(ctx.request, ctx.response);
});

router.get('/:id', async (ctx) => {
    await searchCustomer(ctx.request, ctx.response);
});


module.exports = router;

