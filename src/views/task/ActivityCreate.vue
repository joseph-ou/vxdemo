<script>


  export default {
    name: 'ActivityCreate',
    data(){
      return {
        activeName:'second',
      }
    },

    created() {
      /*组件加载时11执行*/
      const loading=this.$loading({
        lock:true,
        text:'Loading...',
        spinner:'',
        background:'rgba(0,0,0,0)',

      });

      setTimeout(()=>{
        loading.close();

      }, 1000);

    },

    methods: {
      handleClick(tab,event){
        console.log(tab,event);
      }
    },

  }

</script>

<template>
  <div style="padding: 10px">
    <el-row type="flex" justify="end" >
      <el-button type="success"><i class="el-icon-setting"></i> 保存</el-button>
    </el-row>

    <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="forth">定时任务补偿</el-tab-pane>


    </el-tabs>
  </div>

</template>

<style scoped>

</style>