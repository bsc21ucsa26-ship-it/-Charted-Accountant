import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Monitor, Briefcase } from "lucide-react"

const officeFeatures = [
  {
    icon: Building2,
    title: "Client Meeting Rooms",
    description: "Professional meeting spaces equipped with modern amenities for confidential client discussions.",
    image: "/professional-office-meeting-room-with-desk-and-cha.jpg",
  },
  {
    icon: Users,
    title: "HR & Admin Office",
    description: "Dedicated HR and administrative department ensuring smooth operations and employee management.",
    image: "/modern-hr-office-with-computers-and-filing-systems.jpg",
  },
  {
    icon: Monitor,
    title: "Accounting Department",
    description:
      "State-of-the-art accounting workspace with latest software and systems for efficient financial operations.",
    image: "/accounting-office-with-multiple-computers-and-prof.jpg",
  },
  {
    icon: Briefcase,
    title: "Executive Office",
    description: "Premium executive offices designed for strategic planning and high-level consultations.",
    image: "/executive-office-with-modern-furniture-and-profess.jpg",
  },
]

export function OfficeInfrastructure() {
  return (
    <section id="office" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Infrastructure</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our modern office is equipped with advanced technology and professional workspaces to serve you better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {officeFeatures.map((feature, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[3/2] bg-muted relative overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
