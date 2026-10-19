@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
echo.
echo  [1/3] Cleaning ...
call npx hexo clean
if errorlevel 1 goto fail

echo.
echo  [2/3] Generating pages ...
call npx hexo generate
if errorlevel 1 goto fail

echo.
echo  [3/3] Publishing to GitHub ...
node deploy.js
if errorlevel 1 goto fail

echo.
echo  Saving source code to main branch ...
git add -A
git commit -m "update: publish site" 2>nul
git push

echo.
echo  ==========================================
echo   Done. Visit https://lang2i.github.io
echo   (Pages may take 1-2 minutes to rebuild)
echo  ==========================================
echo.
pause
exit /b 0

:fail
echo.
echo  Deploy failed. Check the error above.
echo.
pause
exit /b 1
