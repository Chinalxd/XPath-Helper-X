# XPath-Helper-X

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.26-green.svg)](dist/manifest.json)

Chrome 扩展，可移动窗口版 XPath 辅助工具。基于 [xpath-helper-plus](https://github.com/MicLon/xpath-helper-plus)（作者 MicLon）修改开发。

## 功能特性

- **Shift + 悬停获取 XPath** — 在网页上按住 Shift 键，鼠标悬停元素即可自动获取 XPath
- **精简 XPath** — 自动简化 XPath 表达式，输出最短唯一路径
- **列表模式** — 匹配多个结果时以列表形式展示
- **复制功能** — 一键复制 XPath / CSS 选择器到剪贴板
- **换个位置** — 重新选择其他目标元素
- **可移动窗口** — 独立弹出窗口，支持拖动和放大，不遮挡网页

## 安装方式

### 方式一：直接加载（推荐用于调试）

1. 克隆本项目：
   ```bash
   git clone https://github.com/Chinalxd/XPath-Helper-X.git
   cd XPath-Helper-X
   ```

2. 打开 Chrome 浏览器，访问 `chrome://extensions/`

3. 开启右上角「开发者模式」

4. 点击「加载已解压的扩展程序」，选择本项目的 `dist` 目录

5. 浏览器右上角出现插件图标，点击即可使用

### 方式二：打包安装

1. 将 `dist` 目录打包为 zip 文件
2. 在 `chrome://extensions/` 中开启开发者模式
3. 点击「加载已解压的扩展程序」或拖入 zip 文件

## 开发环境

```bash
# 安装依赖
npm install

# 开发模式（监听文件变化自动构建）
npm run dev

# 生产构建
npm run build
```

构建产物位于 `dist` 目录。

## 使用说明

| 操作 | 说明 |
|------|------|
| Shift + 鼠标悬停 | 自动获取元素的 XPath 表达式 |
| 勾选「精简 xpath」 | 自动简化表达式，更易读 |
| 勾选「列表模式」 | 匹配多个结果时以列表展示 |
| 点击「复制」 | 复制当前 XPath 到剪贴板 |
| 点击「复制 css」 | 复制 CSS 选择器到剪贴板 |
| 点击「换个位置」 | 重新选择其他目标元素 |
| 点击 `?` 按钮 | 查看完整使用说明 |

## 技术栈

- Vue 3 + Vite
- Element Plus UI
- Chrome Extension Manifest V3
- TypeScript

## 版本历史

| 版本 | 说明 |
|------|------|
| v1.0.26 | 帮助面板新增 Apache 2.0 版权信息（© 2024 MicLon & 2025 Chinalxd） |
| v1.0.25 | 修复帮助按钮不显示；更名为 XPath-Helper-X |
| v1.0.24 | 新增使用说明面板（? 按钮） |
| v1.0.23 | textarea 恢复为 3 行高度 |
| v1.0.22 | 窗口高度压缩至 160px |
| v1.0.21 | 窗口高度优化至 230px |
| v1.0.20.2 | 修复窗口空白问题（URL tabId 通信方案） |
| v1.0.18 | 可移动窗口模式（chrome.windows.create） |
| v1.0.16 | 统一单行布局，左右两列输入框对齐 |
| v1.0.11 | 原生 HTML checkbox 替换 Element Plus 组件 |

## 致谢

- [MicLon/xpath-helper-plus](https://github.com/MicLon/xpath-helper-plus) — 原始项目，提供核心 XPath 引擎和基础架构
- [xpath helper](https://chrome.google.com/webstore/detail/xpath-helper/bgndcnhncjcgaipmhepelpjmmlhlmkfc) — 经典 XPath 辅助工具

## 许可证

```
Copyright 2024 MicLon (Original: xpath-helper-plus)
Copyright 2025 Chinalxd (Modified: XPath-Helper-X)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
