<script>
  export default {
    name:'LayOut',
    data(){
      return {
        rootActiveRouter: ''
      }
    },

    mounted() {
      //获取当前所有路由
      this.rootActiveRouter = this.$route.matched[1].name

    },

    computed:{
      username(){
        return this.$store.state.username
      },
    },
  }
</script>

<template>
<div>
<!--router默认生成router-link  default-active=2默认激活index=2的标签 -->
  <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router :default-active="rootActiveRouter">
      <el-menu-item index="1" >媒体宝系统</el-menu-item>
      <el-menu-item index="Test" :route="{name:'Test'}">test</el-menu-item>
      <el-menu-item index="Task" :route="{name:'ActivityList'}">任务应用</el-menu-item>
      <el-menu-item index="Msg" :route="{name:'Push'}">消息</el-menu-item>
      <el-menu-item index="Auth" :route="{name: 'Auth'}">授权</el-menu-item>


     <el-submenu index="5" style="float: right">
        <template slot="title" >{{username}}</template>
      <el-menu-item index="5-1">选项1</el-menu-item>
      <el-menu-item index="5-2">选项2</el-menu-item>
      <el-menu-item index="5-3">选项3</el-menu-item>

    </el-submenu>

  </el-menu>


  <router-view></router-view>

</div>


</template>

<style scoped>

</style>