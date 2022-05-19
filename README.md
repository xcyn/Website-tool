# 低代码平台
+ 功能描述
  + 一套服务于运营的低代码平台，主要功能包括，页面模板crud、运营h5页面的增删改查、在线预览功能
+ 后期优化**
  + ssr做压缩缓存，日志， 现在做的还稍微有的问题
  + 增加复杂组件，集成vant更多组件（目前是支持vant组件配置透传的）
  + 增加页面拖拽生成能力(SortableJS)
+ 主要技术栈
  + egg生态、vue全家桶、 docker部署
  + [egg文档](https://eggjs.github.io/)
+ 预览地址: http://localhost:9980/#/pageList
+ 项目启动
  + 环境依赖: docker-compose版本：1.25.4
  ```
    cd website-docker
    docker-compose up -d
    cd website-server
    npm run dev
    cd website-templete
    npm run dev
    cd website-client
    npm run save 初始化导入mongodb
    npm run serve
  ```
+ 原理图
  ![原理图](https://graph.baidu.com/resource/1214a265d61f39bd376ed01586143189.jpg)
+ client编辑页面
  + 页面管理
  ![页面管理](https://graph.baidu.com/resource/121dbedafa7d0e446675401586052268.jpg)
  + 页面编辑
  ![页面编辑](https://graph.baidu.com/resource/121644244960de12fd58f01586052325.jpg)
  + 表结构设计
    + 主要设计3张表
    + websitepages做页面版本控制，包含每一个页面的编辑和删除及发布
    + websitepageconfigs 主要是做全局配置数据维护，组件区配置、页面配置
    + websitecomponents 主要是每个版本页面的数据，包含布局区域组件数据，组件配置的数据，页面配置数据
  + 预览页面通过iframe起一个模版页面，做实时更新
  + 页面管理主要是维护每一个页面版本的管理页面
+ templete层案例
  ![模版层](https://graph.baidu.com/resource/12141f6ffd6382b19adaf01585895653.jpg)
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
        message: '导航组件',
        schema: {
          title: {
            type: 'input',
            label: '标题'
          },
          leftText: {
            type: 'input',
            label: '标题左侧文案'
          },
          rightText: {
            type: 'input',
            label: '标题右侧文案'
          },
          baseStyle: {
            type: 'input',
            label: '容器css样式'
          }
        }
      },
      {
        id: 3,
        name: 'x-Cell',
        message: '单元格组件',
        schema: {
          title: {
            type: 'input',
            label: '单元格组件标题'
          },
          value: {
            type: 'input',
            label: '单元格组件右侧文案'
          },
          baseStyle: {
            type: 'input',
            label: '容器css样式'
          },
          size: {
            type: 'input',
            label: 'large(支持 large、small)'
          },
          label: {
            type: 'input',
            label: '单元格组件描述信息'
          }
        }
      },
      {
        id: 5,
        name: 'x-Image',
        message: '图片组件',
        schema: {
          baseStyle: {
            type: 'input',
            label: '容器css样式'
          },
          src: {
            type: 'input',
            label: '图片链接地址'
          },
        }
      },
      {
        id: 2,
        name: 'x-Button',
        message: '按钮组件',
        schema: {
          type: {
            type: 'input',
            label: '按钮类型(支持default、primary、info、warning、danger五种类型)'
          },
          baseStyle: {
            type: 'input',
            label: '容器css样式'
          },
          style: {
            type: 'input',
            label: '按钮样式'
          },
          value: {
            type: 'input',
            label: '按钮文案'
          }
        }
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
  + 主要是用于低代码平台思想上的学习和技术提升，如果后续公司有需求，可以能入手搭建
  + 帮助一些做资质的朋友实现免费网站编辑
+ 参考资料
  + [linux安装docker](https://www.jianshu.com/p/2dae7b13ce2f)
  + [linux下docker-compose安装](https://www.cnblogs.com/tsbing/p/11442175.html)
+ 项目参考
  + [项目参考](https://github.com/page-pipepline/pipeline-editor)