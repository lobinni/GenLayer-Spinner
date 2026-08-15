# GenLayer Spinner — "The Adjudicator"

<div align="center">

![GenLayer Spinner](https://img.shields.io/badge/GenLayer-Spinner-110FFF?style=for-the-badge&labelColor=070707)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Format](https://img.shields.io/badge/Format-SVG%20%2B%20CSS-blue?style=flat-square)
![Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen?style=flat-square)

**A loading animation that IS GenLayer's protocol — not just shapes painted in brand colors.**

[Live Demo](#) · [GenLayer Portal](https://portal.genlayer.foundation) · [Brand Guidelines](https://genlayer.com/brand)

</div>

---

## 🎯 Mission Response

This spinner was designed for **[GenLayer Portal Mission #12](https://portal.genlayer.foundation/mission/12)** — creating a loading animation with GenLayer identity that will be used across the Portal in loading pages and loading states.

### Requirements Met

| Requirement | Implementation |
|-------------|----------------|
| ✅ Original animated spinner | "The Adjudicator" — a unique protocol visualization |
| ✅ Web-ready format | SVG + CSS keyframes (also works as React component) |
| ✅ Smooth infinite loop | Seamless animations with eased timing |
| ✅ Works on light/dark backgrounds | Tested on Carbon Void, Ceramic Node, and custom colors |
| ✅ Readable at small sizes | 16px minimum, scales to any size |
| ✅ GenLayer identity present | Every element maps to protocol mechanics |

---

## 🔥 What Makes It Unique

**No loading spinner in web3/blockchain does this.** It's not a generic spinner with GenLayer colors — it's GenLayer's actual Optimistic Democracy consensus mechanism visualized as motion design.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     ╭─────────────────────────────────────────────────╮     │
│     │           ⬡ HEXAGONAL FRAME                    │     │
│     │              (web3 network boundary)            │     │
│     │                                                 │     │
│     │         ╭───────────────────────╮              │     │
│     │         │   THREE G-ARCS        │              │     │
│     │         │   ("G" + 3 layers)    │              │     │
│     │         │                       │              │     │
│     │         │    ● ● ●              │              │     │
│     │         │  VALIDATOR NODES      │              │     │
│     │         │  (AI models orbiting) │              │     │
│     │         │                       │              │     │
│     │         │      ⬡ CENTER         │              │     │
│     │         │   (adjudication)      │              │     │
│     │         ╰───────────────────────╯              │     │
│     ╰─────────────────────────────────────────────────╯     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧬 Protocol Anatomy

Every visual element maps to a specific piece of GenLayer's architecture:

### ❶ Hexagonal Frame
- **Visual**: Faint dashed hexagon, slowly counter-rotating
- **Web3 Signal**: The blockchain geometric primitive (Ethereum, node graphs)
- **GenLayer Signal**: Network boundary with data flowing through

### ❷ Three G-Arcs  
- **Visual**: Three concentric 280° arcs with 80° gap, rotating independently
- **Identity**: The **"G"** letterform (gap = the letter opening)
- **Protocol**: Three **protocol layers** processing at different speeds

### ❸ Validator Nodes
- **Visual**: Three dots orbiting each ring at independent speeds
- **Web3 Signal**: Decentralized nodes computing
- **GenLayer Signal**: AI validators (Claude, GPT, Gemini, Llama, Mistral...) processing per layer

### ❹ Center Pulse
- **Visual**: Tiny hexagonal dot + radiating ring every ~5 seconds
- **GenLayer Signal**: The **adjudication point** — consensus flash = finality achieved

### The Narrative in Motion

1. **Arcs rotate independently** → layers processing asynchronously
2. **Nodes orbit at different speeds** → validators compute independently (Optimistic Democracy)
3. **Every ~5s all nodes flash + center pulses** → **consensus reached**
4. **When G-arc gaps align** → the "G" letterform reveals itself

---

## 🎨 Brand Alignment

Built on GenLayer's **Autonomous Core** palette:

| Color | Hex | Usage |
|-------|-----|-------|
| **Kinetic Cobalt** | `#110FFF` | The spinner's sole color — zero visual noise |
| **Carbon Void** | `#070707` | Default dark background |
| **Ceramic Node** | `#F8F8FA` | Light surface support |

---

## 📦 Three Variants

### 1. The Adjudicator (Primary)
Full protocol visualization with hexagonal frame, G-arcs, validator nodes, and consensus pulse.
**Use for**: Page loading, hero states, primary loading indicators.

### 2. Consensus
Three arcs breathing open/closed around a central adjudication dot.
**Use for**: Transaction processing, awaiting confirmation states.

### 3. Validators
Five dots orbiting a hexagonal center at independent speeds.
**Use for**: Inline indicators, button loading states, minimal contexts.

---

## 🚀 Usage

### React Component

```tsx
import GenLayerSpinner from './components/GenLayerSpinner';

// Primary — The Adjudicator
<GenLayerSpinner />

// With options
<GenLayerSpinner
  size="lg"              // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  variant="mark"         // 'mark' | 'consensus' | 'nodes'
  color="#110FFF"        // Kinetic Cobalt (default)
  glow={true}            // Optional glow for hero use
  label="Loading…"       // ARIA label
/>

// Examples
<GenLayerSpinner size="xl" variant="mark" glow />     // Hero loading
<GenLayerSpinner size="xs" variant="nodes" />         // Button loading
<GenLayerSpinner size="sm" variant="consensus" />     // Processing state
<GenLayerSpinner color="#ffffff" />                   // On Cobalt backgrounds
```

### Standalone SVG

Copy the SVG code directly from the showcase page or use the exported files in `/public/svg/`.

```html
<!-- Drop into any HTML -->
<svg width="40" height="40" viewBox="0 0 50 50">
  <!-- See full SVG in showcase or exported files -->
</svg>
```

### Size Presets

| Size | Pixels | Use Case |
|------|--------|----------|
| `xs` | 16px | Inline text, table cells |
| `sm` | 24px | Buttons, small cards |
| `md` | 40px | Cards, section loading |
| `lg` | 56px | Modal loading, larger contexts |
| `xl` | 80px | Page loading, hero states |

---

## 🛠 Technical Specifications

| Spec | Value |
|------|-------|
| **Format** | SVG + CSS keyframes |
| **Dependencies** | Zero — pure CSS animations |
| **Loop** | Infinite seamless |
| **Min size** | 16px (readable) |
| **Browser support** | All modern browsers |
| **Accessibility** | `role="status"`, `aria-label`, `sr-only` text |
| **Reduced motion** | Respects `prefers-reduced-motion` |

---

## 📁 Project Structure

```
genlayer-spinner/
├── src/
│   ├── components/
│   │   └── GenLayerSpinner.tsx    # React component
│   ├── App.tsx                     # Showcase page
│   ├── index.css                   # All CSS animations
│   └── main.tsx                    # Entry point
├── public/
│   └── svg/                        # Exported standalone SVGs
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

---

## 🏃 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📤 Export Options

### 1. React Component
Copy `src/components/GenLayerSpinner.tsx` and `src/index.css` (animation keyframes).

### 2. Standalone SVG
Use the "Copy SVG" button in the showcase, or see the `getSvg()` function in `App.tsx`.

### 3. CSS Classes Only
Extract the keyframe animations from `src/index.css` for use with your own SVG.

---

## 🎯 Design Decisions

### Why hexagonal frame?
The hexagon is blockchain's geometric DNA — from Ethereum's logo to every network visualization. It instantly signals "web3" without explanation.

### Why three arcs?
GenLayer has a layered protocol architecture. Three concentric arcs = three layers. The 280° arc with 80° gap creates the "G" letterform when gaps align.

### Why orbiting nodes?
GenLayer's Optimistic Democracy uses multiple AI validators (Claude, GPT, Gemini, Llama, Mistral, DeepSeek, Qwen) that compute independently. The orbiting dots at different speeds visualize this.

### Why center pulse?
The adjudication moment — when validators reach consensus and finality is achieved. The pulse radiates outward = decision propagating through the network.

### Why single color?
GenLayer's brand guidelines specify "Autonomous Core" — "stark, high-contrast primary core, stripped of all visual noise." One color. Maximum signal.

---

## 📜 License

MIT License — Free to use in the GenLayer Portal and community projects.

---

## 🙏 Credits

- **Design & Development**: Community contribution for GenLayer Portal Mission #12
- **Brand Reference**: [GenLayer Brand Guidelines](https://genlayer.com/brand)
- **Protocol Reference**: [GenLayer Documentation](https://docs.genlayer.com)

---

<div align="center">

**Built for GenLayer Portal**

Kinetic Cobalt `#110FFF` · Carbon Void `#070707` · The Adjudicator

[GenLayer](https://genlayer.com) · [Portal](https://portal.genlayer.foundation) · [Docs](https://docs.genlayer.com)

</div>
