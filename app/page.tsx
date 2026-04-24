"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Generator from "@/components/sections/Generator";
import Gallery from "@/components/sections/Gallery";
import Comparison from "@/components/sections/Comparison";
import Resolution from "@/components/sections/Resolution";
import Capabilities from "@/components/sections/Capabilities";
import Specs from "@/components/sections/Specs";
import HowTo from "@/components/sections/HowTo";
import Professionals from "@/components/sections/Professionals";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="generator">
        <Generator />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="comparison">
        <Comparison />
      </section>
      <section id="resolution">
        <Resolution />
      </section>
      <section id="capabilities">
        <Capabilities />
      </section>
      <section id="specs">
        <Specs />
      </section>
      <section id="how-to">
        <HowTo />
      </section>
      <section id="professionals">
        <Professionals />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}
