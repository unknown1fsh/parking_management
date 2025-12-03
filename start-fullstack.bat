@echo off
echo ========================================
echo Fullstack Uygulama Baslatiliyor...
echo ========================================
echo.
echo Backend ve Frontend birlikte baslatiliyor...
echo.

REM Backend'i yeni bir PowerShell penceresinde baslat
start "Backend - Parking Management" powershell -NoExit -Command "cd '%CD%\parking-management-system'; Write-Host 'Backend baslatiliyor...' -ForegroundColor Green; mvn spring-boot:run"

REM 5 saniye bekle (backend'in baslamasi icin)
timeout /t 5 /nobreak >nul

REM Frontend'i yeni bir PowerShell penceresinde baslat
start "Frontend - Parking Management" powershell -NoExit -Command "cd '%CD%\parking-management-system-react'; Write-Host 'Frontend baslatiliyor...' -ForegroundColor Cyan; $env:BROWSER='none'; npm start"

echo.
echo ========================================
echo Backend: http://localhost:8087
echo Frontend: http://localhost:3000
echo ========================================
echo.
echo Her iki uygulama da ayri pencerelerde baslatildi.
echo Kapatmak icin pencereleri kapatin veya kill-ports.bat kullanin.
echo.
pause

