<template>
  <div class="Button">
    <Button v-bind="data">{{data && data.value}}</Button>
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
  components: {
    Button
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
