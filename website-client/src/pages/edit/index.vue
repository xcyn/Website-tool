<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="3" class="edit-col">
        <div class="title">
          组件区
        </div>
        <div class="componentList">
          <div class="component" :key="key" v-for="(component, key) in componentList">
            <el-button><i class="el-icon-star-on"></i>{{component.message}}</el-button>
          </div>
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
            <div v-if="component.id === selectLayoutId">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import { cloneDeep } from 'lodash'
const baseUrl = 'http://localhost:7013'
export default {
  name: 'edit',
  data() {
    return {
      pageSrc: 'http://localhost:3000/templete',
      pageId: this.$route.query.pageId || 1,
      pageconfigList: [],
      componentList: [],
      selectLayoutId: 0
    }
  },
  components: {
  },
  methods: {
    async getComponentList() {
      const res = await axios.get(`${baseUrl}/pageConfig/getPageComponentList?pageId=${this.pageId}`)
      const componentList = res.data.data || []
      this.componentList = componentList
    },
    async getPageconfigList() {
      const res = await axios.get(`${baseUrl}/pageConfig/getPageconfigList?pageId=${this.pageId}`)
      const pageconfigList = res.data.data || []
      this.pageconfigList = pageconfigList
    },
    async savePageconfigList(params={}) {
      const res = await axios.post(`${baseUrl}/pageConfig/savePageconfigList?pageId=${this.pageId}`, {
        pageId: 1,
        config: params
      })
      return res
    },
    async updatePageconfigList(params={}) {
      await axios.put(`${baseUrl}/pageConfig/updatePageconfigList?pageId=${this.pageId}`, {
        pageId: 1,
        config: params
      })
      await this.getPageconfigList()
      this.handleRefresh()
    },
    handleRefresh() {
      const iframe = document.getElementById('iframe');
      iframe.src = this.pageSrc
    },
    handlePreview() {
      window.open(this.pageSrc)
    },
    handleSlectLayout(component) {
      if(this.selectLayoutId === component.id) return
      this.selectLayoutId = component.id
    },
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
      this.updatePageconfigList(copyConfigList)
    },
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
      this.updatePageconfigList(copyConfigList)
    },
    handleDel(component) {
      console.log('component', component)
    }
  },
  mounted() {
    this.getComponentList()
    this.getPageconfigList()
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
</style>