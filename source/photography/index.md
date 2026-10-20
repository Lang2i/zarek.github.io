---
title: 摄影
date: 2026-10-20 21:50:00
type: page
top_img: /img/banner.svg
---

<div class="z-photo-intro">
  <p>镜头是我另一双眼睛。拍得多的还是那些「被拆开之前」的样子——电路板的纹路、天线的弧度、深夜实验室的灯。</p>
  <p class="z-photo-sub">不追求器材参数，只记录让我停下来看两眼的东西。</p>
</div>

<div id="z-gallery" class="z-gallery">
  <div class="z-gallery-loading">正在加载照片…</div>
</div>

<div id="z-lightbox" class="z-lightbox" aria-hidden="true">
  <button class="z-lb-close" aria-label="关闭">&times;</button>
  <button class="z-lb-prev" aria-label="上一张">&#10094;</button>
  <button class="z-lb-next" aria-label="下一张">&#10095;</button>
  <figure class="z-lb-figure">
    <img id="z-lb-img" alt="">
    <figcaption id="z-lb-cap"></figcaption>
  </figure>
</div>

<style>
.z-photo-intro {
  margin: 4px 0 28px;
  padding: 22px 24px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(15, 23, 32, 0.04), rgba(14, 116, 144, 0.06));
  border-left: 3px solid #00b8d4;
}

.z-photo-intro p {
  margin: 0 0 6px;
  line-height: 1.9;
  color: #2b3a48;
}

.z-photo-intro .z-photo-sub {
  margin: 0;
  font-size: 0.9em;
  color: #6b7c8d;
}

.z-gallery {
  column-count: 3;
  column-gap: 16px;
  margin: 8px 0 32px;
}

.z-gallery-loading,
.z-gallery-empty {
  column-span: all;
  text-align: center;
  padding: 56px 20px;
  color: #8494a4;
  font-size: 0.92em;
  border: 1px dashed rgba(0, 184, 212, 0.3);
  border-radius: 14px;
  background: rgba(0, 184, 212, 0.03);
  line-height: 2;
}

.z-gallery-empty code {
  background: rgba(0, 184, 212, 0.12);
  color: #0e7490;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 0.9em;
}

.z-photo-item {
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
  background: #eef3f6;
  box-shadow: 0 2px 10px rgba(15, 23, 32, 0.07);
  transition: transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.32s ease;
}

.z-photo-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 34px rgba(14, 116, 144, 0.2);
}

.z-photo-item img {
  width: 100%;
  display: block;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.z-photo-item:hover img {
  transform: scale(1.05);
}

.z-photo-cap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 26px 14px 12px;
  background: linear-gradient(180deg, transparent, rgba(15, 23, 32, 0.78));
  color: #ffffff;
  font-size: 0.86em;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.3s ease;
}

.z-photo-item:hover .z-photo-cap {
  opacity: 1;
  transform: translateY(0);
}

.z-photo-cap .z-photo-date {
  display: block;
  font-size: 0.82em;
  opacity: 0.75;
  margin-top: 2px;
}

/* 灯箱 */
.z-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(8, 14, 20, 0.94);
  backdrop-filter: blur(6px);
  padding: 40px;
}

.z-lightbox.open {
  display: flex;
  animation: z-fade 0.24s ease;
}

@keyframes z-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.z-lb-figure {
  margin: 0;
  max-width: 92vw;
  max-height: 88vh;
  text-align: center;
}

.z-lb-figure img {
  max-width: 92vw;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
  animation: z-zoom 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes z-zoom {
  from { transform: scale(0.94); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.z-lb-figure figcaption {
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9em;
  letter-spacing: 0.04em;
}

.z-lb-close,
.z-lb-prev,
.z-lb-next {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.24s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.z-lb-close:hover,
.z-lb-prev:hover,
.z-lb-next:hover {
  background: rgba(0, 229, 255, 0.3);
  border-color: rgba(0, 229, 255, 0.6);
}

.z-lb-close {
  top: 24px;
  right: 28px;
  font-size: 26px;
  line-height: 1;
}

.z-lb-prev { left: 24px; top: 50%; transform: translateY(-50%); }
.z-lb-next { right: 24px; top: 50%; transform: translateY(-50%); }

@media (max-width: 992px) {
  .z-gallery { column-count: 2; }
}

@media (max-width: 600px) {
  .z-gallery { column-count: 1; }
  .z-lightbox { padding: 16px; }
  .z-lb-prev, .z-lb-next { width: 38px; height: 38px; }
  .z-lb-close { top: 12px; right: 12px; }
}
</style>

<script>
(function () {
  var MANIFEST = '/zarek.github.io/photos/photos.json';
  var gallery = document.getElementById('z-gallery');
  var box = document.getElementById('z-lightbox');
  if (!gallery || !box) return;

  var lbImg = document.getElementById('z-lb-img');
  var lbCap = document.getElementById('z-lb-cap');
  var items = [];
  var index = 0;

  function openAt(i) {
    index = (i + items.length) % items.length;
    var it = items[index];
    lbImg.src = it.src;
    lbImg.alt = it.title || '';
    lbCap.textContent = (it.title || '') + (it.date ? ' · ' + it.date : '');
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  box.querySelector('.z-lb-close').addEventListener('click', close);
  box.querySelector('.z-lb-prev').addEventListener('click', function (e) {
    e.stopPropagation();
    openAt(index - 1);
  });
  box.querySelector('.z-lb-next').addEventListener('click', function (e) {
    e.stopPropagation();
    openAt(index + 1);
  });
  box.addEventListener('click', function (e) {
    if (e.target === box) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') openAt(index - 1);
    if (e.key === 'ArrowRight') openAt(index + 1);
  });

  fetch(MANIFEST, { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (list) {
      items = (list || []).filter(function (x) { return x && x.src; });
      if (!items.length) {
        gallery.innerHTML =
          '<div class="z-gallery-empty">这里还空着。<br>把照片放进 <code>source/photos/</code>，' +
          '在 <code>photos.json</code> 里加一行记录，照片就会出现在这里。</div>';
        return;
      }
      var html = items.map(function (it, i) {
        var src = it.src.indexOf('http') === 0 ? it.src : '/zarek.github.io/photos/' + it.src;
        return (
          '<div class="z-photo-item" data-i="' + i + '">' +
          '<img src="' + src + '" alt="' + (it.title || '') + '" loading="lazy">' +
          '<div class="z-photo-cap">' + (it.title || '') +
          (it.date ? '<span class="z-photo-date">' + it.date + '</span>' : '') +
          '</div></div>'
        );
      }).join('');
      gallery.innerHTML = html;
      gallery.querySelectorAll('.z-photo-item').forEach(function (el) {
        el.addEventListener('click', function () {
          openAt(parseInt(el.getAttribute('data-i'), 10));
        });
      });
    })
    .catch(function () {
      gallery.innerHTML =
        '<div class="z-gallery-empty">照片索引读取失败，检查 <code>photos.json</code> 格式是否正确。</div>';
    });
})();
</script>
