const Controller = require('egg').Controller;

class PageConfigController extends Controller {
  async getPageId() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: ctx.helper.getUuid()
    });
  }

  async getPageComponentList() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: [
        {
          id: 1,
          name: 'x-NavBar',
          message: '导航'
        },
        {
          id: 3,
          name: 'x-CellGroup',
          message: '单元格'
        },
        {
          id: 5,
          name: 'x-Image',
          message: '图片'
        },
        {
          id: 2,
          name: 'x-Button',
          message: '按钮'
        }
      ]
    });
  }
  
  async getPageconfigList() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageConfigServer.queryPageConfigOne(ctx.request.query);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '请求数据成功'
      })
    } catch(err) {
      throw err
    }
  }

  async savePageconfigList() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageConfigServer.savePageConfigs(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '保存页面组件配置成功'
      })
    } catch(err) {
      throw err
    }
  }

  async updatePageconfigList() {
    try {
      const { ctx, service } = this;
      const data = await service.websitePageConfigServer.updatePageConfigs(ctx.request.body);
      ctx.body = ctx.helper.res({
        data,
        errmsg: '更新页面组件配置成功'
      })
    } catch(err) {
      throw err
    }
  }

  async getPageComponentDatas() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: {
        '1': {
          title: '配置化页面模版层案例',
          leftText: '返回',
          baseStyle: {
            margin: '0 0 10px 0',
          },
        },
        '2': {
          type: 'primary',
          baseStyle: {
            fontSize: '25px',
            margin: '20px 0 10px 0',
            'text-align': 'center',
          },
          style: {
            width: '80%'
          },
          value: '确定',
        },
        '3': {
          style: {
            margin: '0 0 10px 0',
          },
          list: [
            {
              title: '单元格1',
              value: '内容1',
              size: 'large1',
              label: '描述信息1'
            },
            {
              title: '单元格2',
              value: '内容2',
              size: 'large2',
              label: '描述信息2'
            }
          ]
        },
        '5': {
          width: '350',
          height: '350',
          baseStyle: {
            'text-align': 'center',
          },
          src: "https://img.yzcdn.cn/vant/cat.jpeg"
        }
      }
    });;
  }

  async getPageCommonConfig() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: [{
        id: 1,
        name: 'backgroundColor',
        message: '页面背景'
      }, {
        id: 2,
        name: 'title',
        message: '页面标题'
      }]
    });;
  }

  async getPageCommonData() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: {
        title: '配置化页面5',
        backgroundColor: '255,255,255,1'
      }
    });;
  }
}

module.exports = PageConfigController;