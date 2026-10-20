---
title: 关于
date: 2026-10-20 12:58:18
type: about
top_img: /img/banner.svg
---

<div class="z-hero">
  <img src="/zarek.github.io/img/avatar.jpg" alt="Zarek">
  <div class="z-hero-text">
    <h2>枫煜 Zarek</h2>
    <p>物联网安全研究者 · 硬件渗透爱好者 · 工具造轮子的人<br>
    拆固件、抓无线、找调试口，然后把过程写成能复现的文字。</p>
    <div class="z-hero-tags">
      <span>固件分析</span>
      <span>无线协议</span>
      <span>硬件渗透</span>
      <span>编译器</span>
    </div>
  </div>
</div>

## 我是谁

一个把「拆开看看里面是什么」当成日常的人。

通信背景出身，所以看设备时习惯先问一句：它的信号往哪儿走？空口上飞的是什么？报文怎么组、怎么解。这个视角让我在无线那一层比大多数人走得更深——不只是抓到包，而是能从调制、帧结构一路读到应用层的明文。

主攻物联网安全，具体来说是把那些看起来封闭的智能硬件打开——读它的 Flash、找它的调试口、抓它空中的无线包，看看厂商到底在里面放了什么，以及哪些地方本该加锁却没加。

不写「十分钟入门」这类内容。这里发布的每一篇，都是我自己在真实设备上跑通过、踩过坑、能复现的流程。

## 在做的事

<div class="z-grid">
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-microchip"></i></div>
    <h4>固件分析</h4>
    <p>binwalk 拆包、文件系统还原、后门与硬编码凭据排查，从二进制里还原出厂商的疏忽。</p>
  </div>
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-wifi"></i></div>
    <h4>无线协议</h4>
    <p>BLE、Zigbee、Sub-GHz 的嗅探、重放与伪造。手里有 ChameleonUltra，MQTT 侧用 Mosquitto 搭靶场。</p>
  </div>
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-screwdriver-wrench"></i></div>
    <h4>硬件渗透</h4>
    <p>UART / JTAG 调试口定位、SPI Flash 直接读取，从物理层拿到最高权限。</p>
  </div>
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-tower-broadcast"></i></div>
    <h4>通信与协议</h4>
    <p>从空口信号到报文结构：抓包、解帧、还原应用层协议，理解它为什么这样设计、又在哪一步可以被打断。</p>
  </div>
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-code"></i></div>
    <h4>造工具</h4>
    <p>基于 LLVM 自研 <strong>Vane</strong> 语言（类 C 语法，面向嵌入式与脚本场景），以及单文件纯前端的 HTML PPT 工具 <strong>HPT</strong>。</p>
  </div>
</div>

## 技术栈

<div class="z-tags">
  <span>C / C++</span>
  <span>LLVM</span>
  <span>Linux</span>
  <span>Nim</span>
  <span>Lua</span>
  <span>Shell</span>
  <span>binwalk</span>
  <span>Ghidra</span>
  <span>逻辑分析仪</span>
  <span>UART / JTAG / SPI</span>
  <span>BLE / Zigbee / Sub-GHz</span>
  <span>TCP/IP</span>
  <span>MQTT</span>
  <span>信号分析</span>
</div>

## 技术之外

技术不是我的全部。真正让我愿意花掉整个晚上的，往往是这几件事：

<div class="z-grid">
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-camera-retro"></i></div>
    <h4>摄影</h4>
    <p>镜头是我另一双眼睛。拍得最多的是电路板的纹路、天线的弧度、深夜实验室的灯——那些在被我拆开之前的样子。</p>
  </div>
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-terminal"></i></div>
    <h4>编程</h4>
    <p>写代码是我理解世界的方式。从脚本到编译器，把想法变成一个能跑起来的东西，这个过程本身就足够上瘾。</p>
  </div>
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-tools"></i></div>
    <h4>动手</h4>
    <p>焊台、示波器、一堆飞线。喜欢能摸到的东西，也相信只有亲手拆过，才算真的懂。</p>
  </div>
  <div class="z-card">
    <div class="z-card-icon"><i class="fas fa-yin-yang"></i></div>
    <h4>术数</h4>
    <p>梅花易数、小六壬、大六壬。喜欢的是那套「取象—类比—推演」的思路：从一个卦、一个时辰里，把散落的信息串成一条能自洽的线。</p>
  </div>
</div>

<div class="z-note">
  <div><i class="fas fa-compass" style="color:#00b8d4;"></i></div>
  <div>拆硬件和起卦，其实是同一件事——<strong>都在找一个系统里看不见的规律</strong>。前者靠示波器，后者靠象数。</div>
</div>

<div class="z-note">
  <div><i class="fas fa-camera" style="color:#00b8d4;"></i></div>
  <div>照片都放在 <a href="/zarek.github.io/photography/">摄影</a> 这个页面，点开可以看大图。</div>
</div>

## 一路走过来

<div class="z-timeline">
  <div class="z-timeline-item">
    <div class="z-tl-time">现在</div>
    <div class="z-tl-title">物联网安全 · 系统化攻坚</div>
    <div class="z-tl-desc">从「能扫描」推进到「能利用」：不再满足于跑通现成脚本，而是理解每一个漏洞为什么成立、怎么稳定复现。</div>
  </div>
  <div class="z-timeline-item">
    <div class="z-tl-time">进行中</div>
    <div class="z-tl-title">Vane 语言</div>
    <div class="z-tl-desc">用 C/C++ 基于 LLVM 实现的一门语言，类 C 语法、模块系统、<code>fn</code> 语法、<code>type:name</code> 参数、可与 C 链接，目标场景是嵌入式与脚本。</div>
  </div>
  <div class="z-timeline-item">
    <div class="z-tl-time">进行中</div>
    <div class="z-tl-title">HPT · HTML PPT</div>
    <div class="z-tl-desc">单文件纯前端的在线幻灯片编辑器：实时编辑、HTML 导出、演示模式，用浏览器替代传统 PPT。</div>
  </div>
  <div class="z-timeline-item">
    <div class="z-tl-time">持续</div>
    <div class="z-tl-title">B 站「枫煜Zarek」</div>
    <div class="z-tl-desc">把 IoT 安全的学习过程做成视频：固件分析、无线协议、硬件渗透。不露脸，不放动画，只讲技术本身。</div>
  </div>
</div>

## 找到我

<div class="z-links">
  <a href="https://github.com/Lang2i" target="_blank"><i class="fab fa-github"></i> GitHub</a>
  <a class="z-ghost" href="https://github.com/Lang2i/zarek.github.io" target="_blank"><i class="fas fa-code-branch"></i> 本站源码</a>
  <a class="z-ghost" href="mailto:2071816969@qq.com"><i class="fas fa-envelope"></i> 邮箱</a>
</div>

<div class="z-note">
  <div><i class="fas fa-shield-halved" style="color:#00b8d4;"></i></div>
  <div>本站所有技术内容仅用于<strong>授权测试与学习研究</strong>。请勿将文中方法用于任何未授权的目标——这条线不该被跨过。</div>
</div>

## 关于本站

用 [Hexo](https://hexo.io/) 生成，[Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 主题，托管在 GitHub Pages。源码在 `main` 分支，构建产物在 `gh-pages` 分支，每次 `hexo deploy` 自动发布。
