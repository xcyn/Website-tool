const Controller = require('egg').Controller;

class PageConfigController extends Controller {
  async getPageId() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: ctx.helper.getUuid()
    });
  }
  
  async getPageconfigList() {
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
          message: '导航'
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
    });;
  }

  async getPageComponentDatas() {
    const { ctx } = this;
    ctx.body = ctx.helper.res({
      data: {
        '1': {
          title: '配置化页面',
          leftText: '返回',
          rightText: '返回',
          style: {
            margin: '0 0 10px 0',
          },
        },
        '2': {
          type: 'primary',
          style: {
            fontSize: '25px',
            margin: '0 0 10px 0',
            'text-align': 'center'
          },
          value: '我是x-Button1',
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
          width: '300',
          height: '300',
          style: {
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