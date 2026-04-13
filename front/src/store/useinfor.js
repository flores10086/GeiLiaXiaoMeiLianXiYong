import { defineStore } from "pinia"
import { getUserInfor } from "@/api/userinfor.js"
export const useUserInfor = defineStore('userinfor', {
    state: () => {
        return {
            imageUrl: '',
            name: '',
            sex: '',
            department: '',
            identity: ''
        }
    },
    actions: {
        async userInfor(id) {
            const res = await getUserInfor(id)
            this.imageUrl = res.data.image_url
            this.name = res.data.name
            this.sex = res.data.sex
            this.department = res.data.department
            this.identity = res.data.identity
        }
    },
}, {
    persist: {
        //存储全部数据
        enabled: true,
        //关键字
        key: 'userinfor',
        storage: localStorage,
    }
})