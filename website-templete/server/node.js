try {
  const fs = require('fs')
  const path = require('path')
  const Koa = require("koa")
  const static = require("koa-static")
  const { createBundleRenderer } = require('vue-server-renderer')
  const serverBundle = require('../dist/vue-ssr-server-bundle.json')
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.templete.html'), 'utf-8')
  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    clientManifest // （可选）客户端构建 manifest
  })

  const app = new Koa();

  app.use(static(path.join( __dirname,  '../dist/')));
  app.use(async (ctx, next) => {
    await build(ctx)
    const html = await render(ctx)
    ctx.body = html
  })

  app.listen(3000)
    .on("listening", () => {
        console.log(`server started at localhost:${3000}`);
    })
    .on("error", err => {
        console.log("---server error---", err);
    });

  async function render(ctx) {
    try {
      const context = {
        state: {},
        url: ctx && ctx.url || '/'
      }
      const html = await renderer.renderToString(context)
      return html
    } catch(err) {
      console.log(`renderer报错了～: ${err}`)
      return err
    }
  }

  async function build(ctx) {
    const parameterEnv = process.argv[2]
    if(parameterEnv === 'build') {
      const html = await render(ctx)
      fs.writeFileSync(path.join(__dirname, '../dist', 'index.html'), html, 'utf-8')
    }
  }
  build()
} catch(err) {
  console.log('实时编译中.....')
}