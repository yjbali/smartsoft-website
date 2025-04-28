import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/code-screen.png')",
                filter: "brightness(0.7)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60"></div>
            <div className="relative z-10 h-full flex items-center justify-center flex-col">
              <h1 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Contact</span> Us
              </h1>
              <p className="text-xl text-white max-w-2xl text-center px-4">
                Have questions about our services? Get in touch with our team.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <Card className="bg-secondary/50 border-0 card-hover">
                  <CardContent className="flex items-center p-6">
                    <div className="rounded-full bg-background/10 w-12 h-12 flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground">Boulevard Bischoffsheim 39/4, 1000 Bruxelles</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-0 card-hover">
                  <CardContent className="flex items-center p-6">
                    <div className="rounded-full bg-background/10 w-12 h-12 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground">yjbali@smartosft-consulting.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-0 card-hover">
                  <CardContent className="flex items-center p-6">
                    <div className="rounded-full bg-background/10 w-12 h-12 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground">0032467629348</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Card className="bg-secondary/30 border-0">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80600.40500255874!2d4.3053363!3d50.8550625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c486740f9fff%3A0x10099ab2f4c8030!2sBrussels%2C%20Belgium!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
