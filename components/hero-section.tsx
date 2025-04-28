import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-52 lg:pb-44 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            filter: "brightness(0.7) contrast(1.1)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">Software Development</span> & ISTQB Certification Experts
          </h1>
          <p className="max-w-[700px] mx-auto text-white md:text-xl mb-8">
            Brussels-based company delivering high-quality software solutions and comprehensive ISTQB certification
            preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
