import { Card, CardContent } from "@/components/ui/card"
import { Shield, BookOpen, TrendingUp, Award, Handshake, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of professional ethics and transparency in all our dealings.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Continuous learning and staying updated with latest regulations to serve our clients better.",
  },
  {
    icon: TrendingUp,
    title: "Contributing Value",
    description: "Adding tangible value to our clients' businesses through strategic insights and expert guidance.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering superior quality services that exceed client expectations consistently.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Building lasting relationships based on reliability, confidentiality, and mutual respect.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Understanding client needs and providing personalized solutions for their unique challenges.",
  },
]

export function Values() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our practice and define our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
