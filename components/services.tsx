import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calculator, BookOpen, Scale, TrendingUp, FileCheck } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Income Tax Filing",
    description:
      "Comprehensive income tax return filing services for individuals and businesses with expert guidance on tax planning and compliance.",
  },
  {
    icon: Scale,
    title: "Statutory & Tax Audit",
    description:
      "Professional statutory audit and tax audit services ensuring regulatory compliance and financial accuracy for your organization.",
  },
  {
    icon: Calculator,
    title: "GST Returns & Audits",
    description:
      "Complete GST compliance including return filing, reconciliation, and audit services to keep your business GST-ready.",
  },
  {
    icon: TrendingUp,
    title: "Advisory Services",
    description:
      "Strategic financial and tax advisory to optimize your financial decisions and drive business growth effectively.",
  },
  {
    icon: BookOpen,
    title: "Book Keeping & Accounting",
    description:
      "Accurate and timely book keeping services including ledger maintenance, account reconciliation, and financial reporting.",
  },
  {
    icon: FileCheck,
    title: "Due Diligence",
    description:
      "Thorough due diligence services for mergers, acquisitions, and investments to identify risks and opportunities.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive chartered accountant services tailored to meet your financial and compliance needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
