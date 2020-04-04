<template>
  <div class="Base" v-bind:style="baseStyle">
    <component
      v-if="componentData"
      :key="item.id"
      :is="item.name"
      :data="componentData"
    >
    </component>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Cell from '@/components/Cell'
import Image from '@/components/Image'
import NavBar from '@/components/NavBar'
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
  mounted() {
  }
}
</script>

<style scoped>
</style>
