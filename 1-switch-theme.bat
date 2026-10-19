@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"
echo.
echo  ===== Zarek Blog =====
echo.
echo  [1] Fluid      (current default)
echo  [2] Butterfly
echo  [3] NexT
echo.
set /p "T=Choose theme (1/2/3): "

if "%T%"=="1" set "N=fluid"
if "%T%"=="2" set "N=butterfly"
if "%T%"=="3" set "N=next"

if not defined N (
    echo Invalid choice.
    pause
    exit /b 1
)

echo.
echo Switching to %N% ...
node set-theme.js %N%
if errorlevel 1 (
    echo Failed to write config.
    pause
    exit /b 1
)

echo Building ...
call npx hexo clean
call npx hexo generate
if errorlevel 1 (
    echo Build failed.
    pause
    exit /b 1
)

echo.
echo Done. Theme is now %N%.
echo.
echo Next step: double-click 2-preview.bat to see it, or 3-deploy.bat to publish.
echo.
pause
