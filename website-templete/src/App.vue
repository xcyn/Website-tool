<template>
  <div id="app">
    {{title}}
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: '1111211',
    }
  },
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0
}
</style>
