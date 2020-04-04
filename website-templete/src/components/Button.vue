<template>
  <div class="Button">
    <Button v-bind="data" :style="BtnStyle">{{data && data.value}}</Button>
  </div>
</template>

<script>
const { 
  Button, ButtonCss
} = require('@/ssrVar')
export default {
  name: 'x-Button',
  props: {
    data: {
      type: [Object, String],
      defalut: () => {
        return {}
      }
    }
  },
  computed: {
    BtnStyle: function() {
      let style = this.data.style
      if(style) {
        try {
          style = JSON.parse(style)
          return style
        } catch(err) {
          return {}
        }
      } else {
        return {}
      }
    }
  },
  components: {
    Button
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
