<script>
export default {
  name: 'PuSh',
  data(){
    return {
      searchForm:{
        title:'',
        catagory:'',
        datevalue:'',
      },

      formInline:{
        user:'',
        region:'',
      },

      catagoryoptions:[
        {
          value:'1',
          label:'活动1',
        },

        {
          value:'2',
          label:'活动2',
        },

        {
          value:'3',
          label:'活动3',
        },

      ],
      tableData: [
      {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-08',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-06',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }],

      page:{
        totalcount:1100,
        pageSize:10,
      },


      dialogFormVisible:false,
      dialogVisible:false,

      addForm:{
        t1:'',
        t2:'',
      },
    }
  },



  methods: {
    clickSearch(){
        console.log(this.searchForm);
    },

    reset(formName){
      // this.$refs.searchForm.resetFields();
      // console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();



    },

    handleClick(row){
      this.dialogVisible = true;
      console.log(row);
    },

    delconfirm(row){
      console.log('确定删除',row);

    },

    handleCurrentChange(page){
      console.log('page:',page);
    },

    addClick(){
      this.dialogFormVisible = true;
    },

    handleClose(){
      console.log('close');
    },




  },
}

</script>

<template>
<div style="padding: 15px;">

  <el-card class="box-card">
    <el-form  :inline="true"   class="demo-form-inline"  size="small"  :model="searchForm" ref="searchForm" >

      <el-form-item label="标题" prop="title">
        <el-input  v-model="searchForm.title" placeholder="标题"   ></el-input>
      </el-form-item>

      <el-form-item  label="活动类型" prop="catagory">

        <el-select  v-model="searchForm.catagory" placeholder="活动类型">
<!--          <el-option label="区域1" value="shanghai"></el-option>
          <el-option label="区域2" value="guangzhou"></el-option>-->
          <el-option  v-for="item in catagoryoptions" :key="item.value" :label="item.label"  :value="item.value" ></el-option>

        </el-select>

      </el-form-item>

      <el-form-item label="推送时间" prop="datevalue">
          <el-date-picker
            v-model="searchForm.datevalue"
            type="datetimerange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :default-time="['00:00:00']"

          ></el-date-picker>

      </el-form-item>

    </el-form>

    <el-row   style="{margin-top:5px}" type="flex" justify="center" >
      <el-button size="small" type="primary" @click="clickSearch">筛选</el-button>
      <el-button size="small" type="info" @click="reset('searchForm')">重置</el-button>

    </el-row>



  </el-card>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span><i class="el-icon-s-grid"></i>消息列表</span>
      <el-button style="float: right" type="primary" size="small" @click="addClick"><i class="el-icon-circle-plus-outline"></i> 操作按钮</el-button>

    </div>

<!--    <div v-for="i in 4" :key="i" class="text item">-->
<!--      {{"列表内容"+i}}-->
<!--    </div>-->

    <div >
      <el-table :data="tableData" border style="width: 100%"> >
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>

            <!--气泡删除框    	点击确认按钮时触发@confirm 点击取消时触发@cancel        -->
            <el-popconfirm title="确认该操作吗?"  @confirm="delconfirm(scope.row)">
              <el-button slot="reference" size="small" type="text" >删除</el-button>
            </el-popconfirm>

          </template>
        </el-table-column>



      </el-table>

    </div>




  </el-card>

  <el-row type="flex" justify="end" style="margin-top: 12px">
    <el-pagination
      background
      layout="prev,pager,next,jumper"
      :total="page.totalcount"
      :page-size="page.pageSize"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </el-row>


  <!--弹窗 组件 -->
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <!--要绑定表单的:model数据 ref和prop    -->
    <el-form label-position="left" label-width="80px" :model="addForm" ref="addForm">
      <el-form-item label="活动名称" prop="t1">
        <el-input autocomplete="off" v-model="addForm.t1"></el-input>
      </el-form-item>

      <el-form-item label="活动区域" prop="t2">
        <el-select placeholder="请选择活动区域" v-model="addForm.t2">
          <el-option label="区域1" value="shanghai"></el-option>
          <el-option label="区域2" value="guangzhou"></el-option>

        </el-select>

      </el-form-item>


    </el-form>

    <!--slot（插槽），简言之就是在组件添加一个占位的空间，在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动替换组件模板中    -->
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible=false">取消</el-button>
      <el-button type="primary" @click="dialogFormVisible=false">确定</el-button>

    </div>

  </el-dialog>

  <el-dialog  title="查看信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <span>用户信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible=false">取消</el-button>
      <el-button type="primary"  @click="dialogVisible=false">确定</el-button>
    </span>

  </el-dialog>

</div>
</template>

<style>

</style>