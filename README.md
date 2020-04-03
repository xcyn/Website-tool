# 建站工具
+ 功能描述
  + 一套服务于运营的建站工具，主要功能包括，页面模板crud、运营h5页面的增删改查、在线预览功能
+ 主要技术栈
  + egg生态、vue全家桶、 docker部署
  + [egg文档](https://eggjs.github.io/)
+ 原理图
  ![原理图](./website-client/src/assets/principle.png)
+ templete层案例
  ![模版层](./website-client/src/assets/templete.png)
  + 配置数据案例:
    + templete
    ```
    <xcy-page
      :configList="getterConfigList"
      :componentDatas="getterComponentDatas"
    ></xcy-page>
    ```
    + data
    ```
    const configList = [
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
    const componentDatas = {
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
    ```
+ 项目目的
  + 主要是用于建站工具思想上的学习和技术提升，如果后续公司有需求，可以能入手搭建
  + 帮助一些做资质的朋友实现免费网站编辑
+ 项目参考
  + [项目参考](https://github.com/page-pipepline/pipeline-editor)