const Subscription = require('egg').Subscription;

class testTimer extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '180s', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    // 定时清理二维码静态服务器上文件
    const publicPath = this.ctx.helper.path.resolve(__dirname, `../public/qrCode`)
    this.ctx.helper.shell.rm('-rf', `${publicPath}/*`)
    this.ctx.app.cache = '111';
  }
}

module.exports = testTimer;