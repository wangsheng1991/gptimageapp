import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Comparison() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollReveal();
  const { ref: promptRef, isVisible: promptVisible } = useScrollReveal();

  return (
    <section id="comparison" aria-label="GPT Image 2 vs Nano Banana 2 Comparison" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            GPT Image 2 vs Nano Banana 2
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Side-by-side comparison using the same prompts. See the difference in detail, text rendering, and composition.
          </p>
        </div>

        {/* Comparison Grid */}
        <div
          ref={imagesRef}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${
            imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* GPT Image 2 */}
          <figure className="relative group">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-purple-500/30">
                GPT Image 2
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
              <img
                src="/assets/comparison_gpt.webp"
                alt="GPT Image 2 result: 8K cinematic portrait of East Asian woman in dark fantasy hanfu holding ornate Nuo mask with professional photography quality"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </figure>

          {/* Nano Banana 2 */}
          <figure className="relative group">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Nano Banana 2
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <img
                src="/assets/comparison_nano.webp"
                alt="Nano Banana 2 result: Same prompt comparison showing softer focus and less detail in the fantasy portrait"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </figure>
        </div>

        {/* Prompt */}
        <div
          ref={promptRef}
          className={`mt-6 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300 ${
            promptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Prompt</span>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            8K half-body portrait of a young East Asian woman in dark fantasy hanfu, porcelain skin, elegant upturned almond eyes, glossy black hair in a classical high bun with tassel ornaments, holding a black-and-gold Nuo mask. Dim ancient interior, drifting smoke, cinematic realism, shallow depth of field, Canon RF 85mm F1.2L.
          </p>
        </div>
      </div>
    </section>
  );
}
