@echo off
chcp 65001 >nul 2>&1
cd /d "%~dp0"

set PORT=4000
set /a TRIES=0

:findport
netstat -ano | findstr ":%PORT% " | findstr "LISTENING" >nul 2>&1
if not errorlevel 1 (
    set /a TRIES+=1
    if %TRIES% GEQ 10 (
        echo Ports 4000-4009 are all busy. Close some other programs and retry.
        pause
        exit /b 1
    )
    set /a PORT+=1
    goto findport
)

echo.
echo  Starting local preview ...
echo  Open in browser:  http://localhost:%PORT%
echo.
echo  Keep this window open. Press Ctrl+C to stop.
echo.
call npx hexo server -p %PORT%
echo.
echo  Preview stopped.
pause
