<script>
export default{
  name: 'LoginForm',
  data:function () {

    return {
      tabSelected:0,/*默认等于0*/
      tabList:['密码登录','短信登录'],
      userinfo:{
        username:'',
        password:'',
      },
      smsinfo:{
        phone:'',
        code:'',
      },
      /*表单验证*/
      userRules:{
        username:[
          {required:true,message:'请输入用户名或手机',trigger:'blur'},/*trigger触发方式*/
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
        ],

      },
      btnDisable:false,
      btnSmsText:'获取验证码',

      smsRules:{
        phone:[
          {required:true,message:'请输入手机号',trigger:'blur'},/*trigger触发方式*/
          {pattern:/^1[3456789]\d{9}$/,message:'请输入正确的手机号',trigger:'blur'}
        ],
        code:[
          {required:true,message:'请输入验证码',trigger:'blur'},
        ],

      },

    }
  },

  methods:{
    /*转换登录方式*/
    changeTab(index){
      this.tabSelected = index;
    },

    /*执行账号表单验证*/
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    /*执行短信表单验证*/
    sendSmsCode() {
      this.$refs.smsinfo.validateField('phone', (errorMessage) => {
        if (errorMessage) {
          return false
        }else{
          //验证通过发送验证码
          //禁用按钮
          this.btnDisable = true;

          //设置定时
          let txttime = 60;
          let interval=window.setInterval(()=>{
            txttime-=1;
            this.btnSmsText=`${txttime}秒后重发`

            if(txttime<=0){
              this.btnDisable = false;
              this.btnSmsText='获取验证码'

              //关闭定时器
              window.clearInterval(interval)
            }
          }, 1000);

        }
      })
    },



    /*重新更新表单*/
    // resetForm(formName){
    //   this.$refs[formName].resetFields();
    // }










}


  }
</script>

<template>
  <div class="main">
    <div class="loginBox">

      <div class="tabBoxSwitch">
        <ul class="tabBoxSwitchUl">
          <li v-for="(item,index) in tabList" :key="index"  v-on:click="changeTab(index)" v-bind:class="tabSelected===index ? 'tab-active':'' ">
            {{item}}
          </li>
<!--          <li class="tab-active">密码登录</li>-->
<!--          <li>免密登录</li>-->
        </ul>
      </div>

      <div v-show="tabSelected===0">
<!--        <el-form label-width="60px" label-position="left">-->
<!--在 Vue.js 中，:rules 指令用于定义表单验证规则。在你的代码中，:rules="userRules" 将验证规则绑定到 userRules 对象。这些规则用于验证表单项的输入是否符合特定的条件，比如是否为空、格式是否正确等。        -->
        <el-form :model="userinfo" :rules="userRules" ref="userinfo"><!--在 Vue.js 中，:model 指令用于将表单数据绑定到组件的数据对象。在你的代码中，:model="userinfo" 将表单数据绑定到组件的数据对象 userinfo。这意味着对表单输入的任何更改都会自动更新 userinfo 对象 ref-->
          <el-form-item prop="username" style="margin-top: 26px"><!--prop显示表单验证对应的错误-->
            <el-input v-model="userinfo.username" placeholder="用户名或手机"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input v-model="userinfo.password" placeholder="密码" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="info"   size="small">创 建</el-button>
            <el-button type="primary"  @click="submitForm('userinfo')" size="small">登 录</el-button>
          </el-form-item>


        </el-form>
      </div>

      <div v-show="tabSelected===1">
        <el-form  :model="smsinfo" :rules="smsRules" ref="smsinfo"><!--ref-->
          <el-form-item prop="phone" style="margin-top: 26px">
            <el-input  v-model="smsinfo.phone" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code" >
<!--flex布局-->
            <el-row  type="flex" justify="space-between">
              <el-input v-model="smsinfo.code" placeholder="验证码"></el-input>
              <el-button :disabled="btnDisable" type="info" @click="sendSmsCode"  size="small"  style="margin-left: 11px">
                {{ btnSmsText }}
              </el-button>
            </el-row>

          </el-form-item>

          <el-form-item >
            <el-button type="primary" @click="submitForm('smsinfo')" size="small" style="float: left">登 录</el-button>
          </el-form-item>


        </el-form>
      </div>

    </div>

  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  background-color: #2E3E9C;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loginBox {
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  border-radius: 2px;
  width: 380px;
  min-height: 200px;
  padding: 0 24px 20px;
}


.tabBoxSwitch .tabBoxSwitchUl {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tabBoxSwitch .tabBoxSwitchUl li {
  display: inline-block;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  margin-right: 24px;
  cursor: pointer;
}

.tab-active {
  position: relative;
  color: #1a1a1a;
  font-weight: 600;
  font-synthesis: style;
}


.tab-active::before {
  display: block;
  position: absolute;
  bottom: 0;
  content: "";
  width: 100%;
  height: 3px;
  background-color: #0084ff;
}
</style>