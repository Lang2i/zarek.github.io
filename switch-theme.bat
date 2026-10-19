@echo off
chcp 65001 >nul 2>&1
setlocal
cd /d "%~dp0"

:menu
cls
echo ==========================================
echo      Zarek Blog - Theme Switcher
echo ==========================================
echo.
for /f "tokens=2 delims=:" %%a in ('findstr /b /c:"theme:" _config.yml') do set CURRENT=%%a
echo   Current theme:%CURRENT%
echo.
echo   [1] Fluid       - clean modern, Material Design
echo   [2] Butterfly   - featured, colorful
echo   [3] NexT        - classic, simple
echo.
echo   [8] Preview site locally  (http://localhost:4000)
echo   [9] Build and deploy to GitHub
echo   [0] Exit
echo.
set "choice="
set /p "choice=Enter number: "

if "%choice%"=="1" set "THEME=fluid"
if "%choice%"=="2" set "THEME=butterfly"
if "%choice%"=="3" set "THEME=next"
if "%choice%"=="8" goto preview
if "%choice%"=="9" goto deploy
if "%choice%"=="0" exit /b
if not defined THEME goto menu

echo.
echo Switching theme to %THEME% ...
node set-theme.js %THEME%
set "THEME="
echo Regenerating pages ...
call npx hexo clean >nul 2>&1
call npx hexo generate
echo.
echo Done. Run [8] to preview, or [9] to deploy.
echo.
pause
goto menu

:preview
echo.
echo Local preview: http://localhost:4000
echo Press Ctrl+C to stop.
echo.
call npx hexo server -p 4000
goto menu

:deploy
echo.
echo Building and deploying to GitHub ...
call npx hexo clean >nul 2>&1
call npx hexo generate
call npx hexo deploy
echo.
echo Finished. Visit https://lang2i.github.io in 1-2 minutes.
echo.
pause
goto menu
