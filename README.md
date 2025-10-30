# CS147 AI-Capella Team Website

A modern portfolio website built with React, TypeScript, and Tailwind CSS to showcase our CS147 team assignments and members.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **GitHub Pages** - Hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/cs147-website-ai-capella.git
cd cs147-website-ai-capella
```

2. Install dependencies:
```bash
npm install
```

## 🛠️ Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push to the `main` branch
4. Your site will be live at: `https://YOUR_USERNAME.github.io/cs147-website-ai-capella/`

**Manual GitHub Pages deployment:**
```bash
npm run deploy
```

### Stanford Web Server Deployment

To deploy to Stanford's web server:

1. **Build for Stanford:**
   ```bash
   npm run build:stanford
   ```
   Or use the deployment script (Windows):
   ```powershell
   .\deploy-stanford.ps1
   ```

2. **Upload files** to Stanford using SCP, SFTP, or SSH. See `DEPLOY_STANFORD.md` for detailed instructions.

3. Your site will be live at:
   `https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/AICapella/`

**Note:** The build process automatically configures the correct base paths for each deployment target.

## 📝 Customization

### Update Team Information

Edit `src/components/Team.tsx` to add or modify team member information:

```typescript
const teamMembers: TeamMember[] = [
  {
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio...',
    github: 'https://github.com/yourusername'
  },
  // Add more team members...
]
```

### Update Assignments

Edit `src/components/Assignments.tsx` to add or modify assignments:

```typescript
const assignments: Assignment[] = [
  {
    title: 'Assignment Title',
    description: 'Assignment description...',
    dueDate: 'Week X',
    status: 'completed', // 'completed' | 'in-progress' | 'upcoming'
    link: 'link-to-assignment'
  },
  // Add more assignments...
]
```

### Modify Styling

The site uses Tailwind CSS. You can customize the theme in `tailwind.config.js` or modify component styles directly in the component files.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Team

AI-Capella - CS147 Team

---

Built with ❤️ by the AI-Capella Team
