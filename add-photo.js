const fs = require('fs');
const path = require('path');

const PHOTO_DIR = path.join(__dirname, 'source/photos');
const MANIFEST = path.join(PHOTO_DIR, 'photos.json');

function readJson() {
  try {
    const raw = fs.readFileSync(MANIFEST, 'utf8').replace(/^\uFEFF/, '').trim();
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveJson(list) {
  fs.writeFileSync(MANIFEST, JSON.stringify(list, null, 2) + '\n', 'utf8');
}

function today() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

const args = process.argv.slice(2);
if (!args.length) {
  console.log('用法: node add-photo.js <图片路径> ["标题"]');
  process.exit(1);
}

const srcPath = path.resolve(args[0]);
const title = args[1] || path.basename(srcPath, path.extname(srcPath));

if (!fs.existsSync(srcPath)) {
  console.error('找不到文件: ' + srcPath);
  process.exit(1);
}

const ext = path.extname(srcPath).toLowerCase();
const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];
if (!allowed.includes(ext)) {
  console.error('不支持的格式: ' + ext + '（支持 jpg/png/webp/gif/avif）');
  process.exit(1);
}

// 文件名：日期-序号-原名，避免重名冲突
fs.mkdirSync(PHOTO_DIR, { recursive: true });
const list = readJson();
const stamp = today().replace(/-/g, '');
let name = `${stamp}-${String(list.length + 1).padStart(2, '0')}${ext}`;
let guard = 1;
while (fs.existsSync(path.join(PHOTO_DIR, name))) {
  name = `${stamp}-${String(list.length + 1).padStart(2, '0')}-${guard}${ext}`;
  guard++;
}

fs.copyFileSync(srcPath, path.join(PHOTO_DIR, name));

list.push({
  src: name,
  title: title,
  date: today()
});
saveJson(list);

const sizeKb = Math.round(fs.statSync(path.join(PHOTO_DIR, name)).size / 1024);
console.log(`已添加: ${name}  (${sizeKb} KB)`);
console.log(`标题: ${title}`);
console.log(`当前共 ${list.length} 张照片`);
