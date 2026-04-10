<template>
  <svg 
    class="svg-icon" 
    aria-hidden="true" 
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 16
  }
})

const symbolId = computed(() => `#icon-${props.iconName}`)
</script>

<style scoped>
.svg-icon {
  vertical-align: middle;
  fill: currentColor ;
  visibility: visible ;
  display: inline-block ;
  overflow: visible ;
}
</style>