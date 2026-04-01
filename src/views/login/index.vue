<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
          <h3>通用后台管理系统</h3>
          <span class="welcome">欢迎您的登录</span>
        </div>
      </el-header>
      <el-main>
        <div class="login-wrapped">


        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
     .header-wrapped{
         .header-content{
             width: 1200px;
             margin: 0 auto;
             display: flex;
             justify-content: space-between;
             align-items: center;
             .welcome{
              font-size: 13px;
             }
         }
     }
    .el-main{
      background-image: url('@/assets/code.jpg');
      height: 600px;
     }
     
</style>