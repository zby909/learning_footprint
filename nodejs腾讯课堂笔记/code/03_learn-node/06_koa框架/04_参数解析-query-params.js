const Koa = require('koa');
const cors = require('koa2-cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// app.use(async (ctx, next) => {
//   ctx.vary('Origin');
//   ctx.set('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS');
//   ctx.set('Access-Control-Allow-Origin', '*');
//   await next();
// });
app.use(cors());
app.use(bodyParser());

const userRouter = new Router({ prefix: '/users' });

userRouter.post('/:id', (ctx, next) => {
  console.log(ctx);
  // console.log(ctx.request);
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  console.log(ctx.request.body);
  ctx.response.body = { a: 'Hello World' };
});

app.use(userRouter.routes());

app.listen(8000, () => {
  console.log('参数处理服务器启动成功~');
});
