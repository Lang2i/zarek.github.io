/**
 * utterances 评论（GitHub Issues 驱动，免服务器）
 * 在文章页与关于页末尾插入评论区
 */
(function () {
  var REPO = 'Lang2i/zarek.github.io';
  var SCRIPT_SRC = 'https://utteranc.es/client.js';

  function shouldShow() {
    // 文章页：/2026/10/19/xxx/ 形式
    if (/\/\d{4}\/\d{2}\//.test(location.pathname)) return true;
    // 关于页
    if (location.pathname.indexOf('/about/') !== -1) return true;
    return false;
  }

  function mount() {
    var holder = document.getElementById('comments-anchor');
    if (!holder) {
      if (!shouldShow()) return;
      var anchor =
        document.getElementById('post-comment') ||
        document.getElementById('article-container');
      if (!anchor) return;
      holder = document.createElement('div');
      holder.id = 'comments-anchor';
      holder.style.cssText =
        'max-width:800px;margin:28px auto 0;padding:0 12px;';
      anchor.appendChild(holder);
    }
    if (holder.dataset.loaded === '1') return;
    holder.dataset.loaded = '1';

    var box = document.createElement('div');
    box.className = 'utterances-box';
    holder.appendChild(box);

    var s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.setAttribute('repo', REPO);
    s.setAttribute('issue-term', 'pathname');
    s.setAttribute('theme', 'preferred-color-scheme');
    box.appendChild(s);
  }

  function unmount() {
    var holder = document.getElementById('comments-anchor');
    if (holder) holder.remove();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
  // pjax 翻页时重新挂载
  document.addEventListener('pjax:send', unmount);
  document.addEventListener('pjax:complete', mount);
})();
