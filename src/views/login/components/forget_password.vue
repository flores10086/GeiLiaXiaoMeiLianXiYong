<template>
     <el-dialog v-model="state.forgetPasswordDialog" title="忘记密码" width="30%" >
         <el-form class="login-form">
                   <el-form-item label="输入您的注册账号" prop="account">
                    <el-input v-model="forgetData.account" placeholder="输入您的注册账号"/>
                </el-form-item>
                 <el-form-item label="输入您的个人邮箱" prop="email">
                    <el-input v-model="forgetData.email" placeholder="输入您的个人邮箱"/>
                </el-form-item>
                <div class="footer-wrapped">
                  <div class="forget-password">
                    <span class="forget-password-button">忘记密码</span>
                   </div>           
                     <div class="footer-button">
                     <el-button type="primary">登录</el-button>
                </div>
                <div class="footer-go-register">
                  还没有账号？<span class="go-register">马上注册</span>
                </div>
             </div>
          </el-form>
        </el-dialog>
</template>

<script lang="ts" setup>
    import { Z2_EMPHASIS_LIFT } from 'echarts/types/src/util/states.js';
import { reactive, ref } from 'vue'

// 表单对象接口
    interface forgetData {
        account:number|null;
        email:string
    }
//    表单对象
    const forgetData : forgetData = reactive({
        account:null,
        email:''
    })

// 控制弹窗 默认关闭
    const state = reactive({
        forgetPasswordDialog:false
    })
// 打开弹窗
    const open = () =>{
        state.forgetPasswordDialog = true
    }


    defineExpose({
        open 
    })
</script>

<style lang="scss" scoped>
</style>