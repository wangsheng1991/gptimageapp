import type { Metadata } from "next";
import { PointsProvider } from "@/components/Points";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPT Image 2 - Free AI Image Generator | Text to Image, 4K Output, 48+ Languages",
  description:
    "Free GPT Image 2 AI image generator. Create stunning images from text prompts. 4K HD output, photorealistic portraits, UI mockups, graphic design. Arena ELO #1 rated model. No signup required.",
  keywords: [
    "GPT Image 2",
    "AI image generator",
    "text to image",
    "image generator",
    "generate image",
    "4K image",
    "AI model",
    "image output",
    "free AI image",
    "online image generator",
    "text to image AI",
    "image generate",
    "AI art generator",
    "AI design",
    "graphic design AI",
    "4K output",
    "HD image generator",
    "AI portrait generator",
    "AI product photography",
    "AI graphic design",
    "AI poster design",
    "UI mockup generator",
    "AI illustration",
    "photorealistic AI",
    "image model",
    "best AI image generator",
    "Flux AI",
    "GPT image",
    "GPT image generator",
    "Kling AI",
    "image from text",
  ],
  authors: [{ name: "GPT Image 2" }],
  creator: "GPT Image 2",
  publisher: "GPT Image 2",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "GPT Image 2 - Free AI Image Generator | Text to Image, 4K Output",
    description:
      "Free AI image generator. Convert text to image with GPT model. Generate 4K HD images, portraits, UI mockups, graphic designs. Arena ELO #1 rated. No signup.",
    siteName: "GPT Image 2",
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
    title: "GPT Image 2 - Free AI Image Generator | Text to Image",
    description: "Generate stunning images from text. 4K HD output, AI portraits, UI mockups, graphic designs. Arena ELO #1 rated. Try free now!",
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
