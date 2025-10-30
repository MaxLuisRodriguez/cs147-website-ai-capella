# Stanford Deployment Script for Windows
# This script builds and prepares your site for Stanford deployment

Write-Host "Building for Stanford deployment..." -ForegroundColor Cyan

# Build for Stanford
npm run build:stanford

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "`nBuild completed successfully!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Connect to Stanford server:" -ForegroundColor White
Write-Host "   ssh your_sunet@corn.stanford.edu" -ForegroundColor Gray
Write-Host "`n2. Navigate to target directory:" -ForegroundColor White
Write-Host "   cd /afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/" -ForegroundColor Gray
Write-Host "`n3. Upload files using one of these methods:" -ForegroundColor White
Write-Host "   Option A (SCP from PowerShell):" -ForegroundColor Cyan
Write-Host "   scp -r dist/* your_sunet@corn.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/" -ForegroundColor Gray
Write-Host "`n   Option B (Use an SFTP client like WinSCP or FileZilla)" -ForegroundColor Cyan
Write-Host "   Host: corn.stanford.edu" -ForegroundColor Gray
Write-Host "   Path: /afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/" -ForegroundColor Gray
Write-Host "`n4. After uploading, set permissions (if needed):" -ForegroundColor White
Write-Host "   chmod -R 755 ." -ForegroundColor Gray
Write-Host "`n5. Visit your site:" -ForegroundColor White
Write-Host "   https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/" -ForegroundColor Green
Write-Host "`nFiles are ready in the 'dist' directory." -ForegroundColor Green


