import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Over 15+ years of combined experience",
  "Expert team of qualified chartered accountants",
  "Serving 500+ satisfied clients across Chennai",
  "Specialized in both individual and corporate taxation",
  "Advanced technology-driven accounting solutions",
  "Committed to ethical practices and confidentiality",
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">About GKV Associates</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                GKV Associates is a premier chartered accountant firm based in Chennai, dedicated to providing
                exceptional financial services and advisory to businesses and individuals across Tamil Nadu.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team of experienced professionals combines technical expertise with practical business acumen to
                deliver solutions that help our clients achieve their financial goals while maintaining complete
                compliance with regulatory requirements.
              </p>
            </div>

            <div className="space-y-3 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-[4/3] bg-muted relative">
              <img src="/professional-accounting-team-working-together-in-m.jpg" alt="GKV Associates Team" className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-6">
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "We believe in building long-term relationships with our clients by delivering excellence in every
                service we provide. Your financial success is our mission."
              </blockquote>
              <p className="mt-4 font-semibold">— GKV Associates Team</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
