<script setup lang="ts">
defineProps<{
  modelValue: string
  resultCount: number | null
}>()

const emit = defineEmits(['update:modelValue', 'position'])
</script>

<template>
  <div class="result-card">
    <div class="result-header">
      <span class="result-label">匹配结果 <strong v-if="resultCount">{{ resultCount }}</strong></span>
      <a href="javascript:;" class="link-btn" @click="emit('position')">换个位置</a>
    </div>
    <div class="textarea-wrap">
      <el-input
        type="textarea"
        :model-value="modelValue"
        @input="emit('update:modelValue', $event)"
        rows="2"
      />
    </div>
  </div>
</template>

<style scoped>
.result-card { }
.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  line-height: 22px;
}
.result-label {
  font-size: 13px;
  color: #606266;
}
.link-btn {
  color: #409eff;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
}
.link-btn:hover {
  text-decoration: underline;
}
.textarea-wrap { }
</style>
