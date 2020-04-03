<template>
  <div class="CellGroup">
    <CellGroup>
      <Cell v-bind="item" :key="key" v-for="(item, key) in data.list"/>
    </CellGroup>
  </div>
</template>

<script>
const {
  Cell, CellCss,
  CellGroup, CellGroupCss
} = require('@/ssrVar')
export default {
  name: 'x-CellGroup',
  props: {
    data: {
      type: Object,
      defalut: {}
    }
  },
  components: {
    Cell,
    CellGroup
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
