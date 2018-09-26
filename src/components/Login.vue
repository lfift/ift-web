<template>
  <div id="loginPage">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane label="登录" name="login">用户管理</el-tab-pane>
      <el-tab-pane label="注册" name="regist">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      activeName: 'login'
    }
  },
  methods: {
    handleClick(tab,event) {
      console.log(tab,event);
    }
  }

}
</script>

<style scoped>
#loginPage{
  width: 450px;
  height: 350px;
  border: thin solid red;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.el-tabs__header{
  font-size: 20em;
}
</style>
