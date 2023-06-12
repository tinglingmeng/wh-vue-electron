1. 主结构：Vue+Electron+Element

2. 开发工具： vsCode

3. 开发版本要求： Electron8.x  node16.X

4. 项目配置

   1. 下载地址：（<https://github.com/Pure-Peace/vue-cli-electron-template.git）（由于公司电脑加密，部分文件乱码无法加载，demo暂时提交到了git）>
   2. 安装依赖：  npm install（yarn）
   3. 启动应用：  npm run go（yarn go）
   4. 打包应用：  npm run buildapp（yarn buildapp）

5. 目录结构

   1. `src/main`：主进程（Electron 相关）。
   2. `src/renderer`：渲染进程（Vue 或网页相关）。
   3. `vue.config.js`: 包括路径别名、electron-builder、i18n 等各种 app 配置项。
   4. `src/backend`: Api后端接口资源，及axios配置项。
   5. `src/locales`：i18n多语言翻译文件目录。
   6. `src/main/events`：主进程（Electron） ipc 及 app 事件。

6. 一些问题

   1. 关于打包：windows与mac需各自打包，无法windows打包mac
   2. 框架中的一些问题：
      1. node以及项目中使用的组件如esLint冲突问题
      2. vant导入桌面端报错，查阅资料是说vant新版不支持桌面端，那我们自己的组件库是否支持，暂时使用的是Element
      3. 页面放大缩小页面组件如何跟随放大缩小，以及多窗口
      4. axios封装相关，现在只是做了最简单的接口请求测试
      5. 页面中如何内嵌网页，就是涉及到的报表能否作为url无缝嵌入进来，以及如何传值
      6. 诸如vuex,路由等相关封装，整体和现有项目应该是一致的，这边只是暂时写了写
      7. 本地数据存储问题，如登录后的数据存储，以及存储到电脑哪里（win/mac）
   3. 总结
      1. 整体来说，抛开主进程（Electron），渲染进程（可以理解为每个页面）开发方式与当前公司项目页面开发类似
      2. 区别在于页面的打开方式，以及主进程相关的操作，以及窗口的部分操作如放大缩小，桌面图标等
      3. 这边没用系统性的学习搭建过前端框架，直接学习以及搭建Element框架，问题点多多，很多地方不明白
      4. electron-vite-vue3更符合当前主流开发，知识太多，扛不住了。。
      5. Electron安装以及一些插件安装有点麻烦，最好有梯子科学上网，或者多试几次
