<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="3" class="edit-col">
        <div class="title">
          组件区
        </div>
        <div class="componentList">
          <div class="component" @dblclick="handleSlectComponent(component)" :key="key" v-for="(component, key) in componentList">
            <el-button><i class="el-icon-star-on"></i>{{component.message}}</el-button>
          </div>
          <el-alert
            class="alert"
            :closable="false"
            title="使用说明"
            type="success"
            description="双击上方组件可以向布局区域添加组件">
          </el-alert>
        </div>
      </el-col>
      <el-col :span="3" class="edit-col">
        <div class="title">
          布局区域
        </div>
        <div class="edit-layout">
          <div class="component" :key="key" v-for="(component, key) in pageconfigList">
            <div>
              <el-button @click="handleSlectLayout(component)"><i class="el-icon-school"></i>{{component.message}}</el-button>
            </div>
            <div v-if="component.id === selectComponent.id">
              <el-button class="act" size="mini" type="success" @click="handleMoveUp(component)">
                <i class="el-icon-sort-up"></i>
              </el-button>
              <el-button class="act" size="mini" type="success" @click="handleMoveDown(component)">
                <i class="el-icon-sort-down"></i>
              </el-button>
              <el-button class="act" size="mini" type="danger" @click="handleDel(component)">
                <i class="el-icon-delete"></i>
              </el-button>
            </div>
          </div>
        </div>
        <el-alert
          class="alert"
          :closable="false"
          title="使用说明"
          type="success"
          description="1、可上下移动组件观察预览区域页面生成效果。2、点击可以修改组件配置中字段数据，通过提交数据看预览区域。">
        </el-alert>
      </el-col>
      <el-col :span="8" class="edit-col">
        <div class="preview">
          <el-button @click="handleRefresh">刷新</el-button>
          <div>
            预览区域
          </div>
          <el-button @click="handlePreview">预览</el-button>
        </div>
        <div class="iframe">
          <iframe id="iframe" :src="pageSrc"></iframe>
        </div>
      </el-col>
      <el-col :span="10" class="edit-col">
        <div class="title">
          配置区域
        </div>
        <div class="config-area">
          <el-tabs v-model="configType"  type="border-card">
            <el-tab-pane label="页面配置" name="page">
              <el-form :model="pageCommonData" class="demo-form-inline">
                <div :key="key" v-for="(config, key) in pageCommonConfig">
                    <el-form-item :label="config.message">
                      <el-input v-model="pageCommonData[config.name]" placeholder="请输入"></el-input>
                    </el-form-item>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="handlePageSubmit">提交页面配置数据</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="组件配置" name="components">
              <el-form :model="componentsDatas" class="demo-form-inline">
                <div :key="key" v-for="(config, key) in selectComponent.schema">
                    <el-form-item :label="config.label">
                      <!-- 后面可以扩展 -->
                      <el-input v-show="config.type === 'input'" v-model="componentsDatas[selectComponent.id][key]" placeholder="请输入"></el-input>
                    </el-form-item>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="handleComponentSubmit">提交组件配置数据</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import { cloneDeep } from 'lodash'
import { baseUrl } from '@/config'
export default {
  name: 'edit',
  data() {
    const baseHost = window.location.host.indexOf('lovebhs.xyz') != -1 ? 'http://lovebhs.xyz:3999': 'http://localhost:3000'
    return {
      // 页面链接
      pageSrc: `${baseHost}/templete?pageId=${this.$route.query.pageId}&pageType=preview`,
      // 页面版本id
      pageId: this.$route.query.pageId || 1,
      // 布局区域数据
      pageconfigList: [],
      // 组件区域组件
      componentList: [],
      // 配置区域-> 页面配置config
      pageCommonConfig: [],
      // 配置区域-> 页面配置data
      pageCommonData: {},
      // 目前选中的组件
      selectComponent: {},
      // 组件配置数据
      componentsDatas: {},
      // 配置区域 -> 页面配置 -> 类型 ( 页面 | 组件 )
      configType: 'page'
    }
  },
  components: {
  },
  methods: {
    // 获取组件区数据
    async getComponentList() {
      const res = await axios.get(`${baseUrl}/pageConfig/getPageConfList?pageId=${this.pageId}`)
      const componentList = res.data.data || []
      this.componentList = componentList
    },
    // 获取布局区数据
    async getPageCpDatas() {
      const res = await axios.get(`${baseUrl}/pageConfig/getPageCpDatas?pageId=${this.pageId}`)
      const pageconfigList = res.data.data || []
      this.pageconfigList = pageconfigList
    },
    // 获取配置区域页面配置config
    async getPageCommonConfig() {
      const res = await axios.get(`${baseUrl}/pageConfig/getPageCommonConfig?pageId=${this.pageId}`)
      const pageCommonConfig = res.data.data || {}
      this.pageCommonConfig = pageCommonConfig
    },
    // 获取全局页面唯独数据
    async getPageCommonData() {
      const res = await axios.get(`${baseUrl}/pageConfig/getPageCommonData?pageId=${this.pageId}`)
      this.pageCommonData = res.data.data || {}
    },
    // 获取组件区域数据
    async getComponentDatas() {
      const res = await axios.get(`${baseUrl}/pageConfig/getPageComponentDatas?pageId=${this.pageId}`)
      this.componentsDatas = res.data.data || {}
    },
    // 保存布局区数据
    async savePageCpDatas(params={}) {
      await axios.post(`${baseUrl}/pageConfig/savePageCpDatas?pageId=${this.pageId}`, {
        pageId: this.pageId,
        component: params
      })
      await this.getPageCpDatas()
      this.handleRefresh()
    },
    // 更新布局区数据
    async updatePageCpDatas(params={}) {
      await axios.put(`${baseUrl}/pageConfig/updatePageCpDatas?pageId=${this.pageId}`, {
        pageId: this.pageId,
        component: params
      })
      await this.getPageCpDatas()
      this.handleRefresh()
    },
    // 提交页面配置数据
    async handlePageSubmit() {
      await axios.put(`${baseUrl}/pageConfig/updatePageCommonData?pageId=${this.pageId}`, {
        pageId: this.pageId,
        data: this.pageCommonData
      })
      this.handleRefresh()
    },
    async handleComponentSubmit() {
      await axios.put(`${baseUrl}/pageConfig/updatePageComponentData?pageId=${this.pageId}`, {
        pageId: this.pageId,
        data: this.componentsDatas
      })
      this.handleRefresh()
    },
    // 刷新
    handleRefresh() {
      const iframe = document.getElementById('iframe');
      iframe.src = this.pageSrc
    },
    // 预览
    handlePreview() {
      window.open(this.pageSrc)
    },
    // 选择组件
    handleSlectComponent(component) {
      component.id = `pageId_${this.pageId}__${Math.floor(+Math.random()*1000)}`
      let copyConfigList = cloneDeep(this.pageconfigList)
      copyConfigList.push(component)
      if(!this.pageconfigList.length) {
        this.savePageCpDatas(copyConfigList)
      } else {
        this.updatePageCpDatas(copyConfigList)
      }
    },
    // 选择布局区组件
    handleSlectLayout(component) {
      this.configType = 'components'
      if(this.selectComponent.id === component.id) return
      let copyComponentsDatas = cloneDeep(this.componentsDatas)
      if(!copyComponentsDatas[component.id]) {
        copyComponentsDatas[component.id] = {}
        this.componentsDatas = copyComponentsDatas
      }
      this.selectComponent = component
    },
    // 上移
   async handleMoveUp(component) {
      let comIndex
      let copyConfigList = cloneDeep(this.pageconfigList)
      copyConfigList.find((config, key) => {
        if(config.id === component.id){
          comIndex = key
        }
      })
      if(!comIndex) return
      let middleArr = copyConfigList[comIndex-1]
      copyConfigList[comIndex-1] = copyConfigList[comIndex]
      copyConfigList[comIndex] = middleArr
      this.updatePageCpDatas(copyConfigList)
    },
    // 下移
    handleMoveDown(component) {
      let comIndex
      let copyConfigList = cloneDeep(this.pageconfigList)
      copyConfigList.find((config, key) => {
        if(config.id === component.id){
          comIndex = key
        }
      })
      if(comIndex >= copyConfigList.length - 1) return
      let middleArr = copyConfigList[comIndex+1]
      copyConfigList[comIndex+1] = copyConfigList[comIndex]
      copyConfigList[comIndex] = middleArr
      this.updatePageCpDatas(copyConfigList)
    },
    // 删除
    handleDel(component) {
      if(this.pageconfigList.length <= 1) {
        this.$message({
          type: 'error',
          message: '至少需要一个组件'
        })
        return
      }
      let comIndex
      let copyConfigList = cloneDeep(this.pageconfigList)
      copyConfigList.find((config, key) => {
        if(config.id === component.id){
          comIndex = key
        }
      })
      copyConfigList.splice(comIndex, 1)
      this.updatePageCpDatas(copyConfigList)
    }
  },
  watch: {},
  mounted() {
    this.getComponentList()
    this.getPageCpDatas()
    this.getPageCommonConfig()
    this.getPageCommonData()
    this.getComponentDatas()
  }
}
</script>

<style scoped>
.title {
  display: block;
  font-size: 1.17em;
  font-weight: bold;
  padding-bottom: 30px;
  text-align: center
}
.el-row {
  height: 100%;
}
.el-row {
  margin-left: 0!important;
}
.edit-col {
  border-right: 1px solid #00000020;
  padding: 20px;
  height: 100%;
}
.component {
  text-align: center;
  margin-bottom: 10px
}
.iframe {
  width: 375px;
  height: 667px;
  margin: 0 auto
}
.iframe > iframe {
  width: 100%;
  height: 100%;
}
.preview {
  display: flex;
  font-size: 1.17em;
  font-weight: bold;
  padding-bottom: 15px;
  align-items: center;
  justify-content: space-between
}
.act {
  padding: 5px;
  margin-top: 5px
}
.alert {
  margin-top: 0;
}
</style>