import { Wand2, Settings, Package } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const specs = [
  { label: 'MODEL', value: 'GPT Image 2', desc: "OpenAI's most powerful autoregressive multimodal image model (2026)." },
  { label: 'MAX RESOLUTION', value: '4K (4096x4096)', desc: 'Native output from 1K to 4K with zero upscaling artifacts.' },
  { label: 'ASPECT RATIOS', value: '8 Ratios + Auto', desc: '1:1 · 3:2 · 2:3 · 16:9 · 9:16 · 4:3 · 21:9 · Auto.' },
  { label: 'GENERATION TIME', value: '5s – 60s', desc: '4x faster than GPT Image 1. Speed scales with resolution and complexity.' },
  { label: 'OUTPUT FORMATS', value: 'PNG · JPEG · WebP', desc: 'PNG with full alpha channel for transparent backgrounds.' },
  { label: 'TEXT LANGUAGES', value: '48+ Languages', desc: 'CJK, Arabic, Hebrew, Cyrillic, Latin and more.' },
  { label: 'EDITING MODES', value: '4 Modes', desc: 'Inpainting · Outpainting · Style Transfer · Region Masking.' },
  { label: 'QUALITY TIERS', value: 'Standard to Ultra HD', desc: 'Choose the fidelity and cost balance for your workflow.' },
  { label: 'BATCH SIZE', value: 'Up to 10', desc: 'Generate up to 10 images per single API request.' },
];

const bottomCards = [
  { icon: Wand2, title: '4 Modes', description: 'Inpainting · Outpainting · Style Transfer · Region Masking.' },
  { icon: Settings, title: 'Standard to Ultra HD', description: 'Choose the fidelity and cost balance for your workflow.' },
  { icon: Package, title: 'Up to 10', description: 'Generate up to 10 images per single API request.' },
];

export default function Specs() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.1);
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollReveal(0.1);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Model Specifications</h2>
          <p className="text-gray-400">Technical details for developers and power users.</p>
        </div>

        {/* Specs Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specs.map((spec, i) => (
            <div
              key={i}
              className={`bg-[#0F0F0F] border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-[#141414] transition-all duration-300 cursor-default ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-xs text-gray-600 font-semibold tracking-wider">{spec.label}</span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-1">{spec.value}</h3>
              <p className="text-sm text-gray-500">{spec.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div ref={bottomRef} className="grid sm:grid-cols-3 gap-6">
          {bottomCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`bg-[#0F0F0F] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 group ${
                  bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
