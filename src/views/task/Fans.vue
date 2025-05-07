<script>
export  default {
  name: "Fans-list",
  data() {
    return {
      keySearch:'',
      activeName:'first',
      searchForm: {
        currenttask: "3",
        spreadcode: ""
      },
      categoryOptions: [
        {
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],

      taskOptions: [
        {
          value: '1',
          label: '任务1'
        }, {
          value: '2',
          label: '任务2'
        }, {
          value: '3',
          label: '任务3'
        }, {
          value: '4',
          label: '任务4'
        }, {
          value: '5',
          label: '任务5'
        }],



      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          status:1
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          status:2
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          status:1
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          status:1
        }],
      page: {
        totalCount: 10000,
        perPageSize: 20
      },
      dialogFormVisible: false,
      addForm: {
        x1: "",
        x2: ""
      },
      dialogVisible: false,
      checkDatalist:[],
    }
  },

  mounted() {
    // 默认多选项选中第一个
    this.$refs.myTable.toggleRowSelection(this.tableData[1])
  },
  methods: {
    clickSearch() {
      console.log(this.searchForm);
    },
    resetSearchForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    confirmDelete(row) {
      console.log("确定删除", row);
    },
    handleCurrentChange(page) {
      console.log("想要查看：", page);
    },
    clickAddDialog() {
      this.dialogFormVisible = true;
    },

    handleTabClick(row){
      console.log(row);
    },

    handleSelectionChange(valueList){
      console.log(valueList);
      //将选中的数据存储到checkdatalist
      this.checkDatalist = valueList;

    },

    selectOne(){
      this.$refs.myTable.toggleRowSelection(this.tableData[2]);
    },

    addBlackList(){
      //获取选中的数据
      console.log('移入屏蔽名单',this.checkDatalist);

    },

  }

}
</script>

<template>
  <div>
    <div style="padding: 20px;">
      <el-card class="box-card">
        <el-form :inline="true" class="demo-form-inline" size="small" :model="searchForm" ref="searchForm">

          <el-form-item  label="当前任务" prop="currenttask" style="margin-bottom: 0;">
            <el-select placeholder="当前任务" v-model="searchForm.currenttask">
              <el-option v-for="item in taskOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>

            </el-select>

          </el-form-item>


          <el-form-item label="推广码" prop="spreadcode"  style="margin-bottom: 0;">
            <el-select placeholder="推广码" v-model="searchForm.spreadcode">
              <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label"
                         :value="item.value"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item  style="margin-bottom: 0;">
            <el-button size="small" type="primary" @click="clickSearch">筛选</el-button>
            <el-button size="small" @click="resetSearchForm('searchForm')">重置</el-button>
          </el-form-item>

        </el-form>

        <el-button @click="selectOne">选择第三个</el-button>

      </el-card>

      <el-row style="margin-top: 25px">

        <el-row  justify="end" type="flex" style="float: right;z-index: 1"><!--z-index处理浮动造成的按钮无法在上面图层-->
          <el-input
            style="margin-right: 10px" size="small"  placeholder="搜索框" suffix-icon="el-icon-search" v-model="keySearch"></el-input>

          <el-button size="small" type="primary">导出</el-button>
          <el-button size="small" type="warning" @click="addBlackList">移入屏蔽名单</el-button>
          <el-button size="small" type="info">移出屏蔽名单</el-button>
        </el-row>

        <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
          <el-tab-pane label="参与用户管理" name="first">

            <div>
              <el-table  ref="myTable" :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column  type="selection" width="55px"></el-table-column>
                <el-table-column prop="date" label="日期"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="状态">
                  <template slot-scope="scope">
                    <el-tag v-if="scope.row.status === 1" type="success">成功</el-tag>
                    <el-tag v-else type="danger">失败</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>

                    <el-popconfirm title="这是一段内容确定删除吗？" @confirm="confirmDelete(scope.row)">
                      <el-button slot="reference" type="text" size="small">删除</el-button>
                    </el-popconfirm>
                  </template>
                </el-table-column>
              </el-table>

              <el-row type="flex" justify="end" style="margin-top: 30px">
                <el-pagination
                    :total="page.totalCount"
                    :page-size="page.perPageSize"
                    background
                    layout="prev, pager, next,jumper"
                    @current-change="handleCurrentChange"
                >
                </el-pagination>
              </el-row>
            </div>

          </el-tab-pane>


          <el-tab-pane label="屏蔽名单" name="second">

            <div>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="日期"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="状态">
                  <template slot-scope="scope">
                    <el-tag v-if="scope.row.status === 1" type="success">成功</el-tag>
                    <el-tag v-else type="danger">失败</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>

                    <el-popconfirm title="这是一段内容确定删除吗？" @confirm="confirmDelete(scope.row)">
                      <el-button slot="reference" type="text" size="small">删除</el-button>
                    </el-popconfirm>
                  </template>
                </el-table-column>
              </el-table>

              <el-row type="flex" justify="end" style="margin-top: 30px">
                <el-pagination
                    :total="page.totalCount"
                    :page-size="page.perPageSize"
                    background
                    layout="prev, pager, next,jumper"
                    @current-change="handleCurrentChange"
                >
                </el-pagination>
              </el-row>

            </div>


          </el-tab-pane>



        </el-tabs>

      </el-row>




      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form label-position="left" label-width="80px" :model="addForm">
          <el-form-item label="活动名称" prop="x1">
            <el-input autocomplete="off" v-model="addForm.x1"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="x2">
            <el-select placeholder="请选择活动区域" v-model="addForm.x2">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
      </el-dialog>
    </div>

  </div>

</template>

<style scoped>

</style>