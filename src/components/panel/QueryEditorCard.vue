<script setup lang="ts">
defineProps<{
  modelValue: string
  xpathShort: boolean
  xpathBatch: boolean
  isSupported: boolean
}>()

const emit = defineEmits(['update:modelValue', 'update:xpathShort', 'update:xpathBatch', 'copy', 'toCss'])
</script>

<template>
  <div class="query-editor-card">
    <!-- 顶部工具栏：复选框在左，按钮在右 -->
    <div class="toolbar">
      <div class="toolbar-left">
        <span class="xpath-label">XPATH</span>
        <label class="cb-label">
          <input type="checkbox" :checked="xpathShort" @change="emit('update:xpathShort', ($event.target as HTMLInputElement).checked)" />
          <span>精简xpath</span>
        </label>
        <label class="cb-label">
          <input type="checkbox" :checked="xpathBatch" @change="emit('update:xpathBatch', ($event.target as HTMLInputElement).checked)" />
          <span>列表模式</span>
        </label>
      </div>
      <div class="toolbar-right">
        <a href="javascript:;" class="link-btn" @click="emit('copy')" v-if="isSupported">复制</a>
        <a href="javascript:;" class="link-btn" @click="emit('toCss')" v-if="isSupported" title="将xpath语句转为css选择器">复制css</a>
      </div>
    </div>

    <!-- 输入框 -->
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
.query-editor-card { }
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  line-height: 24px;
}
.toolbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.xpath-label {
  font-size: 13px;
  font-weight: bold;
  color: #303133;
  white-space: nowrap;
}
.cb-label {
  display: inline-flex !important;
  align-items: center !important;
  cursor: pointer !important;
  user-select: none !important;
  font-size: 13px !important;
  color: #606266 !important;
  white-space: nowrap !important;
  gap: 3px !important;
}
.cb-label input[type="checkbox"] {
  width: 14px !important;
  height: 14px !important;
  cursor: pointer !important;
  accent-color: #409eff !important;
  margin: 0 !important;
  flex-shrink: 0 !important;
}
.cb-label span {
  line-height: 1.5;
}
.link-btn {
  color: #409eff;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
}
.link-btn:hover {
  text-decoration: underline;
}
.textarea-wrap { }
</style>
