import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
  {
    title: 'Native 4K Ultra HD Output',
    description: 'Generate up to 4096×4096 (4K) resolution natively — no upscaling artifacts, no quality loss. From 1K quick previews to 2K social media assets to 4K print-ready output, choose the resolution that fits your workflow. Every detail remains razor-sharp at any zoom level.',
    image: '/assets/resolution_4k.jpg',
    alt: '4K resolution demonstration showing spilled popcorn on blue velvet cinema seat with dramatic golden lighting',
    badge: '4K',
  },
  {
    title: 'Every Aspect Ratio You Need',
    description: '1:1 square for Instagram, 16:9 widescreen for YouTube thumbnails, 9:16 vertical for TikTok/Stories, 3:2 for print, 4:3 for presentations, 21:9 ultrawide for cinematic banners. The model intelligently adapts composition to any ratio without awkward cropping.',
    image: '/assets/resolution_ratio.jpg',
    alt: 'Woman wearing wireless headphones on couch demonstrating multiple aspect ratio outputs',
    overlays: ['1:1', '16:9', '9:16', '3:2'],
  },
  {
    title: 'Pixel-Level Precision Editing',
    description: 'Surgical inpainting that modifies exactly what you ask — nothing more, nothing less. Change a shirt color without altering the face. Swap a background while preserving every strand of hair. Zero-drift editing that maintains identity, lighting consistency, and material accuracy across iterations.',
    image: '/assets/feature_precision.jpg',
    alt: 'Before and after precision editing demo showing dress color changed from red to emerald green while face remains unchanged',
  },
  {
    title: 'Multi-Reference Input',
    description: 'Input multiple reference images simultaneously for precise restoration and creative blending. Combine character, style, composition, and product references in a single prompt — the model understands relationships between inputs and synthesizes them with exacting control over identity, pose, and aesthetic.',
    image: '/assets/feature_multiref.jpg',
    alt: 'Multi-reference image blending demonstration showing character portrait, style reference, pose reference and product reference fused into one cohesive image',
  },
];

export default function Resolution() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.1);

  return (
    <section id="resolution" aria-label="Resolution and Output Features" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Resolution &amp; Output That Sets the Standard
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From 1K quick drafts to 4K print-ready masterpieces. Every pixel is intentional.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <article
              key={i}
              className={`bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 group cursor-pointer ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <figure className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {card.badge && (
                  <figcaption className="absolute bottom-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                    {card.badge}
                  </figcaption>
                )}
                {card.overlays && (
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {card.overlays.map((o) => (
                      <span key={o} className="bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                        {o}
                      </span>
                    ))}
                  </div>
                )}
              </figure>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
