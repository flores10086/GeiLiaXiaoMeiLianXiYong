<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <el-menu class="el-menu-vertical-demo" router>
                    <div class="title">通用后台管理系统</div>
                    <el-menu-item index="home">
                        <el-icon><House /></el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon><Document /></el-icon>
                        <span>系统概览</span>
                    </el-menu-item>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon><User /></el-icon>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group title="管理员管理">
                            <el-menu-item index="3-1">产品管理员</el-menu-item>
                            <el-menu-item index="3-2">用户管理员</el-menu-item>
                            <el-menu-item index="3-3">消息管理员</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="用户管理">
                            <el-menu-item index="3-4">用户列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title>
                            <el-icon><TakeawayBox /></el-icon>
                            <span>产品管理</span>
                        </template>
                        <el-menu-item-group title="入库管理">
                            <el-menu-item index="4-1">产品列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="出库管理">
                            <el-menu-item index="4-2">出库列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="5">
                        <template #title>
                            <el-icon><ChatSquare /></el-icon>
                            <span>消息管理</span>
                        </template>
                        <el-menu-item-group title="消息管理">
                            <el-menu-item index="5-1">消息列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="回收站">
                            <el-menu-item index="5-2">回收站</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item index="6">
                        <el-icon><Files /></el-icon>
                        <span>合同管理</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <el-icon><DocumentCopy /></el-icon>
                        <span>操作日志</span>
                    </el-menu-item>
                    <el-menu-item index="8">
                        <el-icon><Notebook /></el-icon>
                        <span>登录日志</span>
                    </el-menu-item>
                    <el-menu-item index="9">
                        <el-icon><Setting /></el-icon>
                        <span>系统设置</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>头部</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import {Menu as IconMenu,} from '@element-plus/icons-vue'
import {ref}from 'vue'
</script>

<style lang="scss" scoped>
    .el-aside {
        height: 100vh;
        background: #2b303b; 
        width: 210px;
        overflow: hidden;//隐藏滚动条
        .el-menu {
            background: #2b303b;
            height: 100vh;
            border: 0px;
        }
        .title {
            padding: 20px;
            display: flex;
            justify-content: center;
            color: #fff;
            background-color: #2b303b;
        }
    }
</style>