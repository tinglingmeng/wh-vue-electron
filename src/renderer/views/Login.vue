<!--
 * @Author: mlt
 * @Date: 2023-06-09 11:20:12
 * @Description: 登录页
-->
<template>
  <div class="div-body">
    <div class="div-pic">
      <img
        class="img-pic"
        src="~assets/login_logo.png"
      >
    </div>
    <h2 class="sp-txt">
      威弘系统
    </h2>
    <div class="div-input">
      <el-input
        v-model="phone"
        class="inp"
        maxlength="11"
        minlength="11"
        placeholder="请输入手机号"
        clearable
      />
    </div>
    <div class="div-input">
      <el-input
        v-model="pwd"
        class="inp"
        placeholder="请输入密码"
        show-password
      />
    </div>
    <div
      class="div-btn"
      @click="login"
    >
      <el-button
        type="primary"
        class="btn"
      >
        登录
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      pwd: ''
    }
  },
  methods: {
    // Async request
    async login () {
      console.log(this.$backend)
      const res = await this.$backend.apiV2.demoPostV2()
      console.log('res', res)
      this.$router.push('/main')// 路由跳转
      const remote = require('electron').remote
      const BrowserWindow = remote.BrowserWindow // 改变窗口大小
      BrowserWindow.mainWindow.center()// 窗口打开居中显示
    }
  }
}
</script>

<style lang="less">
.div-body {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 100px;
  .div-pic {
    width: 100%;
    text-align: center;
    .img-pic {
      text-align: center;
      width: 100px;
      height: 100px;
    }
  }
  .sp-txt {
    margin-top: 10px;
    text-align: center;
    width: 100%;
    color: #333333;
    font-size: 24px;
  }
  .div-input{
    margin-top: 10px;
    width: 100%;
    .inp{
      width: 200px;
    }
  }
  .div-btn{
    margin-top: 30px;
    width: 100%;
    .btn{
      width: 200px;
    }
  }
}
</style>
