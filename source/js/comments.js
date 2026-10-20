/**
 * giscus 评论（基于 GitHub Discussions，数据经 giscus.app 中转，国内可访问）
 * 在文章页与关于页末尾插入评论区
 */
(function () {
  var CONFIG = {
    repo: 'Lang2i/zarek.github.io',
    repoId: 'R_kgDOVPxS9A',
    category: 'General',
    categoryId: 'DIC_kwDOVPxS9M4DJLqi'
  };

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
    box.className = 'giscus-box';
    holder.appendChild(box);

    var s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.setAttribute('data-repo', CONFIG.repo);
    s.setAttribute('data-repo-id', CONFIG.repoId);
    s.setAttribute('data-category', CONFIG.category);
    s.setAttribute('data-category-id', CONFIG.categoryId);
    s.setAttribute('data-mapping', 'pathname');
    s.setAttribute('data-strict', '0');
    s.setAttribute('data-reactions-enabled', '1');
    s.setAttribute('data-emit-metadata', '0');
    s.setAttribute('data-input-position', 'top');
    s.setAttribute('data-theme', 'preferred_color_scheme');
    s.setAttribute('data-lang', 'zh-CN');
    s.setAttribute('data-loading', 'lazy');
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
