const Controller = require('egg').Controller;

class PageConfigController extends Controller {
  async getPageId() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: ctx.helper.getUuid()
    });
  }

  async getPageConfList() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageConfigServer.queryComponents();
      ctx.body = ctx.helper.res({
        data,
        errmsg: '请求组件list成功'
      })
    } catch(err) {
      throw err
    }
  }

  async savePageConfList() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageConfigServer.saveComponents(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '保存组件list成功'
      })
    } catch(err) {
      throw err
    }
  }

  async updatePageConfList() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageConfigServer.updateComponents(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '更新组件list成功'
      })
    } catch(err) {
      throw err
    }
  }
  
  // 布局区域配置crud
  async getPageCpDatas() {
    try {
      const { ctx, service } = this;
      const data = await service.websiteComponentServer.queryPageConfigOne(ctx.request.query);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '请求数据成功'
      })
    } catch(err) {
      throw err
    }
  }

  async savePageCpDatas() {
    try {
      const { ctx, service } = this;
      const data = await service.websiteComponentServer.savePageConfigs(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '保存页面组件配置成功'
      })
    } catch(err) {
      throw err
    }
  }

  async updatePageCpDatas() {
    try {
      const { ctx, service } = this;
      const data = await service.websiteComponentServer.updatePageConfigs(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '更新页面组件配置成功'
      })
    } catch(err) {
      throw err
    }
  }

  async getPageComponentDatas() {
    try {
      const { ctx, service } = this;
      const data = await service.websiteComponentServer.queryPageComponentDatas(ctx.request.query);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '请求数据成功'
      })
    } catch(err) {
      throw err
    }
  }

  async getPageCommonConfig() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageConfigServer.queryPageConfig();
      ctx.body = ctx.helper.res({
        data,
        errmsg: '请求页面公共配置成功'
      })
    } catch(err) {
      throw err
    }
  }

  async getPageCommonData() {
    try {
      const { ctx, service } = this;
      const data = await service.websiteComponentServer.queryPageCommonData(ctx.request.query);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '请求页面公共数据成功'
      })
    } catch(err) {
      throw err
    }
  }

  async updatePageComponentData() {
    try {
      const { ctx, service } = this;
      const data = await service.websiteComponentServer.updatePageComponentData(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '更新配置组件数据'
      })
    } catch(err) {
      throw err
    }
  }

  async updatePageCommonData() {
    try {
      const { ctx, service } = this;
      const data = await service.websiteComponentServer.updatePageCommonData(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '更新页面公共数据成功'
      })
    } catch(err) {
      throw err
    }
  }

  async getPages() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageServer.queryPages();
      ctx.body = ctx.helper.res({
        data,
        errmsg: '获取版本列表数据成功'
      })
    } catch(err) {
      throw err
    }
  }

  async getPageOne() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageServer.queryPageOne({pageId: ctx.request.query.pageId});
      ctx.body = ctx.helper.res({
        data,
        errmsg: '获取当前数据成功'
      })
    } catch(err) {
      throw err
    }
  }

  async savePages() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageServer.savePages(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '版本列表数据保存成功'
      })
    } catch(err) {
      throw err
    }
  }

  async deletePages() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageServer.deletePages(ctx.request.query);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '版本列表数据删除成功'
      })
    } catch(err) {
      throw err
    }
  }

  async release() {
    try {
      const { ctx, service } = this;
      const pageId = ctx.request.body.pageId
      const data = await service.websitePageServer.release(pageId);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '发布成功'
      })
    } catch(err) {
      console.log('err', err)
      throw err
    }
  }

}

module.exports = PageConfigController;