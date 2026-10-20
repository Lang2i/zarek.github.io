---
title: 你好，这里是 Zarek
date: 2026-10-19 23:30:00
tags:
  - 随笔
categories:
  - 固件分析
swiper_list: true
---

博客搭好了。

这里会记录一些物联网安全方向的东西 —— 固件怎么拆、无线协议怎么抓、硬件怎么被玩坏，以及踩过的坑。

## 会写什么

- **固件分析** —— 拆包、文件系统还原、后门与硬编码凭据排查
- **无线协议** —— BLE、Zigbee、Sub-GHz 的嗅探与重放
- **硬件渗透** —— UART/JTAG 调试口定位、SPI Flash 读取
- **工具与代码** —— 自己写的脚本、遇到的好用工具

> 不写入门科普的水文，只写自己实际动手验证过的东西。

## 关于写作环境

这个站用 Hexo 搭建，源码托管在 GitHub 的 `main` 分支，生成的静态页面发布到 `gh-pages` 分支。

```bash
hexo new "文章标题"   # 新建文章
hexo server           # 本地预览 localhost:4000
hexo clean && hexo deploy   # 生成并发布上线
```
