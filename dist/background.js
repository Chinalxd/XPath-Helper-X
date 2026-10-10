// XPath-Helper-X v1.0.25 - Service Worker
// 点击扩展图标时打开可移动窗口，传递当前 tabId
// Based on xpath-helper-plus by MicLon, modified by Chinalxd
// SPDX-License-Identifier: Apache-2.0
let winId = null;

chrome.action.onClicked.addListener(async () => {
  if (winId) {
    try {
      await chrome.windows.get(winId);
      await chrome.windows.update(winId, { focused: true });
      return;
    } catch { winId = null; }
  }

  // 获取用户正在浏览的当前标签页
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true, windowType: 'normal' });
  const tabId = tab?.id || '';

  // 把 tabId 通过 URL 参数传给 popup
  const w = await chrome.windows.create({
    url: chrome.runtime.getURL('index.html') + (tabId ? '?tab=' + tabId : ''),
    type: 'popup',
    width: 560,
    height: 160,
    focused: true
  });
  winId = w.id;
});

chrome.windows.onRemoved.addListener((id) => {
  if (id === winId) winId = null;
});
