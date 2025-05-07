<script>
  export default{
    name:'MsgLayout',

    data() {
      return {
        subActiveRouter: '',
      }
    },

    mounted() {
      this.subActiveRouter = this.$route.matched[2].name
    }

  }

</script>

<template>

  <div>
    <el-menu class="sub-menu" mode="horizontal" router :default-active="subActiveRouter">
      <el-menu-item index="Push" :route="{name:'Push'}"><i class="el-icon-coin"></i>消息推送</el-menu-item>
      <el-menu-item index="Sop" :route="{name:'Sop'}"><i class="el-icon-data-analysis"></i>sop计划</el-menu-item>



    </el-menu>

    <router-view></router-view>
  </div>

</template>

<style >
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