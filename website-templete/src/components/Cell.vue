<template>
  <div class="Cell">
    <Cell v-bind="data"/>
  </div>
</template>

<script>
const {
  Cell, CellCss
} = require('@/ssrVar')
export default {
  name: 'x-Cell',
  props: {
    data: {
      type: Object,
      defalut: {}
    }
  },
  components: {
    Cell
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
