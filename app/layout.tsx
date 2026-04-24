import type { Metadata } from "next";
import { PointsProvider } from "@/components/Points";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPT Image 2 - Free AI Image Generator Online | 4K HD, 48+ Languages",
  description:
    "Free GPT Image 2 AI image generator. Arena ELO #1 rated. Generate 4K HD images, photorealistic portraits, UI mockups, posters & graphics in seconds. Supports 48+ languages. No signup required.",
  keywords: [
    "GPT Image 2",
    "AI image generator",
    "free AI image generator",
    "online AI image generator",
    "text to image AI",
    "AI art generator",
    "4K image generator",
    "HD image generator",
    "AI portrait generator",
    "AI product photography",
    "AI graphic design",
    "AI poster design",
    "UI mockup generator",
    "AI illustration",
    "photorealistic AI",
    "text in image AI",
    "multi-language image generator",
    "TopView AI",
    "AI generated images",
    "image generation AI",
    "best AI image generator",
    "Flux AI images",
    "Kling AI",
  ],
  authors: [{ name: "TopView" }],
  creator: "TopView",
  publisher: "TopView",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "GPT Image 2 - Free AI Image Generator | 4K HD, 48+ Languages",
    description:
      "Arena ELO #1 AI image generator. Generate stunning 4K HD images, photorealistic portraits, UI mockups, and graphic designs in seconds. Supports 48+ languages. No signup required.",
    siteName: "TopView",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/hero_result.webp",
        width: 1024,
        height: 1024,
        alt: "GPT Image 2 AI Generated Image Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT Image 2 - Free AI Image Generator Online",
    description: "Generate stunning 4K HD images with AI. Arena ELO #1 rated. Try now - no signup required.",
    images: ["/assets/hero_result.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "GPT Image 2",
    description: "Free AI image generator with 4K HD output, supporting 48+ languages",
    url: "https://gpt-image-generator.vercel.app",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "10000",
      bestRating: "5",
    },
    features: [
      "4K HD Image Generation",
      "48+ Languages Support",
      "Text in Images",
      "Photorealistic Portraits",
      "UI Mockups",
      "Poster Design",
    ],
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <PointsProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </PointsProvider>
      </body>
    </html>
  );
}
