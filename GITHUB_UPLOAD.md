# 📤 Upload to GitHub

## Option 1: New Repository (Recommended)

### Step 1: Create repository on GitHub
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `genlayer-spinner`
3. Description: `"The Adjudicator" — GenLayer loading spinner with protocol identity`
4. Choose: Public
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push from local

```bash
# Navigate to project directory
cd /path/to/your/project

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "🎨 GenLayer Spinner - The Adjudicator

A loading animation that IS GenLayer's protocol:
- Hexagonal frame (web3 network boundary)
- Three G-arcs (letterform + layered architecture)
- Validator nodes (AI models computing per layer)
- Center pulse (adjudication / consensus moment)

Built for GenLayer Portal Mission #12
https://portal.genlayer.foundation/mission/12"

# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/genlayer-spinner.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Option 2: Using GitHub CLI

```bash
# Install GitHub CLI if not installed
# macOS: brew install gh
# Windows: winget install GitHub.cli
# Linux: See https://cli.github.com/

# Authenticate
gh auth login

# Create repo and push in one command
gh repo create genlayer-spinner --public --description "The Adjudicator — GenLayer loading spinner" --source=. --push
```

---

## Option 3: Upload via GitHub Web Interface

1. Create new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all project files
4. Commit directly to main branch

---

## 📁 Files to Include

```
genlayer-spinner/
├── src/
│   ├── components/
│   │   └── GenLayerSpinner.tsx    ✅
│   ├── App.tsx                     ✅
│   ├── index.css                   ✅
│   ├── main.tsx                    ✅
│   └── utils/
│       └── cn.ts                   ✅
├── public/
│   └── svg/
│       ├── genlayer-spinner-mark.svg       ✅
│       ├── genlayer-spinner-consensus.svg  ✅
│       └── genlayer-spinner-nodes.svg      ✅
├── index.html                      ✅
├── package.json                    ✅
├── tsconfig.json                   ✅
├── vite.config.ts                  ✅
├── README.md                       ✅
├── .gitignore                      ✅
└── GITHUB_UPLOAD.md                ✅ (this file)
```

---

## 🏷️ Suggested Topics/Tags

Add these topics to your repository for discoverability:

```
genlayer
web3
blockchain
spinner
loading-animation
react
typescript
svg
css-animation
design-system
```

---

## 📝 After Upload

1. **Enable GitHub Pages** (optional):
   - Settings → Pages → Source: Deploy from a branch
   - Branch: main, folder: /dist
   - Your spinner showcase will be live at `https://YOUR_USERNAME.github.io/genlayer-spinner`

2. **Add repository URL to your Portal Mission submission**

3. **Share the standalone SVG files** — they work anywhere without dependencies

---

## 🔗 Useful Links

- [GenLayer Portal Mission #12](https://portal.genlayer.foundation/mission/12)
- [GenLayer Brand Guidelines](https://genlayer.com/brand)
- [GenLayer Documentation](https://docs.genlayer.com)
