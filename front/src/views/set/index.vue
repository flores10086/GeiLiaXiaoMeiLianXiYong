<<template>
    <breadCrumb ref="breadcrumb" :item='item'></breadCrumb>
    <!--外壳-->
    <div class="common-wrapped">
        <!--内容-->
        <div class="common-content">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="账号详情" name="first">
                    <div class="account-infor-wrapped">
                        <span>用户头像：</span>
                        <div class="account-infor-content">
                            <!--action 是上传头像的接口-->
                            <el-upload class="avatar-uploader" 
                                action="http://localhost:3007"
                                :show-file-list="false":on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                            </el-upload>
                        </div>
                    </div>
                    <div class="account-infor-wrapped">
                        <span>用户账号：</span>
                        <div class="account-infor-content">
                            <el-input v-model="AccountDetailData.account" disable></el-input>
                        </div>
                    </div>
                    <div class="account-infor-wrapped">
                        <span>用户密码：</span>
                        <div class="account-infor-content">
                            <el-button  type="primary">修改密码</el-button>
                        </div>
                    </div>
                    <div class="account-infor-wrapped">
                        <span>用户姓名：</span>
                        <div class="account-infor-content">
                            <el-input v-model="AccountDetailData.name" disable></el-input>
                        </div>
                        <div><el-button  type="primary">保存</el-button></div>
                    </div>
                    <div class="account-infor-wrapped">
                        <span>用户性别：</span>
                        <div class="account-infor-content">
                            <el-select v-model="AccountDetailData.sex">
                                <el-option label="男" value="男" />
                                <el-option label="女" value="女" />
                            </el-select>
                        </div>
                        <div><el-button  type="primary">保存</el-button></div>
                    </div>
                    <div class="account-infor-wrapped">
                        <span>用户身份：</span>
                        <div class="account-infor-content">
                            <el-input v-model="AccountDetailData.identity" disable></el-input>
                        </div>
                    </div>
                    <div class="account-infor-wrapped">
                        <span>用户部门：</span>
                        <div class="account-infor-content">
                            <el-input v-model="AccountDetailData.department" disable></el-input>
                        </div>
                    </div>
                    <div class="account-infor-wrapped">
                        <span>用户邮箱：</span>
                        <div class="account-infor-content">
                            <el-input v-model="AccountDetailData.email" disable></el-input>
                        </div>
                        <div><el-button  type="primary">保存</el-button></div>
                    </div>

                </el-tab-pane>
                <el-tab-pane label="公司信息" name="second">公司信息</el-tab-pane>
                <el-tab-pane label="首页管理" name="third">首页管理</el-tab-pane>
                <el-tab-pane label="其它设置" name="fourth">其它设置</el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<script lang="ts" setup>
    import { ref  , reactive } from 'vue'
    import breadCrumb from '@/components/bread_crumb.vue'
    import { ElMessage } from 'element-plus'
    import { Plus } from '@element-plus/icons-vue'
    import type { UploadProps } from 'element-plus'
import { changeIdentityAdmin } from '../../../../back/router_handle/userinfo'
    //面包屑
    const breadcrumb = ref()
    //面包屑参数
    const item = ref({
        first:'系统设置',
    })
    //默认打开标签页
    const activeName = ref('first')

    const imageUrl = ref('')

    const handleAvatarSuccess: UploadProps['onSuccess'] = (response,uploadFile) => {
        imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    }

    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
        if (rawFile.type !== 'image/jpeg') {
            ElMessage.error('头像必须是JPG格式!')
            return false
        }else if (rawFile.size / 1024 / 1024 > 2) {
            ElMessage.error('头像必须小于2MB!')
            return false
        }
        return true
    }
    //账号详情信息
    const AccountDetailData = reactive({
        account:'',
        name:'',
        sex:'',
        identity:'',
        department:'',
        email:''
    })


</script>

<style lang="scss" scoped>
    //外壳
    .common-wrapped{
        padding:8px;
        background: #f5f5f5;
        //计算 减去头部和面包屑
        height:calc(100vh - 85px);
        //内容
        .common-content{
            padding:0 10px;
            height: 100%;
            background: #fff;
            //账号信息外壳
            .account-infor-wrapped{
                display: flex;
                align-items: center;
                padding-left: 50px;
                margin-bottom: 24px;
                font-size: 14px;
                //账号信息内容
                .account-infor-content{
                    margin-left: 24px;
                    margin-right: 16px;
                    
                }
                //按钮
                .account-save-button{
                    margin-left: 16px;   
                }
            }
        }
    }
    //标签页
    .demo-tabs > .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }
    //上传头像
    .avatar-uploader .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    //输入框的长度
    :deep(.el-input){
        width: 200px;
    }
    :deep(.el-select){
        width: 200px;
    }

</style>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
</style>
