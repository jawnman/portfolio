@echo off
echo ==========================================
echo    UPLOADING TO GITHUB
echo ==========================================

:: Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed. Please install it first.
    pause
    exit /b
)

echo.
echo I've already prepared your files locally!
echo.
echo NOW DO THIS:
echo 1. Go to https://github.com/new and create a repository named 'nick-roehm-portfolio'.
echo 2. Copy the URL (it looks like https://github.com/YOUR_USERNAME/nick-roehm-portfolio.git)
echo.

set /p REPO_URL="Paste your GitHub Repository URL here: "

if "%REPO_URL%"=="" (
    echo No URL entered. Exiting.
    pause
    exit /b
)

echo.
echo Pushing to GitHub...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo DONE! Your site is now on GitHub.
pause
