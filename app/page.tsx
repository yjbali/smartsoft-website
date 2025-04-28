import HeroSection from "@/components/hero-section"
import ServiceSection from "@/components/service-section"
import TestimonialSection from "@/components/testimonial-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServiceSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  )
}
