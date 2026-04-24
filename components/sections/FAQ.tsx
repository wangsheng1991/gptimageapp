import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    q: 'What is GPT Image 2 and why is it called the most powerful?',
    a: 'GPT Image 2 is OpenAI\'s latest autoregressive multimodal image generation model. It ranks #1 on the Arena ELO leaderboard, supports native 4K output (4096x4096), renders pixel-perfect text in 48+ languages, and achieves 98% prompt adherence accuracy — making it the most capable AI image model available.',
  },
  {
    q: 'What resolutions and aspect ratios does GPT Image 2 support?',
    a: 'GPT Image 2 supports native output from 1K to 4K (4096x4096) resolution. It offers 8 aspect ratios plus auto: 1:1, 3:2, 2:3, 16:9, 9:16, 4:3, 21:9, and an intelligent auto mode that adapts composition to your prompt.',
  },
  {
    q: 'How accurate is text rendering compared to Midjourney and Ideogram?',
    a: 'GPT Image 2 features the industry\'s most accurate text-in-image engine. It correctly renders multi-line headlines, dense paragraphs, product labels, and calligraphic scripts in 48+ languages including CJK, Arabic, Hebrew, and Cyrillic — significantly outperforming both Midjourney and Ideogram in text accuracy benchmarks.',
  },
  {
    q: 'Can GPT Image 2 do graphic design work?',
    a: 'Yes. GPT Image 2 can generate production-ready design assets including marketing posters with complex multi-layer layouts, app UI mockups with functional typography, icon sets with consistent style, packaging design with barcodes, business cards, presentation slides, infographics, and wireframes.',
  },
  {
    q: 'What about UI/UX design — can it generate app mockups?',
    a: 'Absolutely. GPT Image 2 excels at generating app mockups, design system components, and illustration assets. It maintains consistent styles (glassmorphism, neumorphism, flat design) across entire sets and exports with transparent backgrounds ready for Figma import.',
  },
  {
    q: 'How realistic are the portraits and people?',
    a: 'GPT Image 2 generates hyper-realistic portraits with pore-level skin detail, accurate anatomy, consistent lighting, and natural expressions. It handles diverse ethnicities, ages, and styles with remarkable fidelity.',
  },
  {
    q: 'How does it compare to Midjourney, Ideogram, and FLUX?',
    a: 'GPT Image 2 leads the Arena ELO rankings with superior prompt adherence (98% accuracy), native 4K output, better text rendering, faster generation (4x faster than GPT Image 1), and more consistent multi-reference blending compared to Midjourney, Ideogram, and FLUX.',
  },
  {
    q: 'Does it support transparent backgrounds?',
    a: 'Yes. GPT Image 2 outputs PNG with full alpha channel support for transparent backgrounds, making it ideal for product photography, icon generation, and asset creation that requires clean isolation.',
  },
  {
    q: 'What output formats and quality settings are available?',
    a: 'GPT Image 2 supports PNG, JPEG, and WebP output formats. Quality tiers range from Standard to Ultra HD, allowing you to choose the right balance of fidelity and generation speed for your workflow.',
  },
  {
    q: 'How fast is image generation?',
    a: 'Generation time ranges from 5 seconds for simple 1K images to 60 seconds for complex 4K compositions. On average, GPT Image 2 is 4x faster than GPT Image 1.',
  },
  {
    q: 'Is it free to use on Topview?',
    a: 'Topview offers a free tier with daily generation credits. For unlimited access and higher resolutions, paid plans are available starting at competitive rates.',
  },
  {
    q: 'Can I use generated images commercially?',
    a: 'Yes. Images generated through Topview using GPT Image 2 come with full commercial usage rights. You can use them for marketing, products, publishing, and any commercial application.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal(0.05);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div ref={listRef} className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 ${
                listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="text-sm sm:text-base font-medium text-white pr-4 group-hover:text-purple-400 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-purple-400' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
