import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cta-background.png')",
            filter: "brightness(0.6) contrast(1.1)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="mx-auto max-w-[700px] text-white md:text-xl mb-8">
            Contact us today to discuss your software development needs or ISTQB certification preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
