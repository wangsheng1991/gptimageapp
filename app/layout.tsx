import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPT Image 2 - The Most Powerful AI Image Generator | TopView",
  description:
    "GPT Image 2: Arena ELO #1 AI image model. Native 4K output, pixel-perfect text in 48+ languages, hyper-realistic portraits, UI mockups, and complex graphic design — all in seconds.",
  keywords: [
    "GPT Image 2",
    "AI image generator",
    "4K image generation",
    "text in images",
    "AI graphic design",
    "AI product photography",
    "AI art generator",
    "TopView",
  ],
  authors: [{ name: "TopView" }],
  creator: "TopView",
  publisher: "TopView",
  robots: "index, follow",
  openGraph: {
    title: "GPT Image 2 - The Most Powerful AI Image Model",
    description:
      "Arena ELO #1. Native 4K output. 48+ languages. Generate anything from portraits to UI mockups.",
    siteName: "TopView",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
