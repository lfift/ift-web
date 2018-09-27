<template>
  <div class="container">
    <div class="form">
      <el-form :model="loginForm" ref="loginForm" >
        <el-form-item prop="username">
          <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-col :span="18">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-col>
          <el-col :span="6">
            <img src="" alt="验证码" id="imageCode" height="40px" width="100%"/>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" @keyup.native.13="login">登 录</el-button>
        </el-form-item>
      </el-form>
      <div class="title">
        <span>三方登录</span>
      </div>
      <div id="icon">
        <el-col :span="6" :offset="8">
          <i class="iconfont icon-QQ"></i>
        </el-col>
        <el-col :span="6">
          <i class="iconfont icon-weixin"></i>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      var validateUsername = (rule, value, callback) => {
        if (!value) {
          callback(new Error('用户名不能为空'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('密码不能为空'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username: 'admin',
          password: 'admin',
          rememberMe: true
        },
        rules: {
          username: [
            {required: true, trigger: 'blur', message: '请输入用户名'}
          ],
          password: [
            {require: true, trigger: 'blur', message: '请输入密码'}
          ]
        }
      }
    },
    methods: {
      login() {
        alert(123);
      }
    }
  }
</script>

<style scoped>
  @import url('../assets/css/iconfont.css');
  .container{
    min-height: 758px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form{
    width:450px;
    height:350px;
    box-shadow: 0px 0px 10px #ccc;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .el-form-item{
    margin: 20px auto;
    width: 80%;
  }
  .el-button--primary{
    width: 100%;
    border: none;
    border-radius: 20px;
  }
  .el-form{
    padding-top: 40px;
  }
  .title{
    font-family: "Microsoft YaHei";
    text-align: center;
    font-size: .5em;
    color: #ccc;
  }
  div#icon{
    margin-top: 15px;
  }
  .iconfont{
    border-radius: 50%;
  }
  .iconfont:hover{
    box-shadow: 0px 0px 20px #ccc;
    color: #F2F05C;
    transition: all .3s;
  }
</style>
