<template>
  <div class="Image">
    <my-Image :width="data.width" :height="data.height" :src="data.src"/>
  </div>
</template>

<script>
const { 
  Image, ImageCss
} = require('@/ssrVar')
export default {
  name: 'x-Image',
  props: {
    data: {
      type: Object,
      defalut: {}
    },
  },
  components: {
    'my-Image': Image
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
