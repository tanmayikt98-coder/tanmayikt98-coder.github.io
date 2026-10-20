param(
    [string]$RepoName = "tanmayikt98-coder.github.io"
)

$git = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe"
if (-not (Test-Path $git)) { $git = "git" }
$dir = $PSScriptRoot
if (-not $dir) { $dir = $pwd.Path }
$url = "https://github.com/tanmayikt98-coder/$RepoName.git"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " Pushing Tanmayi K T Portfolio to GitHub: $RepoName" -ForegroundColor Cyan
Write-Host " Remote: $url" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Check git init
if (-not (Test-Path "$dir\.git")) {
    & $git -C $dir init
}

& $git -C $dir remote remove origin 2>$null
& $git -C $dir remote add origin $url
& $git -C $dir branch -M main

Write-Host "`nStaging all files..." -ForegroundColor Yellow
& $git -C $dir add -A
& $git -C $dir commit -m "Deploy Tanmayi K T Cinematic Portfolio to GitHub Pages" 2>$null

Write-Host "`nExecuting: git push origin main --force..." -ForegroundColor Yellow
& $git -C $dir push origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n==================================================" -ForegroundColor Green
    Write-Host " [SUCCESS] Portfolio successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host " Live Repository: https://github.com/tanmayikt98-coder/$RepoName" -ForegroundColor Green
    Write-Host " Live Website:    https://tanmayikt98-coder.github.io/" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host "`n(Wait 30-60 seconds for GitHub to build, then visit your live link!)" -ForegroundColor White
} else {
    Write-Host "`n[NOTICE] If push failed, ensure you created the repo at:" -ForegroundColor Yellow
    Write-Host "https://github.com/new with name: $RepoName" -ForegroundColor Cyan
}
pause
