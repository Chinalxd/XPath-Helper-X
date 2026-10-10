<script setup lang="ts">
import { useXPathWorkbench } from '@/composables/useXPathWorkbench'
import QueryEditorCard from '@/components/panel/QueryEditorCard.vue'
import ResultPreviewCard from '@/components/panel/ResultPreviewCard.vue'

const {
  xpathRule,
  xpathShort,
  xpathBatch,
  xpathResult,
  xpathResultCount,
  isSupported,
  handleShort,
  handleBatch,
  handlePosition,
  handleCopy,
  handleToCss,
} = useXPathWorkbench()
</script>

<template>
  <div class="home-container">
    <!-- 第一行：所有控件一字排开 -->
    <div class="header-row">
      <span class="label-xpath">XPATH</span>
      <label class="cb-label">
        <input type="checkbox" :checked="xpathShort" @change="handleShort(($event.target as HTMLInputElement).checked)" />
        <span>精简xpath</span>
      </label>
      <label class="cb-label">
        <input type="checkbox" :checked="xpathBatch" @change="handleBatch(($event.target as HTMLInputElement).checked)" />
        <span>列表模式</span>
      </label>
      <a href="javascript:;" class="link-btn" @click="handleCopy" v-if="isSupported">复制</a>
      <a href="javascript:;" class="link-btn" @click="handleToCss" v-if="isSupported">复制css</a>

      <span class="sep"></span>

      <span class="label-result">匹配结果</span>
      <strong v-if="xpathResultCount">{{ xpathResultCount }}</strong>
      <a href="javascript:;" class="link-btn" @click="handlePosition">换个位置</a>
    </div>

    <!-- 第二行：左右两个输入框 -->
    <div class="content-row">
      <div class="input-left">
        <el-input
          type="textarea"
          :model-value="xpathRule"
          @input="(val:string) => xpathRule = val"
          rows="3"
          placeholder="输入xpath表达式..."
        />
      </div>
      <div class="input-right">
        <el-input
          type="textarea"
          :model-value="xpathResult"
          :readonly="true"
          rows="3"
          placeholder="匹配结果"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container { width: 100%; }

.header-row {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 8px;
  margin-bottom: 6px;
  line-height: 24px;
  overflow-x: auto;
}
.label-xpath {
  font-size: 13px;
  font-weight: bold;
  color: #303133;
  white-space: nowrap;
  flex-shrink: 0;
}
.cb-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  color: #606266;
  white-space: nowrap;
  gap: 2px;
  flex-shrink: 0;
}
.cb-label input[type="checkbox"] {
  width: 13px;
  height: 13px;
  cursor: pointer;
  accent-color: #409eff;
  margin: 0;
  flex-shrink: 0;
}
.link-btn {
  color: #409eff;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}
.link-btn:hover { text-decoration: underline; }
.sep {
  width: 1px;
  height: 14px;
  background: #dcdfe6;
  flex-shrink: 0;
  margin: 0 4px;
}
.label-result {
  font-size: 12px;
  color: #909399;
  white-space: nowrap;
  flex-shrink: 0;
}
.label-result strong {
  color: #303133;
  margin-left: 2px;
}

.content-row {
  display: flex;
  gap: 10px;
  width: 100%;
}
.input-left, .input-right {
  flex: 1;
  min-width: 0;
}
</style>
