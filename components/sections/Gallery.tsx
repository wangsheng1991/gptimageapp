import { useRef, useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const galleryImages = [
  { src: '/assets/gallery_streetwear.jpg', alt: 'Korean streetwear fashion e-commerce website mockup with dark theme and bold typography' },
  { src: '/assets/gallery_astra.jpg', alt: 'Dark theme space visualization app interface showing galaxy map with nebula clouds' },
  { src: '/assets/gallery_books.jpg', alt: 'Korean poetry book design mockup with minimalist cover art and typography' },
  { src: '/assets/gallery_dictionary.jpg', alt: 'Chinese language dictionary page showing character analysis for the character 书' },
  { src: '/assets/gallery_streamer.jpg', alt: 'Asian female livestreamer in pastel gaming room with RGB keyboard and plush toys' },
  { src: '/assets/gallery_food.jpg', alt: 'Crispy shrimp burger fast food advertisement with fries and cola' },
  { src: '/assets/comparison_gpt.webp', alt: '8K cinematic portrait of East Asian woman in dark fantasy hanfu holding ornate Nuo mask' },
  { src: '/assets/asset_4.jpg', alt: 'Portrait of person in ornate headdress with red gemstones against dark background' },
  { src: '/assets/gallery_movie.jpg', alt: 'Cinematic sci-fi movie poster for The Wandering Earth 3 showing astronauts against Jupiter backdrop' },
  { src: '/assets/gallery_street.jpg', alt: 'Japanese town sunset street scene with golden hour light and vintage car' },
  { src: '/assets/asset_12.jpg', alt: 'Dark fantasy Chinese woman in ornate purple silk hanfu with gold embroidery holding carved wooden mask' },
  { src: '/assets/asset_2.jpg', alt: 'Fantasy portrait with ornate golden headdress and blue gemstones' },
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            setVisibleImages((prev) => { const next = new Set(prev); next.add(idx); return next; });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" aria-label="AI Generated Image Gallery" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Endless Creative Possibilities
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From concept to polished masterpiece in seconds. Click any image to view full size.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              ref={(el: HTMLElement | null) => { imageRefs.current[i] = el as HTMLDivElement | null; }}
              data-idx={i}
              className={`break-inside-avoid rounded-xl overflow-hidden border border-white/5 cursor-pointer group transition-all duration-500 ${
                visibleImages.has(i)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i % 4) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
