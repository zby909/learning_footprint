const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const Router = require('koa-router');

app.use(bodyParser());

const userRouter = new Router({ prefix: '/org2' });

userRouter.get('/', async (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  console.log(ctx.request.body);
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  ctx.response.body = { a: 'org2 Hello World' };
});

// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query);
//   console.log(ctx.request.params);
//   ctx.response.body = "Hello World";
// });

app.use(userRouter.routes());

app.listen(8001, () => {
  console.log('参数处理服务器启动成功~');
});
