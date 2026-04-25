<template>
    <breadCrumb ref="breadcrumb" :item='item'></breadCrumb>
    <div class="table-wrapped">
        <!-- 顶部 -->
        <div class="table-top">
            <!-- 表格顶部 -->
            <div class="table-header">
                <!-- 搜索框 -->
                <div class="search-wrapped">
                    <el-input   
                        v-model="input1"
                        style="width: 240px"
                        size="large"
                        placeholder="输入账号进行搜索"
                        :prefix-icon="Search" 
                    />
                </div>
                <!-- 按钮外壳 -->
                <div class="button-wrapped">
                    <el-button type="primary">添加消息管理员</el-button>
                </div>
            </div>
            <!-- 表格内容 -->
            <div class="table-content">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column type="index" width="50" />
                    <el-table-column prop="account" label="账号"  />
                    <el-table-column prop="name" label="姓名"  />
                    <el-table-column prop="department" label="部门"  />
                    <el-table-column prop="email" label="邮箱"  />
                    <el-table-column label="操作" >
                        <template #default="{row}">
                            <el-button type="success">编辑</el-button>
                            <el-button type="danger">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>


        <!-- 底部 -->
        <div class="table-footer">
            <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                :total="1000"
            />
        </div>
    </div>


</template>

<script lang="ts" setup>
    import breadCrumb from '@/components/bread_crumb.vue'
    import { ref  , reactive } from 'vue'
    import { Search } from '@element-plus/icons-vue'

    //面包屑
    const breadcrumb = ref()
    //面包屑参数
    const item = ref({
        first:'用户管理',
        second:'消息管理员'
    })
    const input1 = ref('')
    const tableData = ref([{
        id: 1,
    }])

</script>

<style lang="scss" scoped>

</style>