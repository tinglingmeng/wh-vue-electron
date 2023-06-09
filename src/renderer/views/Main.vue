<!--
 * @Author: mlt
 * @Date: 2023-06-09 11:20:12
 * @Description: 主页
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
      主页
    </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    // Async request
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
