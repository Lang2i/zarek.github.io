@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

echo.
echo  ===== 添加照片 =====
echo.
echo  把图片文件直接拖到这个窗口，然后回车；也可以手动输入完整路径。
echo.

set "IMG="
set /p "IMG=图片路径: "
if "%IMG%"=="" goto cancel

rem 去掉拖拽时可能带的引号
set IMG=%IMG:"=%

echo.
set "TITLE="
set /p "TITLE=标题（可留空）: "

echo.
if "%TITLE%"=="" (
    node add-photo.js "%IMG%"
) else (
    node add-photo.js "%IMG%" "%TITLE%"
)

if errorlevel 1 (
    echo.
    echo 添加失败，检查上面的提示。
    pause
    exit /b 1
)

echo.
echo 是否立即发布到线上？(Y/N)
set "GO="
set /p "GO=选择: "
if /i "%GO%"=="Y" (
    call npx hexo clean
    call npx hexo generate
    node deploy.js
    git add -A
    git commit -m "photo: 添加摄影作品" 2>nul
    git push
    echo.
    echo 已发布，刷新 https://lang2i.github.io/zarek.github.io/photography/ 查看
) else (
    echo.
    echo 已保存到本地，下次运行 3-deploy.bat 时会一起发布。
)
echo.
pause
exit /b 0

:cancel
echo 已取消。
pause
