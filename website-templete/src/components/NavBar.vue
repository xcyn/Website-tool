<template>
  <div class="Image">
   <NavBar
      :title="data.title"
      :left-text="data.leftText"
      :right-text="data.rightText"
    />
  </div>
</template>

<script>
const { 
  NavBar, NavBarCss
} = require('@/ssrVar')
export default {
  name: 'x-NavBar',
  props: {
    data: {
      type: Object,
      defalut: {}
    },
  },
  components: {
    'NavBar': NavBar
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
