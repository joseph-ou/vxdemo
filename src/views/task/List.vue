<script>
  export default {
    name: "TaskList",
    data(){
      return {
        searchForm:{
          title:'',
          category:'',
          actstatus:'',

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
        currentDate:new Date(),


      }

    }


  }
</script>

<template>
  <div style="padding: 20px;">

    <router-link to="create">
      <el-button type="primary" size="small" ><i class="el-icon-circle-plus-outline"></i>新建活动</el-button>
    </router-link>

    <el-row style="margin-top: 24px">
      <el-card class="box-card">
        <el-form  :inline="true"   class="demo-form-inline"  size="small"  :model="searchForm" ref="searchForm" >

          <el-form-item label="活动名称" prop="title">
            <el-input  v-model="searchForm.title" placeholder="活动名称"   ></el-input>
          </el-form-item>

          <el-form-item  label="公众号" prop="catagory">

            <el-select  v-model="searchForm.catagory" placeholder="活动类型">
              <!--          <el-option label="区域1" value="shanghai"></el-option>
                        <el-option label="区域2" value="guangzhou"></el-option>-->
              <el-option  v-for="item in catagoryoptions" :key="item.value" :label="item.label"  :value="item.value" ></el-option>

            </el-select>

          </el-form-item>

          <el-form-item label="活动状态" prop="status">
            <el-select v-model="searchForm.actstatus">
              <el-option value="1">正在进行</el-option>
              <el-option value="2">已取消</el-option>
              <el-option value="0">未开始</el-option>
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

    </el-row>

    <el-row :gutter="20" style="padding: 10px"><!--相当于卡片间距为20px-->
      <!--el-col相当于bootstrap的分割 :span表示分割的份数总共24份 :offset相当于偏移多少      -->
      <!--      <el-col  span="8" v-for="(o,index) in 2" :key="o" :offset="index>0?2:0">-->
      <el-col  style="width: 240px;margin-bottom: 10px" v-for="o in 12" :key="o" >
        <el-card :body-style="{padding:'0px'}">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" class="img">
          <div style="padding: 14px">
            <span>麦辣鸡腿堡</span>

            <el-row style="padding: 5px">
              <el-button icon="el-icon-search" size="mini" circle></el-button>
              <el-button icon="el-icon-edit" size="mini" circle></el-button>
              <el-button icon="el-icon-check" size="mini" circle></el-button>
              <el-button icon="el-icon-message" size="mini" circle></el-button>
              <el-button icon="el-icon-delete" size="mini" circle></el-button>

            </el-row>

          </div>

        </el-card>

      </el-col>

    </el-row>






  </div>
</template>

<style scoped>


.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}


</style>