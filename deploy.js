const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

function run(cmd, opts = {}) {
  console.log('  > ' + cmd);
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

const root = __dirname;
const publicDir = path.join(root, 'public');
const repo = 'git@github.com:Lang2i/zarek.github.io.git';
const branch = 'gh-pages';

if (!fs.existsSync(publicDir)) {
  console.error('public folder not found. Run hexo generate first.');
  process.exit(1);
}

// 在临时目录里建一个干净的 git 仓库，避免 hexo deploy 的 .deploy_git 批量删除问题
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'hexo-deploy-'));

console.log('\n[1/4] Preparing temp repo: ' + tmp);

// 复制 public 内容到临时目录
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, item.name);
    const d = path.join(dest, item.name);
    if (item.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}
copyDir(publicDir, tmp);

console.log('\n[2/4] Init git and commit');
run('git init -b ' + branch, { cwd: tmp });
run('git add -A', { cwd: tmp });
run('git -c user.name="Zarek" -c user.email="2071816969@qq.com" commit -m "Site updated: ' + new Date().toISOString() + '"', { cwd: tmp });

console.log('\n[3/4] Push to ' + branch);
run('git remote add origin ' + repo, { cwd: tmp });
run('git push -f origin ' + branch, { cwd: tmp });

console.log('\n[4/4] Cleaning up');
fs.rmSync(tmp, { recursive: true, force: true });

console.log('\nDeploy finished.');
