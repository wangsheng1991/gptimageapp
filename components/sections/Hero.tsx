import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = ['4K NATIVE OUTPUT', '48+ LANGUAGES', '#1 ARENA ELO', 'TRANSPARENT BG', '4x FASTER'];

export default function Hero() {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollReveal(0);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0);
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal(0);
  const { ref: pillsRef, isVisible: pillsVisible } = useScrollReveal(0);

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${
            badgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-white/20 transition-colors cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" fill="white"/>
            </svg>
            <span className="text-sm text-white font-medium">GPT Image 2</span>
          </div>
          <span className="text-gray-500">×</span>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-white/20 transition-colors cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="4" fill="#6D5BFF"/>
              <path d="M5 10L8 7L11 10L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-white font-medium">TopView</span>
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          GPT Image 2:
          <br />
          <span className="text-gradient">The Most Powerful AI Image Model</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className={`text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-200 ${
            subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Arena ELO #1. Native 4K output. Pixel-perfect text in 48+ languages. From hyper-realistic portraits to complex UI mockups — GPT Image 2 doesn't just generate images, it understands what you're building.
        </p>

        {/* Feature Pills */}
        <div
          ref={pillsRef}
          className={`flex flex-wrap justify-center gap-2 transition-all duration-700 delay-300 ${
            pillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {features.map((feature, i) => (
            <span key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 tracking-wider">
              {i > 0 && <span className="text-gray-700">•</span>}
              <span className="hover:text-gray-300 transition-colors cursor-default">{feature}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
