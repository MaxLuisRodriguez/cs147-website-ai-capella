# Stanford Upload Script
# This script uploads your built site to Stanford's web server

param(
    [Parameter(Mandatory=$true)]
    [string]$SunetId
)

$RemotePath = "/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/"
$LocalPath = "dist"

Write-Host "Uploading to Stanford..." -ForegroundColor Cyan
Write-Host "Sunet ID: $SunetId" -ForegroundColor Yellow
Write-Host "Remote Path: $RemotePath" -ForegroundColor Yellow
Write-Host ""

# Check if dist directory exists
if (-Not (Test-Path $LocalPath)) {
    Write-Host "ERROR: dist/ directory not found!" -ForegroundColor Red
    Write-Host "Please run 'npm run build:stanford' first." -ForegroundColor Yellow
    exit 1
}

# Upload using SCP
Write-Host "Starting upload..." -ForegroundColor Green
Write-Host "You will be prompted for your Stanford password." -ForegroundColor Yellow
Write-Host ""

scp -r "${LocalPath}\*" "${SunetId}@corn.stanford.edu:${RemotePath}"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Upload completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your site should now be available at:" -ForegroundColor Cyan
    Write-Host "https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Upload failed. Please check:" -ForegroundColor Red
    Write-Host "1. Your SUNet ID is correct" -ForegroundColor Yellow
    Write-Host "2. You have access to the directory" -ForegroundColor Yellow
    Write-Host "3. Your SSH credentials are correct" -ForegroundColor Yellow
}


