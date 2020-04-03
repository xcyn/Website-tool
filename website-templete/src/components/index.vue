<template>
  <div class="xcyPage">
    <div class="x-base" :key="key" v-for="(item, key) in configList">
      <x-Base
        :item="item"
        :componentData="componentDatas[item.id]"
      ></x-Base>
    </div>
  </div>
</template>

<script>
import Base from '@/components/Base'
export default {
    name: 'xcyPage',
    components: {
      'x-Base': !isNodeEnv && Base || undefined
    },
    computed: {
    },
    props: {
      configList: {
        type: Array,
        defalut: []
      },
      componentDatas: {
        type: Object,
        defalut: {}
      },
    },
    data() {
        return {
        };
    },
    methods: {
    },
    created() {
    },
    async mounted() {
    }
};
</script>

<style scoped lang="stylus">
</style>