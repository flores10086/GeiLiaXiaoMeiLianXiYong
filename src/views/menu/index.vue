<template>
      <div class="common-layout">
        <el-container>
            <el-aside width="200px">
        <el-menu  class="el-menu-vertical-demo" router>
        <el-menu-item index="home">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  <el-container>
         <el-header>头部</el-header>
            <el-main>
                <router-vue></router-vue>

            </el-main>
         </el-container>
      </el-container>
  </div>
</template>

<script lang="ts" setup>
    import {
      Menu as IconMenu,
    } from '@element-plus/icons-vue'
    import ref from 'vue'
</script>

<style lang="scss" scoped>
</style>