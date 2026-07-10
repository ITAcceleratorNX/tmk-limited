"use client";

import { AboutSection } from "@/components/AboutSection";
import { CompletedProjectsSection } from "@/components/CompletedProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { DirectionsSection } from "@/components/DirectionsSection";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export function LandingSections() {
  return (
    <>
      <AboutSection />
      <DirectionsSection />
      <PartnerMarquee />
      <ContactSection />
      <CompletedProjectsSection />
    </>
  );
}
