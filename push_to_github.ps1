param(
    [string]$RepoName = "tanmayikt98-coder.github.io"
)

$git = "C:\Users\Nisarga Gowda\.gemini\antigravity-ide\scratch\mingit\cmd\git.exe"
if (-not (Test-Path $git)) { $git = "git" }
$dir = $PSScriptRoot
if (-not $dir) { $dir = $pwd.Path }
$url = "https://github.com/tanmayikt98-coder/$RepoName.git"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " Pushing Tanmayi K T Portfolio to GitHub" -ForegroundColor Cyan
Write-Host " Target: $url" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Set local git identity
& $git -C $dir config user.email "tanmayikt98@gmail.com"
& $git -C $dir config user.name "Tanmayi K T"

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
    Write-Host "`n(Wait 30-60 seconds for GitHub to build, then refresh your site!)" -ForegroundColor White
} else {
    Write-Host "`n--------------------------------------------------" -ForegroundColor Yellow
    Write-Host " Notice: Git returned an authentication error." -ForegroundColor Yellow
    Write-Host " If it says 'Permission denied to tejas448866':" -ForegroundColor White
    Write-Host " Your Windows PC is currently signed in to GitHub as 'tejas448866'." -ForegroundColor White
    Write-Host " Option A: Add 'tejas448866' as collaborator on GitHub repo" -ForegroundColor Cyan
    Write-Host " Option B: Sign in with a Personal Access Token (PAT)" -ForegroundColor Cyan
    Write-Host "--------------------------------------------------" -ForegroundColor Yellow
}
pause
