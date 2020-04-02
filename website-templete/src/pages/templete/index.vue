<template>
  <div class="templete">
    模版列表
    <div>
      {{getterTemplete}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    name: 'templete',
    components: {
    },
    computed: {
      ...mapGetters({
          'getterTemplete': 'getterTemplete',
      })
    },
    data() {
        return {
        };
    },
    methods: {
      ...mapActions({
          setTempleteData: 'setTempleteData'
      })
    },
    created() {
    },
    async mounted() {
      this.setTempleteData({
        data: 'templete22611'
      })
    }
};
</script>

<style scoped lang="stylus">
</style>