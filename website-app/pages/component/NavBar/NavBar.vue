<template>
  <div>
   <van-nav-bar
	  class="van-nav-bar-c"
      :title="data.title && data.title.value || ''"
      :left-text="data.leftText && data.leftText.value || ''"
      :right-text="data.rightText && data.rightText.value || ''"
    />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  options: { styleIsolation: 'shared' },//解决/deep/不生效**
  props: {
    data: {
      type: Object,
      defalut: {}
    },
  },
  components: {
  },
  mounted() {
  }
}
</script>

<style>
	.van-nav-bar-c {
		padding-top: 0!important;
	}
	.van-nav-bar-c /deep/ .van-nav-bar {
		padding-top: 0!important;
	}
</style>
