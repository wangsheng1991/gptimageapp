import { Megaphone, ShoppingBag, Layout, PenTool } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const professions = [
  {
    icon: Megaphone,
    title: 'Marketing & Ad Teams',
    description: 'Generate complete ad creatives — banners, social cards, email headers, event posters — with pixel-perfect text and brand-accurate colors. Produce 50 variations in the time it takes to brief a designer on one.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce & DTC Brands',
    description: 'Turn a single product photo into an entire catalog: lifestyle shots, seasonal themes, A/B test variants, transparent-background cutouts for your storefront. Studio-quality product photography without the studio.',
  },
  {
    icon: Layout,
    title: 'UI/UX Designers & Developers',
    description: 'Generate app mockups, icon sets, illustration assets, and design system components in seconds. Consistent glassmorphism, neumorphism, or flat design style across an entire set. Export with transparent backgrounds directly into Figma.',
  },
  {
    icon: PenTool,
    title: 'Content Creators & Publishers',
    description: 'Unique thumbnails, blog hero images, book covers, magazine layouts, and social media templates — each with correctly rendered headlines and body text. No more stock photo sameness.',
  },
];

export default function Professionals() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.1);

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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for Professionals Who Ship
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Not a toy. A production tool that replaces hours of manual work.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
          {professions.map((prof, i) => {
            const Icon = prof.icon;
            return (
              <div
                key={i}
                className={`bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group cursor-default ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {prof.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{prof.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
