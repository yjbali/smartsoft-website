import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "The ISTQB certification training was comprehensive and well-structured. I passed my exam on the first attempt thanks to their excellent preparation.",
      author: "Marie Dubois",
      role: "QA Engineer",
      company: "TechSolutions",
      avatar: "MD",
    },
    {
      quote:
        "Their software development team delivered our project on time and exceeded our expectations. The quality of their work is outstanding.",
      author: "Jan Vermeer",
      role: "CTO",
      company: "InnovateBV",
      avatar: "JV",
    },
    {
      quote:
        "The consulting services helped us improve our testing processes significantly. We've seen a 40% reduction in post-release defects.",
      author: "Sophie Laurent",
      role: "Test Manager",
      company: "FinTech Global",
      avatar: "SL",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-0 card-hover">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4 border-2 border-primary">
                    <AvatarImage src={`/images/avatar-${index + 1}.png`} alt={testimonial.author} />
                    <AvatarFallback className="bg-secondary">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
