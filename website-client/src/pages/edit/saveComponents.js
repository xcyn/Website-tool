const componentDatas = [
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
const pageConfig = [{
  id: 1,
  name: 'backgroundColor',
  message: '页面背景(输入rgba的颜色值)'
}, {
  id: 2,
  name: 'title',
  message: '页面标题'
}]
// 如果数据库里有数据调更新就行
async function saveComponents() {
  try {
    const baseUrl = 'http://localhost:7013'
    const axios = require('axios').default;
    const result = await axios.get(`${baseUrl}/pageConfig/getPageConfList`, {
      pageId: 1
    })
    const data = result.data.data
    if(!data) {
      console.log('数据库没有配置数据, 存入中....')
      await axios.post(`${baseUrl}/pageConfig/savePageConfList`, {
        pageId: 1,
        config: componentDatas,
        pageConfig: pageConfig
      })
    } else {
      console.log('数据库已经有配置数据, 更新中....')
      await axios.put(`${baseUrl}/pageConfig/updatePageConfList`, {
        pageId: 1,
        config: componentDatas,
        pageConfig: pageConfig
      })
    }
    console.log('导入配置数据成功')
    // return res
  } catch(err) {
    console.log('导入配置数据失败', err)
  }
}
saveComponents()