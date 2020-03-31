const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getUuid() {
    const { ctx } = this;
    ctx.body = ctx.helper.getUuid();
  }
}

module.exports = HomeController;