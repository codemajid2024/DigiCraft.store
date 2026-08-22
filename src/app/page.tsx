import React from "react";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { EmpathyBar } from "@/components/sections/EmpathyBar";
import { Benefits } from "@/components/sections/Benefits";
import { BookPreview } from "@/components/sections/BookPreview";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-cream">
      {/* Top Reassurance & Offer Banner */}
      <TopBanner />

      {/* Sticky Main Header */}
      <Header />

      {/* Main Content Sections */}
      <div className="flex-1">
        <Hero />
        <EmpathyBar />
        <Benefits />
        <BookPreview />
        <TargetAudience />
        <Testimonials />
        <PricingSection />
        <FAQSection />
      </div>

      {/* Sticky Mobile Floating Action CTA */}
      <StickyMobileCta />

      {/* Footer */}
      <Footer />
    </main>
  );
}
