import { Card, CardContent } from "@/components/ui/card"
import { Code, TestTube, Database, Laptop } from "lucide-react"

export default function ServiceSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
    },
    {
      icon: <TestTube className="h-10 w-10 text-primary" />,
      title: "ISTQB Certification",
      description: "Comprehensive training programs to prepare you for ISTQB certification at all levels.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous testing methodologies to ensure your software meets the highest quality standards.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Consulting Services",
      description: "Expert guidance on software testing strategies, process improvement, and best practices.",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">Our Expertise</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="gradient-text">Services</span> We Offer
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            We offer a comprehensive range of services to help you achieve your software development and testing goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary/50 border-0 card-hover">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-background/10 w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
