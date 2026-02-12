@echo off
echo PREPARING FOR DEPLOYMENT...
echo ==========================================

:: 1. Try to clear any stale git locks
if exist .git\index.lock (
    echo Found stale lock file. Removing...
    del /F /Q .git\index.lock
)

:: 2. Initialize Git if not exists
if not exist .git (
    echo Initializing Git repository...
    git init
)

:: 3. Add all files
echo Adding files to stage...
git add .

:: 4. Commit using a timestamp
set "timestamp=%date% %time%"
echo Committing files...
git commit -m "Deployment Update: %timestamp%"

echo ==========================================
echo READY TO PUSH!
echo.
echo Next Steps:
echo 1. Create a new repository on GitHub.com
echo 2. Run the commands shown by GitHub, usually:
echo    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
echo    git branch -M main
echo    git push -u origin main
echo.
pause
