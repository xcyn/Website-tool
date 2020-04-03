<template>
  <div class="Base" v-bind:style="componentData && componentData.style || {}">
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
import CellGroup from '@/components/CellGroup'
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
  components: {
    'x-Button': Button,
    'x-CellGroup': CellGroup,
    'x-Image': Image,
    'x-NavBar': NavBar
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
