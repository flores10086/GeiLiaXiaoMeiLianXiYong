<template>
    <breadCrumb ref="breadcrumb" :item='item'></breadCrumb>
    <!--首页外壳-->
    <div class="home-wrapped">
        <!--轮播图外壳-->
        <div class="swiper-wrapped">
            <el-carousel :interval="4000" indicator-position="outside" type="card" height="320px">
                <el-carousel-item v-for="(item,index) in imageUrl" :key="index">
                    <img v-if="item" :src="item" class="swiper"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--栅格布局外壳-->
        <div class="layout-wrapped">
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in companyIntroduce" :key="index"  @click="openIntroduce(index+1)">
                <div class="company-message-area">
                    <span>{{item.set_name}}</span>
                    <div v-html='item.set_text' class="company-introduce""></div>
                </div>
            </el-col>
        </el-row>
        </div>
        <!--，表格外壳-->
        <div class="two-table-wrapped">
            <!--公司公告-->
            <div class="company-notice">
                <span class="title">公司公告</span>
                <el-table :data="tableData" style="width: 100%" :show-header='false'>
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <!--系统消息-->
            <div class="system-message">
                <span class="title">系统消息</span>
                <el-table :data="tableData" style="width: 100%" :show-header='false'>
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
        </div>
    </div>
    <introduce ref="intro"></introduce>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import breadCrumb from '@/components/bread_crumb.vue'
    import { bus } from '@/utils/mitt.js'
    import {getAllSwiper,getAllCompanyIntroduce} from '@/api/setting'
    import introduce from './components/introduce.vue'
    //面包屑
    const breadcrumb = ref()
    //面包屑参数
    const item = ref({
        first:'首页',
    })
    const tableData = [

    ]

    // 轮播图
    const imageUrl = ref([])

    // 获取轮播图
    const getAllswiper =async () =>{
        const res = await getAllSwiper()
        imageUrl.value = res
    }
    getAllswiper()

    // 公司介绍
    const companyIntroduce = ref ([])
    const getAllCompanyintroduce = async () =>{
        const res = await getAllCompanyIntroduce()
        const[name,...intro] = res
        companyIntroduce.value = intro
    }
    getAllCompanyintroduce()

    // 弹窗
    const intro =ref()
    const openIntroduce = ( id:number ) =>{
        //第一个参数是标记 第二个参数要传入的值
        bus.emit('introduce',id)
        intro.value.open()
    }


</script>

<style lang="scss" scoped>
    @mixin table-class{
        height:210px;
        width:48%;
        display:flex;
        flex-direction:column;
    }
    //首页外壳
    .home-wrapped{
        padding: 8px;
        background: #f5f5f5;
        height: calc(100vh - 101px);
        //轮播图外壳
        .swiper-wrapped{
            padding: 0 10px;
            background: #fff;
        
            :deep(.swiper){
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 6px;
            }
        }
        //栅格布局外壳
        .layout-wrapped{
            padding: 8px;
            margin-bottom: 8px;
            background: #fff;
            //公司信息区域
            .company-message-area{
                background: #f5f5f5;
                height: 235px;
                padding: 8px;
                cursor: pointer;

                span{
                    border-bottom: 1px solid #409eff;
                    font-size: 14px;
                }
                .company-introduce{
                    text-indent: 24px;
                    font-size:14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    line-clamp: 3; /* 新增标准属性，消除警告，兼容火狐等现代浏览器 */
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                }
                
            }
            .company-message-area:hover{
                cursor:pointer;
                background-color: #eef5ff;
            }
        }
        //表格外壳
        .two-table-wrapped{
            height: 210px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:space-around;
            background:#fff;

            //公司公告
            .company-notice{
                @include table-class ;
            }

            //系统消息
            .system-message{
                @include  table-class;
            }

            .title{
                font-size:14px;
                margin-bottom:5px;
                border-bottom:2px solid #ea0709;
            }
        }
    }
    //轮播图样式
    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    //栅格布局样式
    .el-row {
        margin-bottom: 20px;
    }
    .el-row:last-child {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    //表格样式

</style>