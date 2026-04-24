import { Type, Target, Palette, Layers } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const capabilities = [
  {
    icon: Type,
    title: 'Complex Typography & Text Rendering',
    description: "The industry's most accurate text-in-image engine. Render multi-line headlines, dense paragraph text, product labels, ingredient lists, UI copy, and calligraphic scripts — all in 48+ languages including CJK, Arabic, Hebrew, and Cyrillic. From a single-word logo to an entire newspaper layout, the text comes out crisp, correctly spelled, and properly kerned every time.",
    tags: ['48+ Languages', 'Dense Text', 'Calligraphy', 'Logos', 'Newspaper Layouts'],
    image: '/assets/feature_typography.webp',
    imageAlt: 'Olympic Games Milano Cortina 2026 medal design sheet showing front, side and back views with navy and gold color palette',
    imageLeft: true,
  },
  {
    icon: Target,
    title: 'Unmatched Prompt Adherence',
    description: "Arena ELO #1 for a reason. GPT Image 2 executes complex, multi-constraint prompts with 98% accuracy — spatial positioning, lighting conditions, emotional tone, camera angles, lens simulation, and style mixing. If you can describe it, the model can build it.",
    tags: ['#1 ELO Ranking', '98% Accuracy', 'Multi-Constraint', 'Camera Simulation'],
    image: '/assets/feature_prompt.jpg',
    imageAlt: 'Four-step burger recipe preparation guide showing ingredients, raw patties, cooking in cast iron skillet, and final gourmet burger cross-section',
    imageLeft: false,
  },
  {
    icon: Palette,
    title: 'Full-Spectrum Visual Design',
    description: 'One model. Every style. Hyper-realistic portraits with pore-level skin detail. Clean flat vector illustrations for brand assets. Watercolor, oil painting, ink wash, pixel art, isometric 3D, low-poly, vaporwave, anime, comic book — switch between styles with a single prompt change. No fine-tuning, no LoRA, no style presets needed.',
    tags: ['Photorealism', 'Vector', 'Watercolor', '3D', 'Anime', 'Pixel Art', '30+ Styles'],
    image: '/assets/asset_12.jpg',
    imageAlt: 'Dark fantasy Chinese woman in ornate purple silk hanfu with gold embroidery holding carved wooden mask in ancient palace interior',
    imageLeft: true,
  },
  {
    icon: Layers,
    title: 'Professional Graphic & UI Design',
    description: 'Generate production-ready design assets: marketing posters with complex multi-layer layouts, app UI mockups with functional typography, icon sets with consistent style, packaging design with barcodes and fine print, business card designs, presentation slides, infographics with data visualization, and wireframes — all in a single generation pass.',
    tags: ['Poster Design', 'UI Mockups', 'Icon Sets', 'Packaging', 'Infographics'],
    image: '/assets/feature_design.jpg',
    imageAlt: 'Professional graphic design collage with portrait photos, bold YOUR IDEA typography in black square, modern editorial layout on white background',
    imageLeft: false,
  },
];

export default function Capabilities() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="capabilities" aria-label="GPT Image 2 Capabilities" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Capabilities No Other Model Can Match
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arena ELO #1 ranked. 98% task accuracy. The only model that truly understands what you're asking for.
          </p>
        </div>

        {/* Capability Rows */}
        <div className="space-y-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <CapabilityCard key={i} cap={cap} icon={Icon} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ cap, icon: Icon, index }: { cap: typeof capabilities[0]; icon: React.ComponentType<{ className?: string }>; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <article
      ref={ref}
      className={`grid lg:grid-cols-2 gap-0 bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`${cap.imageLeft ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center p-8`}>
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {cap.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{cap.description}</p>
        <div className="flex flex-wrap gap-2">
          {cap.tags.map((tag, j) => (
            <span key={j} className="text-xs text-gray-500">
              {tag}
              {j < cap.tags.length - 1 && <span className="ml-2 text-gray-700">•</span>}
            </span>
          ))}
        </div>
      </div>
      <figure className={`${cap.imageLeft ? 'lg:order-2' : 'lg:order-1'} rounded-2xl overflow-hidden border border-white/10 lg:border-0`}>
        <img
          src={cap.image}
          alt={cap.imageAlt}
          className="w-full h-full object-cover min-h-[280px] transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </figure>
    </article>
  );
}
