<template>
  <div id="app">
    <el-header class="header">
      <span>建站工具</span>
    </el-header>
    <el-container class="container" :style="{height: height}">
      <el-aside width="120px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path">
          <router-link :to="{ path: '/pageList'}" >
            <el-menu-item index="/pageList">页面管理</el-menu-item>
          </router-link>
          <router-link :to="{ path: '/edit'}" >
            <el-menu-item index="/edit">页面编辑</el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      height: `${self.innerHeight - 60}px`
    }
  },
  components: {
  },
  mounted() {
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  display: flex;
  border: 1px solid #eee;
}
.content {
  display: flex;
  flex-direction: column
}

.el-header {
  background-color: #409eff;
  color: #fff;
  font-size: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-aside {
  color: #333;
}
.el-main {
  padding: 0
}
.el-main div {
  height: 100%;
}

a {
  text-decoration: none
}
</style>
