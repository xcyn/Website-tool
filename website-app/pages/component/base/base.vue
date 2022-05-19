<template>
  <div class="Base" v-bind:style="baseStyle">
	  123123123
<!--    <component
      v-if="componentData"
      :key="item.id"
      :is="item.name"
      :data="componentData"
    >
    </component> -->
  </div>
</template>

<script>
import Button from '../button/button.vue'
import Cell from '../Cell/Cell.vue'
import Image from '../image/image.vue'
import NavBar from '../NavBar/NavBar.vue'
console.log('base.vue.......')
export default {
  name: 'x-Base',
  props: {
    item: {
      type: Object,
      defalut: {}
    },
    componentData: {
      type: Object,
      defalut: {}
    },
  },
  computed: {
    baseStyle: function() {
      let componentData = this.componentData
      if(componentData && componentData.baseStyle) {
        if(typeof componentData.baseStyle === "string") {
          try {
            componentData = JSON.parse(componentData.baseStyle)
            return componentData
          } catch(err) {
            return {}
          }
        } else {
          return {}
        }
      } else {
        return {}
      }
    }
  },
  components: {
    'x-Button': Button,
    'x-Cell': Cell,
    'x-Image': Image,
    'x-NavBar': NavBar
  },
  methods: {
	  async getMockData() {
		  return {"status":200,"errmsg":"请求数据成功","data":[{"id":"pageId_15448915__360","name":"x-NavBar","message":"导航组件","schema":{"title":{"type":"input","label":"标题"},"leftText":{"type":"input","label":"标题左侧文案"},"rightText":{"type":"input","label":"标题右侧文案"},"baseStyle":{"type":"input","label":"容器css样式"}}},{"id":"pageId_15448915__424","name":"x-Cell","message":"单元格组件","schema":{"title":{"type":"input","label":"单元格组件标题"},"value":{"type":"input","label":"单元格组件右侧文案"},"baseStyle":{"type":"input","label":"容器css样式"},"size":{"type":"input","label":"large(支持 large、small)"},"label":{"type":"input","label":"单元格组件描述信息"}}},{"id":"pageId_15448915__27","name":"x-Cell","message":"单元格组件","schema":{"title":{"type":"input","label":"单元格组件标题"},"value":{"type":"input","label":"单元格组件右侧文案"},"baseStyle":{"type":"input","label":"容器css样式"},"size":{"type":"input","label":"large(支持 large、small)"},"label":{"type":"input","label":"单元格组件描述信息"}}},{"id":"pageId_15448915__775","name":"x-Button","message":"按钮组件","schema":{"type":{"type":"input","label":"按钮类型(支持default、primary、info、warning、danger五种类型)"},"baseStyle":{"type":"input","label":"容器css样式"},"style":{"type":"input","label":"按钮样式"},"value":{"type":"input","label":"按钮文案"}}}]}
	  }
  },
  mounted() {
	  console.log('123123123')
	// let list = this.getMockData()
	// console.log('list, ', list)
  }
}
</script>

<style scoped>
</style>
