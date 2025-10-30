# Upload Instructions for Stanford

## Prerequisites

1. **Connect to Stanford VPN** (if you're off-campus)
   - Download Stanford VPN client if needed
   - Connect using your SUNet credentials
   - Visit: https://uit.stanford.edu/service/vpn

2. **Verify your SUNet ID** - Your username appears to be `maxlr` based on your Windows path

## Upload Methods

### Method 1: SCP Command (Requires VPN if off-campus)

**Option A: If corn.stanford.edu doesn't work, try these alternatives:**

```powershell
# Try these hostnames in order:
scp -r dist/* maxlr@corn.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/

# Or try:
scp -r dist/* maxlr@sweetpotato.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/

# Or try:
scp -r dist/* maxlr@cardinal.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
```

**Option B: Use IP address (if hostname doesn't resolve):**

You can find the IP by running:
```powershell
nslookup corn.stanford.edu
```

Then use the IP instead of hostname.

### Method 2: WinSCP (GUI - Easiest)

1. Download WinSCP: https://winscp.net/eng/download.php
2. Create new connection:
   - **Protocol:** SFTP
   - **Host name:** Try one of these:
     - `corn.stanford.edu`
     - `sweetpotato.stanford.edu`
     - `cardinal.stanford.edu`
   - **Port:** 22
   - **User name:** `maxlr` (your SUNet ID)
   - **Password:** Your Stanford password
3. Navigate to: `/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/`
4. Drag and drop all files from `dist/` folder

### Method 3: VS Code SFTP Extension

If you use VS Code:
1. Install "SFTP" extension by Natizyskunk
2. Update `.vscode/sftp.json` with your SUNet ID
3. Right-click `dist/` folder → "Upload Folder"

### Method 4: SSH and Manual Copy

1. SSH to Stanford:
   ```powershell
   ssh maxlr@corn.stanford.edu
   ```

2. Once connected, navigate to the directory:
   ```bash
   cd /afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
   ```

3. In a separate PowerShell window, upload files:
   ```powershell
   scp -r dist/* maxlr@corn.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
   ```

## Troubleshooting

### "Could not resolve hostname"
- Connect to Stanford VPN first
- Try alternative hostnames (see Method 1, Option A)

### "Permission denied"
- Verify you have write access to the directory
- Contact CS147 course staff if needed

### "Connection refused"
- Make sure you're using port 22
- Check if SSH is enabled on your machine
- Try using Stanford VPN

## After Upload

1. Set permissions (SSH to Stanford and run):
   ```bash
   cd /afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
   chmod -R 755 .
   chmod 644 *.html *.css *.js *.json *.svg 2>/dev/null || true
   ```

2. Test your site:
   https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/


