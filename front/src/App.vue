<template>
  <div id="app">
    <Router-view></Router-view>
  </div>
</template>

<style>
/* 全局重置：清除默认边距，统一盒模型 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* 内边距、边框不会撑大元素宽高 */
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden; /* 避免出现滚动条 */
}

</style>
