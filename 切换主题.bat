@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
cd /d "%~dp0"

:menu
cls
echo ==========================================
echo          Zarek 博客 - 主题切换器
echo ==========================================
echo.
for /f "tokens=2 delims=: " %%a in ('findstr /b /c:"theme:" _config.yml') do set CURRENT=%%a
echo   当前主题: %CURRENT%
echo.
echo   [1] Fluid       简洁现代，Material Design，中文文档全
echo   [2] Butterfly   功能最全，样式丰富，社区活跃
echo   [3] NexT        经典简洁，沉稳，老牌主题
echo   [9] 重新生成并部署到 GitHub
echo   [0] 退出
echo.
set /p choice=请输入数字并回车:

if "%choice%"=="1" set THEME=fluid
if "%choice%"=="2" set THEME=butterfly
if "%choice%"=="3" set THEME=next
if "%choice%"=="9" goto deploy
if "%choice%"=="0" exit /b

if not defined THEME goto menu

echo.
echo [1/2] 切换主题为 %THEME% ...
powershell -NoProfile -Command "(Get-Content '_config.yml' -Raw) -replace 'theme: \w+', 'theme: %THEME%' | Set-Content '_config.yml' -NoNewline"
set THEME=

echo [2/2] 重新生成页面 ...
call npx hexo clean
call npx hexo generate

echo.
echo 完成！本地预览: http://localhost:4000
echo 如果预览没有变化，请重启预览服务（Ctrl+C 后重新运行 hexo server）
echo.
pause
goto menu

:deploy
echo.
echo 正在部署到 GitHub ...
call npx hexo clean
call npx hexo generate
call npx hexo deploy
echo.
echo 部署完成。等待 1-2 分钟后访问 https://lang2i.github.io
echo.
pause
goto menu
