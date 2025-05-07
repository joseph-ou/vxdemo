<script>
  export default{
    name:'TaskLayout',
    data(){
      return{
        subActiveRouter:"Activity",

      }

    },

    watch:{
      $route:function (to) {
        this.subActiveRouter = to.$router.matched[2].name
      }
    },

    mounted() {
      //获取当前的所有路由
      this.subActiveRouter = this.$route.matched[2].name
    }


  }



</script>

<template>

  <div>
    <el-menu class="sub-menu" mode="horizontal"  :default-active="subActiveRouter" router>
      <el-menu-item  index="Activity" :route="{name:'ActivityList'}"><i class="el-icon-coin"></i>活动管理</el-menu-item>
      <el-menu-item index="Promo" :route="{name: 'Promo'}"><i class="el-icon-data-analysis"></i>推广</el-menu-item>
      <el-menu-item index="Stat" :route="{name:'Stat'}"><i class="el-icon-document"></i>数据统计</el-menu-item>
      <el-menu-item index="Fans" :route="{name:'Fans'}"><i class="el-icon-setting"></i>参与</el-menu-item>



    </el-menu>

    <router-view></router-view>

  </div>

</template>

<style>
.sub-menu  .el-menu-item{
  line-height: 40px;
  height: 40px;
  vertical-align: middle;
  font-size: 13px;
}

.sub-menu .el-menu-item i{
  margin-top: -5px;
}


</style>