const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const SRC = path.join(__dirname, 'source/img/avatar.jpg');
const OUT_DIR = path.join(__dirname, 'source/img');

// 把若干张 PNG 打包成标准 ICO（Vista+ 支持 PNG 压缩条目）
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  const images = [];
  let offset = 6 + count * 16;

  pngBuffers.forEach(({ size, buf }) => {
    const entry = Buffer.alloc(16);
    entry[0] = size >= 256 ? 0 : size; // width
    entry[1] = size >= 256 ? 0 : size; // height
    entry[2] = 0; // palette
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buf.length;
    dirEntries.push(entry);
    images.push(buf);
  });

  return Buffer.concat([header, ...dirEntries, ...images]);
}

(async () => {
  const img = await Jimp.read(SRC);
  const { width: W, height: H } = img.bitmap;
  console.log(`原图: ${W}x${H}`);

  // 以人脸 + 龙头为中心裁一个正方形（偏左上）
  const side = Math.round(Math.min(W, H) * 0.72);
  const cx = Math.round(W * 0.42); // 人脸大致水平位置
  const cy = Math.round(H * 0.34); // 人脸大致垂直位置
  const x = Math.max(0, Math.min(W - side, cx - Math.round(side / 2)));
  const y = Math.max(0, Math.min(H - side, cy - Math.round(side / 2)));
  console.log(`裁切: ${x},${y} 边长 ${side}`);

  img.crop({ x, y, w: side, h: side });

  // 主图标 256（同时用作 Apple touch icon）
  const base = img.clone().resize({ w: 256, h: 256 });
  fs.writeFileSync(path.join(OUT_DIR, 'favicon-256.png'), await base.getBuffer('image/png'));

  // 多尺寸 ICO
  const sizes = [16, 32, 48, 64, 128, 256];
  const bufs = [];
  for (const size of sizes) {
    const buf = await base.clone().resize({ w: size, h: size }).getBuffer('image/png');
    bufs.push({ size, buf });
  }

  fs.writeFileSync(path.join(OUT_DIR, 'favicon.ico'), buildIco(bufs));
  console.log('已生成 favicon.ico 与 favicon-256.png');
})();
