<template>
	<van-cell
		class="my-cell"
		:title="data.title&&data.title.value" 
		:value="data.value&&data.value.value" 
		:label="data.lable&&data.lable.value" 
	/>
</template>

<script>
export default {
  name: 'Cell',
  options: { styleIsolation: 'shared' },//解决/deep/不生效**
  props: {
    data: {
      type: Object,
      defalut: {}
    }
  },
  components: {
  },
  mounted() {
  }
}
</script>

<style scoped>
	.my-cell /deep/ .van-cell {
		display: block;
		overflow: hidden;
	}
	.my-cell /deep/ .van-cell .van-cell__title {
		float: left;
	}
	.my-cell /deep/ .van-cell .van-cell__value {
		float: right;
	}
</style>
