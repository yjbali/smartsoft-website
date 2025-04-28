import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/team-meeting.png')",
                filter: "brightness(0.7)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h1 className="text-4xl font-bold mb-4">
                About <span className="gradient-text">Our Company</span>
              </h1>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div>
              <p className="text-lg mb-4">
                Based in the heart of Brussels, we are a dedicated team of software development professionals with a
                passion for quality assurance and testing excellence.
              </p>
              <p className="text-lg mb-4">
                Since our founding, we've been committed to delivering high-quality software solutions and preparing
                professionals for ISTQB certification through comprehensive training programs.
              </p>
              <p className="text-lg">
                Our team combines technical expertise with a deep understanding of testing methodologies to help
                organizations improve their software quality and testing processes.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/office-team.png" alt="Our office in Brussels" fill className="object-cover" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-secondary/50 border-0 card-hover">
                <CardContent className="p-6">
                  <div className="rounded-full bg-background/10 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">01</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do, from software development to training delivery.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50 border-0 card-hover">
                <CardContent className="p-6">
                  <div className="rounded-full bg-background/10 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">02</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We embrace innovative approaches to solve complex problems and improve testing methodologies.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50 border-0 card-hover">
                <CardContent className="p-6">
                  <div className="rounded-full bg-background/10 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">03</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    We operate with honesty and transparency in all our client and partner relationships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Location</span>
            </h2>
            <div className="rounded-lg overflow-hidden h-[400px] relative">
              <Image
                src="/images/brussels-office.png"
                alt="Map of Brussels office location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
