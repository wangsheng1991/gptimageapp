import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`relative bg-gradient-to-br from-purple-900/40 via-[#0F0F0F] to-purple-900/20 border border-purple-500/20 rounded-3xl p-10 sm:p-14 text-center overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Most Powerful AI Image Model Is Here
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              4K output. 48+ language text rendering. #1 Arena ELO. Zero learning curve. Generate your first image in under 30 seconds — right in your browser.
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-glow hover:shadow-glow-lg">
              Generate with GPT Image 2 Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
