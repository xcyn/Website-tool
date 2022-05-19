<template>
  <div class="Image">
    <van-image
	:width="BtnStyle.width || '200px'"
	:height="BtnStyle.height || '200px'"
	:style="{
		marginTop: BtnStyle.marginTop || '0',
		marginBottom: BtnStyle.marginBottom || '0',
		marginLeft: BtnStyle.marginLeft || 'auto',
		marginRight: BtnStyle.marginRight || 'auto',
		textAlign: BtnStyle.textAlign || 'left'
	}"
	:src="data.src.value"/>
  </div>
</template>

<script>
export default {
  name: 'Image',
  data() {
  	  return {
  			 BtnStyle: {
  			  }
  	}
  },
  props: {
    data: {
      type: Object,
      defalut: {}
    },
  },
  components: {
  },
  mounted() {
	  let style = this.data.baseStyle && this.data.baseStyle.value;
	  if(style) {
	    try {
	      style = JSON.parse(style)
	    } catch(err) {
	      style =  {}
	    }
	  } else {
	    style =  {}
	  }
	  this.BtnStyle = style
	  console.log('image---', this.BtnStyle)
	  setTimeout(() => {
	  		  this.$forceUpdate()
	  },500)
	  console.log('dtat', this.data)
  }
}
</script>

<style scoped>
</style>
