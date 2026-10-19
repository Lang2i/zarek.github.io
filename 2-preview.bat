@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
echo.
echo  Starting local preview ...
echo  Open this in your browser: http://localhost:4000
echo.
echo  Keep this window open. Press Ctrl+C to stop.
echo.
call npx hexo server -p 4000
pause
