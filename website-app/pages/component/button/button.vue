<template>
  <div class="Button">
    <van-button
	class="my-button"
	:type="data.type && data.type.value"
	:style="{
		width: BtnStyle.width || '100%',
		marginTop: BtnStyle.marginTop || '0',
		marginLeft: BtnStyle.marginLeft || 'auto',
		marginRight: BtnStyle.marginRight || 'auto',
		textAlign: BtnStyle.textAlign || 'left'
	}"
	>
		{{data.value && data.value.value}}
	</van-button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
	  return {
			 BtnStyle: {
			  }
	}
  },
  props: {
    data: {
      type: [Object, String],
      defalut: () => {
        return {}
      }
    }
  },
  computed: {
  },
  components: {
  },
  mounted() {
	  let style = this.data.style && this.data.style.value;
	  console.log('style', style, this.data)
	  if(style) {
	    try {
	      style = JSON.parse(style)
		  let baseStyle = this.data.baseStyle && this.data.baseStyle.value;
		  if(baseStyle) {
			  try {
				  baseStyle = JSON.parse(baseStyle)
				  style = Object.assign(style, baseStyle)
			  } catch(err) {
				  style = style
			  }
		  }
		  console.log('123123123', style);
	    } catch(err) {
	      style =  {}
	    }
	  } else {
	    style =  {}
	  }
	  this.BtnStyle = style
	  setTimeout(() => {
		  this.$forceUpdate()
	  },500)
	  console.log('this.BtnStyle', this.BtnStyle)
  }
}
</script>

<style>
	.my-button /deep/ button {
		width: 100% !important;
	}
</style>
