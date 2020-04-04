<template>
  <div class="templete">
    <div>
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
const baseUrl = 'http://localhost:7013'
export default {
    name: 'templete',
    components: {
    },
    computed: {
      ...mapGetters({
          'getterPageInfo': 'getterPageInfo',
          'getterConfigList': 'getterConfigList',
          'getterComponentDatas': 'getterComponentDatas'
      })
    },
    data() {
        return {
          // 用于管控版本
          pageId: this.$route.query.pageId || 1
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
    },
    created() {
    },
    async mounted() {
      console.log('getterComponentDatas', this.getterComponentDatas)
      document.body.style.backgroundColor = `rgba(${this.getterPageInfo.backgroundColor})`
      document.title = this.getterPageInfo.title
    }
};
</script>

<style scoped lang="stylus">
</style>