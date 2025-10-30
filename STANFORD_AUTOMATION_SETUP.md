# Setting Up Automated Stanford Deployment

This guide will help you set up GitHub Actions to automatically deploy to Stanford whenever you push to GitHub.

## Prerequisites

1. **SSH Key Pair** - You need an SSH key set up for Stanford
2. **GitHub Repository** - Your code must be in a GitHub repository
3. **GitHub Secrets** - You'll store your credentials securely in GitHub

## Step 1: Generate SSH Key (if you don't have one)

If you don't already have an SSH key for Stanford:

1. **On your local machine, generate a key:**
   ```powershell
   ssh-keygen -t rsa -b 4096 -C "your_email@stanford.edu"
   ```
   - Press Enter to accept default location
   - **Don't set a passphrase** (for automation)
   - This creates `~/.ssh/id_rsa` (private) and `~/.ssh/id_rsa.pub` (public)

2. **Copy your public key to Stanford:**
   ```powershell
   type $env:USERPROFILE\.ssh\id_rsa.pub | ssh maxlr@myth.stanford.edu "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
   ```

3. **Test the connection:**
   ```powershell
   ssh maxlr@myth.stanford.edu
   ```
   Should connect without asking for a password.

## Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**

### Add these two secrets:

**Secret 1: `STANFORD_SSH_KEY`**
- **Name:** `STANFORD_SSH_KEY`
- **Value:** Copy the contents of your **private key** (`id_rsa` file)
  - On Windows: `Get-Content $env:USERPROFILE\.ssh\id_rsa`
  - Copy the entire output including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`

**Secret 2: `STANFORD_SUNET_ID`**
- **Name:** `STANFORD_SUNET_ID`
- **Value:** Your Stanford SUNet ID (e.g., `maxlr`)

## Step 3: Verify the Workflow

1. The workflow file `.github/workflows/deploy-stanford.yml` is already created
2. Push any change to `main` branch
3. Check the **Actions** tab in GitHub to see if it runs successfully

## How It Works

- **Automatic:** Every push to `main` will deploy to Stanford
- **Manual:** You can also manually trigger it from the Actions tab
- **Smart:** Only triggers on code changes (not when only build files change)

## Troubleshooting

### "Permission denied" error
- Make sure your SSH key is added to Stanford's authorized_keys
- Verify the SSH key secret is correct in GitHub

### "Host key verification failed"
- The workflow includes `ssh-keyscan` to handle this automatically

### Deployments not triggering
- Check that you're pushing to the `main` branch
- Verify the workflow file is in `.github/workflows/`

## Manual Override

If automation fails, you can always deploy manually:
```powershell
npm run build:stanford
scp -r "dist\*" maxlr@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/DesigningVoiceAIforEverydayValue/AICapella/
```


