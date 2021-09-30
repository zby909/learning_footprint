const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const Router = require('koa-router');

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); // 设置所允许的HTTP请求方法
  // ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
  ctx.set('Content-Type', 'application/json;charset=utf-8');
  await next();
});
app.use(bodyParser());

const userRouter = new Router({ prefix: '/users' });

userRouter.post('/:id', (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  console.log(ctx.request.body);
  ctx.response.body = { a: 'Hello World' };
});

// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query);
//   console.log(ctx.request.params);
//   ctx.response.body = "Hello World";
// });

app.use(userRouter.routes());

app.listen(8000, () => {
  console.log('参数处理服务器启动成功~');
});
