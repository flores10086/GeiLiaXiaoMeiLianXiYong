<<template>
    <breadCrumb ref="breadcrumb" :item='item'></breadCrumb>

</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import breadCrumb from '@/components/bread_crumb.vue'
    const breadcrumb = ref()
    const item = ref({
        first:'系统设置',
    })
</script>

<style lang="scss" scoped>

</style>>