<template>
  <div class="templete">
    <div class="hidePage" v-if="!showPage">
      <h3>页面还没有发布.....</h3>
    </div>
    <div v-if="showPage">
      <xcy-page
        :configList="getterConfigList"
        :componentDatas="getterComponentDatas"
      ></xcy-page>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
const baseUrl = 'http://127.0.0.1:7013'
export default {
    name: 'templete',
    components: {
    },
    computed: {
      ...mapGetters({
          'getterPageInfo': 'getterPageInfo',
          'getterConfigList': 'getterConfigList',
          'getterComponentDatas': 'getterComponentDatas'
      }),
      showPage: function () {
        return this.pageStatus || this.$route.query.pageType === 'preview'
      }
    },
    data() {
        return {
          // 用于管控版本
          pageId: this.$route.query.pageId,
          pageStatus: 0
        };
    },
    serverPrefetch() {
      const getPageInfo = this.getPageInfo()
      const getConfigList = this.getConfigList()
      const getComponentDatas = this.getComponentDatas()
      return Promise.all([getPageInfo, getConfigList, getComponentDatas])
    },
    methods: {
      ...mapMutations([
        'SET_PAGEINFO',
        'SET_CONFIGLIST',
        'SET_COMPONENTDATAS'
      ]),
      async getPageInfo() {
        const res = await axios.get(`${baseUrl}/pageConfig/getPageCommonData?pageId=${this.pageId}`)
        const pageInfo = res.data.data || []
        this.SET_PAGEINFO(pageInfo)
      },
      async getConfigList() {
        const res = await axios.get(`${baseUrl}/pageConfig/getPageCpDatas?pageId=${this.pageId}`)
        const configList = res.data.data || []
        this.SET_CONFIGLIST(configList)
      },
      async getComponentDatas() {
        const res = await axios.get(`${baseUrl}/pageConfig/getPageComponentDatas?pageId=${this.pageId}`)
        const componentDatas = res.data.data || {}
        this.SET_COMPONENTDATAS(componentDatas)
      },
      async getpageStatus() {
        const res = await axios.get(`${baseUrl}/pageConfig/getPageOne?pageId=${this.pageId}`)
        this.pageStatus = res.data.data.status
      }
    },
    created() {
    },
    async mounted() {
      if(JSON.stringify(this.getterPageInfo) === '{}') {
        this.getPageInfo()
      }
      if(JSON.stringify(this.getterConfigList) === JSON.stringify([])) {
        this.getConfigList()
      }
      if(JSON.stringify(this.getterComponentDatas) === '{}') {
        this.getComponentDatas()
      }
      this.getpageStatus()
      this.$nextTick(() => {
        document.body.style.backgroundColor = `rgba(${this.getterPageInfo.backgroundColor})`
        document.title = this.getterPageInfo.title
      })
    }
};
</script>

<style scoped>
</style>