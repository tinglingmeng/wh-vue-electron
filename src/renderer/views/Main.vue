<!--
 * @Author: mlt
 * @Date: 2023-06-09 11:20:12
 * @Description: 主页
-->
<template>
  <div class="div-main">
    <div class="div-left">
      <div class="div-item">
        <div>
          <el-badge :value="11">
            <i class="el-icon-message-solid item-i" />
          </el-badge>
        </div>
        <span class="item-txt">消息</span>
      </div>
      <div class="div-item">
        <div>
          <el-badge :value="2">
            <i class="el-icon-s-order item-i" />
          </el-badge>
        </div>
        <span class="item-txt">待办事项</span>
      </div>
      <div class="div-item">
        <div>
          <el-badge is-dot>
            <i class="el-icon-s-cooperation item-i" />
          </el-badge>
        </div>
        <span class="item-txt">业务公示</span>
      </div>
      <div
        class="div-item"
        @click="openReport()"
      >
        <div>
          <el-badge>
            <i class="el-icon-s-data item-i" />
          </el-badge>
        </div>
        <span class="item-txt">报表</span>
      </div>
      <div class="div-item">
        <div>
          <el-badge>
            <i class="el-icon-menu item-i" />
          </el-badge>
        </div>
        <span class="item-txt">管理</span>
      </div>
      <div class="div-item">
        <div>
          <el-badge :value="6">
            <i class="el-icon-chat-dot-square item-i" />
          </el-badge>
        </div>
        <span class="item-txt">通讯录</span>
      </div>
    </div>
    <div class="div-right">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
        />
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '张三',
        address: '上海市普陀区'
      }, {
        date: '2016-05-04',
        name: '李四',
        address: '上海市青浦区'
      }, {
        date: '2016-05-01',
        name: '王五',
        address: '上海市浦东新区'
      }, {
        date: '2016-05-03',
        name: '赵六',
        address: '上海市闵行区'
      }]
    }
  },
  methods: {
    formatter (row, column) {
      return row.address
    },
    // 打开报表
    openReport () {
      this.$router.push('/main')// 路由跳转
      const remote = require('electron').remote
      const BrowserWindow = remote.BrowserWindow // 改变窗口大小
      BrowserWindow.loadURL('https://sit.weihong777.cn/storeapptest1/#/report/CheckByTime')
    }
  }
}
</script>

<style lang="less">
.div-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .div-left {
    padding: 20px 0 20px 0;
    width: 15%;
    height: 100%;
    background: #eeeef2;
    .div-item {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
      .item-i{
        width: 20px;
        height: 20px;
      }
      .item-txt {
        color: #333333;
        margin-top: 6px;
      }
    }
  }
  .div-right {
    background: white;
    width: 75%;
    height: 100%;
  }
}
</style>
