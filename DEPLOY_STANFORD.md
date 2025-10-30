# Deploying to Stanford Web Server

This guide will help you deploy your website to Stanford's web server so it appears at:
`https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/`

## Prerequisites

1. **Stanford SUNet ID** - You need to have access to Stanford's AFS (Andrew File System)
2. **SSH Access** - You need to be able to SSH to Stanford's servers
3. **Directory Access** - Verify you have write access to the target directory

## Step 1: Build for Stanford

Build your website with the Stanford-specific configuration:

```bash
npm run build:stanford
```

This will create a production build in the `dist/` directory with all assets correctly configured for the Stanford path.

## Step 2: Upload to Stanford Server

You'll need to upload the contents of the `dist/` directory to Stanford's web server. The target path is:

```
/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
```

### Method 1: Using SCP (Recommended)

**From Windows PowerShell:**

```powershell
# Navigate to your project directory
cd C:\Users\maxlr\OneDrive\Desktop\cs147-website-ai-capella

# Build for Stanford first
npm run build:stanford

# Upload all files from dist/ to Stanford
scp -r dist/* your_sunet@corn.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
```

**From Mac/Linux Terminal:**

```bash
# Navigate to your project directory
cd /path/to/cs147-website-ai-capella

# Build for Stanford first
npm run build:stanford

# Upload all files from dist/ to Stanford
scp -r dist/* your_sunet@corn.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
```

**Note:** Replace `your_sunet` with your actual Stanford SUNet ID.

### Method 2: Using SFTP Client

1. Connect to Stanford's server using an SFTP client (like FileZilla, WinSCP, or VS Code's SFTP extension)
2. **Host:** `corn.stanford.edu`
3. **Username:** Your SUNet ID
4. **Port:** 22
5. Navigate to: `/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/`
6. Upload all files from your local `dist/` directory

### Method 3: Using VS Code Remote SSH

If you have VS Code with the Remote SSH extension:

1. Connect to `corn.stanford.edu` with your SUNet ID
2. Navigate to `/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/`
3. Use VS Code's file explorer to copy files from your local `dist/` directory

## Step 3: Set Correct Permissions

After uploading, you may need to set correct file permissions. SSH to Stanford and run:

```bash
ssh your_sunet@corn.stanford.edu
cd /afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
chmod -R 755 .
chmod 644 *.html *.css *.js *.json *.svg
```

Or if using AFS access control:
```bash
fs sa . system:anyuser rl
```

## Step 4: Verify Deployment

After uploading, visit:
`https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/`

Make sure:
- The homepage loads correctly
- All images and assets are loading
- Navigation links work properly
- PDF files in Assignment folders are accessible

## Troubleshooting

### Files Not Appearing

- Check that you uploaded to the correct directory path
- Verify file permissions (they should be readable by web server)
- Check if there's an `index.html` file in the root of the Stanford directory

### Assets Not Loading (404 errors)

- Ensure you built with `npm run build:stanford` (not just `npm run build`)
- Check browser console for specific 404 errors
- Verify asset paths in the built HTML files

### Permission Denied

- Make sure you have write access to the directory
- Contact the CS147 course staff if you need directory access
- Verify you're using the correct AFS path

### Path Issues

If links or assets aren't working, double-check:
- You used `npm run build:stanford` for the build
- The `dist/` folder contains files with correct paths
- All relative paths in your code reference from the Stanford base path

## Updating Your Site

To update your site after making changes:

1. Make your code changes
2. Run `npm run build:stanford`
3. Upload only the changed files (or re-upload everything if unsure)

You can use `rsync` for more efficient updates:

```bash
rsync -avz --delete dist/ your_sunet@corn.stanford.edu:/afs/ir/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/
```

## Need Help?

- Stanford IT Services: https://itservices.stanford.edu/
- CS147 Course Staff
- Stanford Web Services Documentation


