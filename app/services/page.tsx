import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ServicesPage() {
  const serviceImages = [
    {
      src: "/images/software-development.png",
      alt: "Software Development Team",
      caption: "Our expert development team in action"
    },
    {
      src: "/images/quality-assurance.png",
      alt: "Quality Assurance Process",
      caption: "Rigorous testing and quality assurance"
    },
    {
      src: "/images/istqb-training.png",
      alt: "ISTQB Training Session",
      caption: "Professional ISTQB certification training"
    },
    {
      src: "/images/consulting.png",
      alt: "Consulting Services",
      caption: "Expert consulting and guidance"
    }
  ]

  return (
    <main className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/software-development.png')",
                filter: "brightness(0.7)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60"></div>
            <div className="relative z-10 h-full flex items-center justify-center flex-col">
              <h1 className="text-4xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-white max-w-2xl text-center px-4">
                We offer comprehensive software development services and ISTQB certification preparation to help you
                achieve your goals.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Software Development</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-secondary/50 border-0 card-hover">
                <CardHeader>
                  <CardTitle>Custom Software Solutions</CardTitle>
                  <CardDescription>Tailored applications for your business needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Web application development",
                      "Mobile app development",
                      "Enterprise software solutions",
                      "Legacy system modernization",
                      "API development and integration",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 border-0 card-hover">
                <CardHeader>
                  <CardTitle>Quality Assurance</CardTitle>
                  <CardDescription>Ensuring software reliability and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Comprehensive testing strategies",
                      "Automated testing implementation",
                      "Performance testing",
                      "Security testing",
                      "Continuous integration/deployment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">ISTQB Certification Preparation</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-secondary/50 border-0 card-hover">
                <CardHeader>
                  <CardTitle>Training Programs</CardTitle>
                  <CardDescription>Comprehensive preparation for certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Foundation Level certification",
                      "Advanced Level certification",
                      "Agile Tester certification",
                      "Test Manager certification",
                      "Test Automation Engineer certification",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 border-0 card-hover">
                <CardHeader>
                  <CardTitle>Consulting Services</CardTitle>
                  <CardDescription>Expert guidance for testing excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Test process improvement",
                      "Testing strategy development",
                      "Test automation framework design",
                      "Quality metrics and reporting",
                      "Testing team coaching and mentoring",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Work</span> in Action
            </h2>
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {serviceImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="bg-secondary/50 border-0 overflow-hidden">
                          <div className="relative aspect-video">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm text-muted-foreground text-center">
                              {image.caption}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
