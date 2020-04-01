const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')
const template = fs.readFileSync(path.join(__dirname, '../dist/index.templete.html'), 'utf-8')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
})
const context = {}
renderer.renderToString(context)
  .then((html) => {
    fs.writeFileSync(path.join(__dirname, '../dist', 'index.html'), html, 'utf-8')
    console.log('---ssr---build---success---')
  })
  .catch((e) => {
    console.error(e)
    throw e
  });