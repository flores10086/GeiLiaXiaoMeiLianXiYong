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
            <el-card class="box-card">
               <el-tabs v-model="activeName" class="demo-tabs" :stretch="'true'">
               <el-tab-pane label="登录" name="first">登录</el-tab-pane>
               <el-tab-pane label="注册" name="second">注册</el-tab-pane>
               
              
  </el-tabs>
            </el-card>
        </div>
      </el-main>
      <el-footer class="footer-wrapped">
        <div class="footer-content">
          <div class="title">
            <span>阿里云博客专家</span> |
            <span>阿里云博客专家</span> |
            <span>阿里云博客专家</span>
          </div>
        </div>

      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('first')
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
      --el-main-padding:0;

      .login-wrapped{
        width: 1200px;
            height: 600px;
            margin: 0 auto;


            .box-card{
               width: 350px;
               height: 375px;
               float: right;
               position: relative;
               top: 14%;
            }
      }
     }
     .footer-wrapped{
      margin-top: 8px;
      .footer-content{
        width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;

          .title{
            color: #666;
          }
          span{
            color: #666;
            font-size: 12px;
          }
      }
     }
</style>