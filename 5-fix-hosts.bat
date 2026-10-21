@echo off
chcp 65001 >nul 2>&1

rem 检查管理员权限，没有则自动提权
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo 需要管理员权限，即将弹出确认框，请点「是」...
    powershell -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

echo.
echo [1/3] 备份原 hosts 到 backup\hosts-backup-20261021.txt ...
copy /y "C:\Windows\System32\drivers\etc\hosts" "E:\MyWeb\blog\backup\hosts-backup-20261021.txt" >nul

echo [2/3] 写入修复版 hosts（已注释 27 条 github 指向本机的记录）...
copy /y "E:\MyWeb\blog\backup\hosts-modified.txt" "C:\Windows\System32\drivers\etc\hosts" >nul
if %errorlevel% neq 0 (
    echo 写入失败！
    pause
    exit /b 1
)

echo [3/3] 刷新 DNS 缓存 ...
ipconfig /flushdns >nul

echo.
echo ========================================
echo   完成！github 域名已恢复正常解析。
echo   现在去浏览器按 Ctrl+F5 刷新文章页，
echo   评论按钮就可以用了。
echo ========================================
echo.
pause
