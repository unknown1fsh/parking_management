@echo off
echo ========================================
echo Port Kapatma Islemleri
echo ========================================
echo.

REM Port 8087 (Backend)
echo Port 8087 (Backend) kapatiliyor...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8087 ^| findstr LISTENING') do (
    echo Process %%a sonlandiriliyor...
    taskkill /F /PID %%a >nul 2>&1
)

REM Port 3000 (Frontend)
echo Port 3000 (Frontend) kapatiliyor...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    echo Process %%a sonlandiriliyor...
    taskkill /F /PID %%a >nul 2>&1
)

REM Port 4200
echo Port 4200 kapatiliyor...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :4200 ^| findstr LISTENING') do (
    echo Process %%a sonlandiriliyor...
    taskkill /F /PID %%a >nul 2>&1
)

REM Port 8080
echo Port 8080 kapatiliyor...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080 ^| findstr LISTENING') do (
    echo Process %%a sonlandiriliyor...
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo ========================================
echo Port kapatma islemi tamamlandi.
echo ========================================
pause

