import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Enter a prompt',
    description: 'Describe the image you want using natural language.',
  },
  {
    num: '02',
    title: 'Generate Image',
    description: 'Click generate and watch GPT Image 2 bring your ideas to life in seconds.',
  },
  {
    num: '03',
    title: 'Download the image',
    description: "Export a high-resolution image when you're ready.",
  },
];

export default function HowTo() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  return (
    <section id="how-to" aria-label="How to Generate Images Guide" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How to Generate Images with GPT Image 2
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group cursor-default ${
                stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-5xl font-bold text-white/10 group-hover:text-purple-500/20 transition-colors">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold text-white mt-4 mb-2 group-hover:text-purple-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Step Image */}
        <figure
          ref={imageRef}
          className={`rounded-2xl overflow-hidden border border-white/10 mb-12 hover:border-white/20 transition-all duration-300 ${
            imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="/assets/step_cards.jpg"
            alt="Three-step workflow illustration showing prompt input, generate button click, and final AI generated image of wireless headphones on purple gradient"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </figure>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-glow hover:shadow-glow-lg">
            Start Creating Now
          </Button>
        </div>
      </div>
    </section>
  );
}
