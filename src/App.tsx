import { useState } from 'react';
import GenLayerSpinner, {
  type SpinnerVariant,
  type SpinnerSize,
} from './components/GenLayerSpinner';

const COBALT = '#110FFF';

const SIZES: SpinnerSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const SIZE_PX: Record<SpinnerSize, string> = {
  xs: '16', sm: '24', md: '40', lg: '56', xl: '80',
};

export default function App() {
  const [v, setV] = useState<SpinnerVariant>('mark');
  const [copied, setCopied] = useState(false);

  const copy = (t: string) => {
    navigator.clipboard.writeText(t).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white antialiased">

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse 550px 400px at 50% 42%, rgba(17,15,255,0.09) 0%, transparent 70%)',
        }} />
        <div className="hex-grid-bg relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 py-20">
          {/* Badge */}
          <div className="mb-10 flex items-center gap-2.5 rounded-full border border-white/6 bg-white/[0.015] px-5 py-1.5">
            <HexIcon />
            <span className="text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">
              GenLayer Design System
            </span>
          </div>

          {/* Hero spinner */}
          <div className="relative mb-16">
            <div className="absolute inset-0 blur-3xl" style={{
              background: 'radial-gradient(circle, rgba(17,15,255,0.15) 0%, transparent 60%)',
              transform: 'scale(3.5)',
            }} />
            <GenLayerSpinner size={160} variant={v} glow />
          </div>

          {/* Title */}
          <h1 className="mb-5 text-center text-5xl font-black tracking-tight md:text-6xl lg:text-[4.5rem]">
            <span className="text-cobalt-gradient">The Adjudicator</span>
          </h1>
          <p className="mx-auto max-w-lg text-center text-[15px] leading-[1.7] text-white/30">
            A loading spinner that <em className="not-italic text-white/50">is</em> GenLayer's protocol in motion.
            Hexagonal network frame. Three G-arcs for layered architecture.
            Orbiting validator nodes. A consensus pulse at the center.
            <br/>
            <strong className="text-white/45">Nothing like it exists in web3.</strong>
          </p>

          {/* Variant tabs */}
          <div className="mt-10 flex gap-1 rounded-xl border border-white/5 bg-white/[0.015] p-1">
            {([
              ['mark', 'The Adjudicator'],
              ['consensus', 'Consensus'],
              ['nodes', 'Validators'],
            ] as [SpinnerVariant, string][]).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setV(key)}
                className={`rounded-lg px-5 py-2.5 text-[12px] font-bold tracking-wide transition-all duration-200 ${
                  v === key
                    ? 'bg-[#110FFF] text-white shadow-lg shadow-[#110FFF]/25'
                    : 'text-white/25 hover:text-white/45'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════ PROTOCOL ANATOMY ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Protocol anatomy</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
          Every element <em className="not-italic text-cobalt-gradient">is</em> the protocol
        </h2>
        <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/25">
          This isn't a spinner decorated with GenLayer's colors.
          It's GenLayer's Optimistic Democracy consensus mechanism — visualized as motion design.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/4 bg-white/4 md:grid-cols-2 lg:grid-cols-4">
          {/* Hexagonal Frame */}
          <div className="bg-[#08080a] p-7">
            <div className="mb-5 flex h-16 items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <polygon points="48,25 36.5,44.92 13.5,44.92 2,25 13.5,5.08 36.5,5.08"
                  stroke={COBALT} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" fill="none" />
              </svg>
            </div>
            <div className="mb-1 text-[9px] font-black tracking-[0.2em] uppercase" style={{ color: COBALT }}>
              ❶ Hexagonal frame
            </div>
            <h3 className="text-[13px] font-bold text-white">Network boundary</h3>
            <p className="mt-1.5 text-[11px] leading-[1.7] text-white/25">
              The hexagon is blockchain's geometric primitive — from Ethereum's logo to every node graph.
              It frames the spinner as unmistakably <strong className="text-white/40">web3</strong>.
              Slow counter-rotation + flowing dashes = data traversing the network.
            </p>
          </div>

          {/* G-Arcs */}
          <div className="bg-[#08080a] p-7">
            <div className="mb-5 flex h-16 items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="20" stroke={COBALT} strokeWidth="2.5" strokeLinecap="round"
                  strokeDasharray="97.74 27.93" strokeDashoffset="-13.96" opacity="0.85" />
                <circle cx="25" cy="25" r="14" stroke={COBALT} strokeWidth="2.5" strokeLinecap="round"
                  strokeDasharray="68.42 19.55" strokeDashoffset="-9.77" opacity="0.45" />
                <circle cx="25" cy="25" r="8" stroke={COBALT} strokeWidth="2.5" strokeLinecap="round"
                  strokeDasharray="39.10 11.17" strokeDashoffset="-5.58" opacity="0.2" />
                {/* Gap annotation */}
                <line x1="42" y1="18" x2="47" y2="13" stroke="white" strokeWidth="0.3" opacity="0.15" />
                <text x="42" y="12" fill="white" opacity="0.2" fontSize="2.8" fontFamily="Inter, sans-serif">"G"</text>
              </svg>
            </div>
            <div className="mb-1 text-[9px] font-black tracking-[0.2em] uppercase" style={{ color: COBALT }}>
              ❷ Three G-arcs
            </div>
            <h3 className="text-[13px] font-bold text-white">Letterform + Layers</h3>
            <p className="mt-1.5 text-[11px] leading-[1.7] text-white/25">
              280° arcs with 80° gap = the letter <strong className="text-white/40">"G"</strong>.
              Three concentric rings = three protocol <strong className="text-white/40">layers</strong>.
              Independent rotation: when gaps align, the G appears — that's <strong className="text-white/40">consensus</strong>.
            </p>
          </div>

          {/* Validator nodes */}
          <div className="bg-[#08080a] p-7">
            <div className="mb-5 flex h-16 items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="20" stroke={COBALT} strokeWidth="0.3" opacity="0.1" />
                <circle cx="25" cy="25" r="14" stroke={COBALT} strokeWidth="0.3" opacity="0.1" />
                <circle cx="25" cy="25" r="8" stroke={COBALT} strokeWidth="0.3" opacity="0.1" />
                <circle cx="45" cy="25" r="2.5" fill={COBALT} opacity="0.8" />
                <circle cx="18" cy="13" r="2.5" fill={COBALT} opacity="0.55" />
                <circle cx="33" cy="25" r="2.5" fill={COBALT} opacity="0.35" />
                <text x="2" y="49" fill="white" opacity="0.15" fontSize="2.5" fontFamily="Inter, sans-serif">CLAUDE · GPT · GEMINI</text>
              </svg>
            </div>
            <div className="mb-1 text-[9px] font-black tracking-[0.2em] uppercase" style={{ color: COBALT }}>
              ❸ Validator nodes
            </div>
            <h3 className="text-[13px] font-bold text-white">AI validators</h3>
            <p className="mt-1.5 text-[11px] leading-[1.7] text-white/25">
              One dot per layer — each represents a validator running a <strong className="text-white/40">different AI model</strong>.
              They orbit independently = decentralized computation.
              Every ~5s they flash together = the <strong className="text-white/40">quorum</strong> moment.
            </p>
          </div>

          {/* Center pulse */}
          <div className="bg-[#08080a] p-7">
            <div className="mb-5 flex h-16 items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="12" stroke={COBALT} strokeWidth="0.6" opacity="0.15" />
                <circle cx="25" cy="25" r="7" stroke={COBALT} strokeWidth="0.6" opacity="0.1" />
                <polygon points="27,25 26,26.73 24,26.73 23,25 24,23.27 26,23.27" fill={COBALT} opacity="0.6" />
              </svg>
            </div>
            <div className="mb-1 text-[9px] font-black tracking-[0.2em] uppercase" style={{ color: COBALT }}>
              ❹ Center pulse
            </div>
            <h3 className="text-[13px] font-bold text-white">Adjudication point</h3>
            <p className="mt-1.5 text-[11px] leading-[1.7] text-white/25">
              Tiny hexagonal dot at center = the <strong className="text-white/40">adjudication point</strong>.
              When validator nodes flash, a pulse radiates outward = <strong className="text-white/40">finality</strong>.
              The decision is made. Consensus achieved.
            </p>
          </div>
        </div>
      </section>


      {/* ═══════════ THREE VARIANTS ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Variants</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
          Three expressions, one protocol
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <VCard active={v === 'mark'} onClick={() => setV('mark')}
            title="The Adjudicator" badge="Primary"
            desc="Full protocol visualization: hexagonal frame, G-arcs, validator nodes, consensus pulse. Use as the default loading indicator across all Portal surfaces."
          >
            <GenLayerSpinner size={80} variant="mark" />
          </VCard>

          <VCard active={v === 'consensus'} onClick={() => setV('consensus')}
            title="Consensus" badge=""
            desc="Three arcs breathing open and closed around a central adjudication dot. When they close = consensus reached. Ideal for transaction processing states."
          >
            <GenLayerSpinner size={80} variant="consensus" />
          </VCard>

          <VCard active={v === 'nodes'} onClick={() => setV('nodes')}
            title="Validators" badge=""
            desc="Five validator dots orbiting a hexagonal center at independent speeds — like Claude, GPT, Gemini, Llama, Mistral computing asynchronously. For inline & button states."
          >
            <GenLayerSpinner size={80} variant="nodes" />
          </VCard>
        </div>
      </section>


      {/* ═══════════ BRAND PALETTE ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Autonomous Core</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
          One color. Zero noise.
        </h2>
        <p className="mt-3 max-w-md text-[14px] text-white/25">
          Kinetic Cobalt <code className="text-white/40 text-[12px] font-mono">#110FFF</code> — the sole hue.
          No gradients, no multi-color. Pure signal.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <ColorCard bg={COBALT} name="Kinetic Cobalt" hex="#110FFF" note="White spinner variant for branded backgrounds.">
            <GenLayerSpinner size="lg" variant={v} color="#fff" />
          </ColorCard>
          <ColorCard bg="#070707" name="Carbon Void" hex="#070707" note="Default Portal dark. Maximum contrast." border>
            <GenLayerSpinner size="lg" variant={v} />
          </ColorCard>
          <ColorCard bg="#F8F8FA" name="Ceramic Node" hex="#F8F8FA" note="Light surfaces. Cobalt stays vivid.">
            <GenLayerSpinner size="lg" variant={v} />
          </ColorCard>
        </div>

        {/* Background stress test */}
        <div className="mt-5 grid grid-cols-6 gap-2">
          {['#000', '#0a0a0f', '#0f172a', '#1e1b4b', '#e2e8f0', '#fff'].map((bg) => (
            <div key={bg} className="flex flex-col items-center gap-2 rounded-xl py-5"
              style={{ backgroundColor: bg, border: `1px solid ${bg > '#ccc' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)'}` }}>
              <GenLayerSpinner size="md" variant={v} />
              <code className="text-[8px] font-mono" style={{ color: bg > '#ccc' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.1)' }}>
                {bg}
              </code>
            </div>
          ))}
        </div>
      </section>


      {/* ═══════════ SIZES ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Scale</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
          16 px → 80 px
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/4 bg-[#08080a] p-8">
            <span className="text-[9px] font-black tracking-[0.2em] text-white/15 uppercase">On Carbon Void</span>
            <div className="mt-6 flex items-end justify-around">
              {SIZES.map((s) => (
                <div key={s} className="flex flex-col items-center gap-3">
                  <GenLayerSpinner size={s} variant={v} />
                  <span className="text-[8px] font-mono text-white/12">{SIZE_PX[s]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-8">
            <span className="text-[9px] font-black tracking-[0.2em] text-black/15 uppercase">On Ceramic Node</span>
            <div className="mt-6 flex items-end justify-around">
              {SIZES.map((s) => (
                <div key={s} className="flex flex-col items-center gap-3">
                  <GenLayerSpinner size={s} variant={v} />
                  <span className="text-[8px] font-mono text-black/12">{SIZE_PX[s]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════ IN CONTEXT ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Integration</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
          Inside the Portal
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Full page */}
          <div className="glass-card overflow-hidden rounded-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/4 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/8" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/8" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/8" />
              <span className="mx-auto h-1.5 w-16 rounded bg-white/4" />
            </div>
            <div className="flex h-56 flex-col items-center justify-center gap-4 bg-[#040406]">
              <GenLayerSpinner size="xl" variant="mark" glow />
              <span className="text-[10px] font-medium text-white/15">Loading Portal…</span>
            </div>
            <div className="border-t border-white/4 px-4 py-2.5">
              <span className="text-[9px] font-black tracking-[0.15em] text-white/15 uppercase">Page loading</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="glass-card rounded-2xl p-6">
            <span className="text-[9px] font-black tracking-[0.15em] text-white/15 uppercase">Button states</span>
            <div className="mt-5 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[12px] font-bold text-white" style={{ background: COBALT }}>
                <GenLayerSpinner size="xs" variant="mark" color="#fff" /> Submitting…
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/6 bg-white/[0.02] py-3 text-[12px] font-medium text-white/40">
                <GenLayerSpinner size="xs" variant="nodes" /> Awaiting consensus
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/6 bg-white/[0.02] py-3 text-[12px] font-medium text-white/40">
                <GenLayerSpinner size="sm" variant="consensus" /> Validators processing
              </button>
            </div>
          </div>

          {/* Inline */}
          <div className="glass-card rounded-2xl p-6">
            <span className="text-[9px] font-black tracking-[0.15em] text-white/15 uppercase">Inline & cards</span>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-white/4 bg-white/[0.01] p-4 text-[12px] leading-relaxed text-white/30">
                Transaction confirmed.{' '}
                <span className="inline-flex items-center gap-1 text-white/50">
                  <GenLayerSpinner size={12} variant="mark" /> Awaiting consensus
                </span>{' '}
                from 5 validators…
              </div>
              <div className="rounded-xl border border-white/4 bg-white/[0.01] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-1 h-2 w-16 rounded bg-white/6" />
                    <div className="h-1.5 w-10 rounded bg-white/3" />
                  </div>
                  <GenLayerSpinner size="sm" variant={v} />
                </div>
                <div className="mt-3.5 space-y-1.5">
                  <div className="h-1.5 rounded bg-white/3 w-full" />
                  <div className="h-1.5 rounded bg-white/3 w-4/5" />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/4">
                <div className="flex items-center justify-between bg-white/[0.015] px-3 py-2">
                  <span className="text-[8px] font-bold tracking-wider text-white/15 uppercase">Status</span>
                  <span className="text-[8px] font-bold tracking-wider text-white/15 uppercase">Tx</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="flex items-center gap-1.5 text-[10px] text-white/30">
                    <GenLayerSpinner size={10} variant="nodes" /> Pending
                  </span>
                  <span className="text-[8px] font-mono text-white/12">0x3f…a91c</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════ GLOW ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Enhancement</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">With glow</h2>
        <p className="mt-3 max-w-sm text-[14px] text-white/25">
          Kinetic Cobalt halo for hero moments. The hexagonal frame catches the glow beautifully.
        </p>
        <div className="mt-14 flex justify-center">
          <div className="glass-card flex h-64 w-full max-w-md items-center justify-center rounded-2xl">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl" style={{
                background: 'radial-gradient(circle, rgba(17,15,255,0.2) 0%, transparent 60%)',
                transform: 'scale(4)',
              }} />
              <GenLayerSpinner size={110} variant={v} glow />
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════ EXPORT ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Export</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Web-ready SVG + CSS</h2>
        <p className="mt-3 max-w-sm text-[14px] text-white/25">
          Standalone SVG with embedded CSS. Zero dependencies. Paste anywhere.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <div className="glass-card flex flex-col items-center justify-center rounded-2xl p-10 lg:col-span-2">
            <GenLayerSpinner size={100} variant={v} glow />
            <p className="mt-5 text-[12px] font-bold text-white/30">
              {v === 'mark' ? 'The Adjudicator' : v === 'consensus' ? 'Consensus' : 'Validators'}
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[9px] font-black tracking-[0.2em] text-white/15 uppercase">SVG</span>
              <button onClick={() => copy(getSvg(v))}
                className="rounded-lg bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold text-white/30 transition hover:bg-white/[0.06] hover:text-white/50">
                {copied ? '✓ Copied' : 'Copy SVG'}
              </button>
            </div>
            <pre className="code-block max-h-[360px] overflow-auto rounded-xl p-5">
              <code className="text-white/40 whitespace-pre">{getSvg(v)}</code>
            </pre>
          </div>
        </div>

        <div className="mt-8">
          <span className="text-[9px] font-black tracking-[0.2em] text-white/15 uppercase">React</span>
          <pre className="code-block mt-2 rounded-xl p-5">
            <code className="text-white/40 whitespace-pre">{`import GenLayerSpinner from './components/GenLayerSpinner';

<GenLayerSpinner />                              // Primary — The Adjudicator
<GenLayerSpinner size="lg" variant="mark" glow /> // Hero loading
<GenLayerSpinner size="xs" variant="nodes" />     // Inline / buttons
<GenLayerSpinner size="sm" variant="consensus" /> // Processing states
<GenLayerSpinner color="#ffffff" />               // On Cobalt backgrounds`}</code>
          </pre>
        </div>
      </section>


      {/* ═══════════ SPECS ═══════════ */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Tag>Specs</Tag>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Technical</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/4 bg-white/4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { l: 'Format', v: 'SVG + CSS', d: 'No JS, no Lottie, no dependencies. Pure vector + CSS keyframes.' },
            { l: 'Loop', v: '∞', d: 'Seamless infinite loop. Eased cubic-bezier timing for organic feel.' },
            { l: 'Min', v: '16 px', d: 'G-arcs readable at xs. Hex frame + nodes add richness at larger sizes.' },
            { l: 'A11y', v: 'ARIA', d: 'role="status", aria-label, sr-only text. prefers-reduced-motion support.' },
          ].map((s) => (
            <div key={s.l} className="bg-[#08080a] p-6">
              <span className="text-[8px] font-black tracking-[0.2em] text-white/12 uppercase">{s.l}</span>
              <div className="mt-1 text-lg font-black">{s.v}</div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-white/20">{s.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-white/3 py-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-2.5">
          <GenLayerSpinner size="sm" variant="mark" />
          <span className="text-[12px] font-black text-white/30">GenLayer Spinner</span>
        </div>
        <p className="text-[10px] text-white/10">
          Kinetic Cobalt #110FFF · Carbon Void #070707 · The Adjudicator
        </p>
      </footer>
    </div>
  );
}


/* ═══════════ HELPERS ═══════════ */

function Tag({ children }: { children: string }) {
  return <span className="text-[10px] font-black tracking-[0.25em] uppercase" style={{ color: COBALT }}>{children}</span>;
}

function HexIcon() {
  return (
    <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
      <polygon points="10,5.5 7.5,10.33 2.5,10.33 0,5.5 2.5,0.67 7.5,0.67" stroke={COBALT} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

function VCard({ active, onClick, title, badge, desc, children }: {
  active: boolean; onClick: () => void; title: string; badge: string; desc: string; children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} className={`text-left rounded-2xl border p-6 transition-all ${
      active ? 'border-[#110FFF]/20 bg-[#110FFF]/[0.03]' : 'border-white/4 bg-white/[0.01] hover:border-white/6'
    }`}>
      <div className="mb-5 flex h-32 items-center justify-center rounded-xl bg-black/30">{children}</div>
      <div className="flex items-center gap-2">
        <h3 className="text-[13px] font-bold">{title}</h3>
        {badge && <span className="rounded-full px-2 py-0.5 text-[8px] font-black tracking-wider uppercase text-white/80" style={{ background: COBALT }}>{badge}</span>}
      </div>
      <p className="mt-2 text-[11px] leading-relaxed text-white/25">{desc}</p>
    </button>
  );
}

function ColorCard({ bg, name, hex, note, border, children }: {
  bg: string; name: string; hex: string; note: string; border?: boolean; children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/4">
      <div className="flex h-32 items-center justify-center" style={{
        backgroundColor: bg,
        border: border ? '1px solid rgba(255,255,255,0.04)' : undefined,
      }}>
        {children}
      </div>
      <div className="bg-[#08080a] p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-bold">{name}</span>
          <code className="text-[10px] font-mono text-white/25">{hex}</code>
        </div>
        <p className="mt-1 text-[11px] text-white/20">{note}</p>
      </div>
    </div>
  );
}


/* ═══════════ SVG EXPORT ═══════════ */

function getSvg(variant: SpinnerVariant): string {
  if (variant === 'mark') return `<!-- GenLayer "The Adjudicator" Spinner
     ❶ Hexagonal frame = web3 network boundary
     ❷ Three G-arcs = "G" letterform + layered protocol
     ❸ Validator nodes = AI models computing per layer
     ❹ Center hex + pulse = adjudication / consensus
     Color: Kinetic Cobalt #110FFF -->
<svg width="40" height="40" viewBox="0 0 50 50" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes hx  { to { transform: rotate(-360deg); } }
    @keyframes hd  { to { stroke-dashoffset: -46; } }
    @keyframes cw  { to { transform: rotate(360deg); } }
    @keyframes ccw { to { transform: rotate(-360deg); } }
    @keyframes br  { 0%,100%{opacity:var(--r)} 50%{opacity:var(--p)} }
    @keyframes no  { from{transform:rotate(var(--s))} to{transform:rotate(calc(var(--s) + 360deg))} }
    @keyframes nor { from{transform:rotate(var(--s))} to{transform:rotate(calc(var(--s) - 360deg))} }
    @keyframes nf  { 0%,80%,100%{opacity:.55;r:1.6} 88%,93%{opacity:1;r:2.4} }
    @keyframes cp  { 0%,80%,100%{opacity:0;transform:scale(.2)} 88%{opacity:.5;transform:scale(1)} 96%{opacity:0;transform:scale(1.6)} }
    @keyframes ch  { 0%,80%,100%{opacity:.15} 88%,93%{opacity:.6} }
    .hf{animation:hx 24s linear infinite,hd 4s linear infinite;transform-origin:center}
    .ao{--r:.85;--p:1;animation:cw 3s cubic-bezier(.4,0,.2,1) infinite,br 3s ease-in-out infinite;transform-origin:center}
    .am{--r:.45;--p:.8;animation:ccw 2s cubic-bezier(.4,0,.2,1) infinite,br 2s ease-in-out .3s infinite;transform-origin:center}
    .ai{--r:.2;--p:.55;animation:cw 1.2s cubic-bezier(.4,0,.2,1) infinite,br 1.2s ease-in-out .6s infinite;transform-origin:center}
    .no{--s:0deg;animation:no 5s linear infinite;transform-origin:25px 25px}
    .nm{--s:120deg;animation:no 3.5s linear infinite;transform-origin:25px 25px}
    .ni{--s:0deg;animation:nor 2.2s linear infinite;transform-origin:25px 25px}
    .nd{animation:nf 5s ease-in-out infinite}
    .cp{animation:cp 5s ease-in-out infinite;transform-origin:center}
    .ch{animation:ch 5s ease-in-out infinite}
  </style>
  <polygon class="hf" points="48,25 36.5,44.92 13.5,44.92 2,25 13.5,5.08 36.5,5.08"
    stroke="#110FFF" stroke-width=".5" stroke-dasharray="4 6" opacity=".07" fill="none"/>
  <circle class="ao" cx="25" cy="25" r="20" stroke="#110FFF" stroke-width="2.5"
    stroke-linecap="round" stroke-dasharray="97.74 27.93" stroke-dashoffset="-13.96"/>
  <circle class="am" cx="25" cy="25" r="14" stroke="#110FFF" stroke-width="2.5"
    stroke-linecap="round" stroke-dasharray="68.42 19.55" stroke-dashoffset="-9.77"/>
  <circle class="ai" cx="25" cy="25" r="8" stroke="#110FFF" stroke-width="2.5"
    stroke-linecap="round" stroke-dasharray="39.10 11.17" stroke-dashoffset="-5.58"/>
  <g class="no"><circle class="nd" cx="45" cy="25" r="1.6" fill="#110FFF"/></g>
  <g class="nm"><circle class="nd" cx="39" cy="25" r="1.6" fill="#110FFF"/></g>
  <g class="ni"><circle class="nd" cx="33" cy="25" r="1.6" fill="#110FFF"/></g>
  <polygon class="ch" points="27,25 26,26.73 24,26.73 23,25 24,23.27 26,23.27" fill="#110FFF"/>
  <circle class="cp" cx="25" cy="25" r="6" stroke="#110FFF" stroke-width=".8" fill="none"/>
</svg>`;

  if (variant === 'consensus') return `<!-- GenLayer Consensus Spinner
     Three breathing arcs + adjudication dot
     Color: Kinetic Cobalt #110FFF -->
<svg width="40" height="40" viewBox="0 0 50 50" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes cd{0%,100%{stroke-dasharray:10.47 31.42;stroke-dashoffset:0}50%{stroke-dasharray:38 3.89;stroke-dashoffset:-15}}
    @keyframes cr{to{transform:rotate(360deg)}}
    @keyframes dt{0%,100%{opacity:.15;transform:scale(.8)}50%{opacity:.6;transform:scale(1.4)}}
    .r{animation:cd 2.4s ease-in-out infinite,cr 3.6s linear infinite;transform-origin:center}
    .d{animation:dt 2.4s ease-in-out infinite;transform-origin:center}
  </style>
  <circle class="r" cx="25" cy="25" r="20" stroke="#110FFF" stroke-width="3"
    stroke-linecap="round" stroke-dasharray="10.47 31.42"/>
  <circle class="d" cx="25" cy="25" r="2.5" fill="#110FFF"/>
</svg>`;

  return `<!-- GenLayer Validators Spinner
     Five AI validator dots orbiting independently
     Color: Kinetic Cobalt #110FFF -->
<svg width="40" height="40" viewBox="0 0 50 50" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes o{from{transform:rotate(var(--s))}to{transform:rotate(calc(var(--s)+360deg))}}
    @keyframes c{0%,100%{opacity:.2}50%{opacity:.5}}
    .d1{--s:0deg;animation:o 2.4s cubic-bezier(.4,0,.2,1) infinite;transform-origin:25px 25px}
    .d2{--s:72deg;animation:o 2s cubic-bezier(.4,0,.2,1) infinite;transform-origin:25px 25px}
    .d3{--s:144deg;animation:o 2.8s cubic-bezier(.4,0,.2,1) infinite;transform-origin:25px 25px}
    .d4{--s:216deg;animation:o 1.7s cubic-bezier(.4,0,.2,1) infinite;transform-origin:25px 25px}
    .d5{--s:288deg;animation:o 3.2s cubic-bezier(.4,0,.2,1) infinite;transform-origin:25px 25px}
    .c{animation:c 3s ease-in-out infinite}
    .t{filter:drop-shadow(2px 0 3px rgba(17,15,255,.35))}
  </style>
  <circle cx="25" cy="25" r="16" stroke="#110FFF" stroke-width=".4" opacity=".08"/>
  <g class="d1"><circle class="t" cx="41" cy="25" r="2" fill="#110FFF" opacity=".8"/></g>
  <g class="d2"><circle class="t" cx="41" cy="25" r="2" fill="#110FFF" opacity=".65"/></g>
  <g class="d3"><circle class="t" cx="41" cy="25" r="2" fill="#110FFF" opacity=".8"/></g>
  <g class="d4"><circle class="t" cx="41" cy="25" r="2" fill="#110FFF" opacity=".65"/></g>
  <g class="d5"><circle class="t" cx="41" cy="25" r="2" fill="#110FFF" opacity=".8"/></g>
  <polygon class="c" points="27.5,25 26.25,27.17 23.75,27.17 22.5,25 23.75,22.83 26.25,22.83" fill="#110FFF"/>
</svg>`;
}
