<!--
 * @Author: mlt
 * @Date: 2023-06-09 11:20:12
 * @Description: 登录页
-->
<template>
  <div style="text-align: center; ">
    <div style="font-size: 72px; font-weight: bolder;">
      <span>登录页</span>
    </div>
    <div
      class="home-button app-action-button"
      style="margin: 40px auto 10px auto;"
      @click="sendRequest"
    >
      {{ $t(buttonText) }}
    </div>
    <h4>↑ Check out the console ↑</h4>
    <h1>vue-cli-electron-template</h1>
    <h2>Author: PurePeace</h2>
    <h2
      style="cursor: pointer; color: #FFF;"
      @click="
        () => {
          const { shell } = require('electron')
          shell.openExternal(link)
        }
      "
    >
      Github: <span style="user-select: text;">{{ link }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: 'https://github.com/Pure-Peace',
      buttonText: '请求中'
    }
  },
  methods: {
    // Async request
    async sendRequest () {
      console.log(this.$backend)
      this.buttonText = 'requestDemo.requesting'
      const res = await this.$backend.apiV2.demoPostV2()
      this.buttonText = 'requestDemo.requestSuccess'
      console.log('res', res)
    }
  }
}
</script>
