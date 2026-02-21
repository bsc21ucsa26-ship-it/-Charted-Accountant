import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/modern-office-with-computers-and-accounting-profes.jpg')] bg-cover bg-center opacity-10" />

      <div className="container relative mx-auto px-4 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Your Trusted Partner in Financial Excellence
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 text-pretty">
            G.K. Vaid & Associates is a leading chartered accountant firm in Chennai, providing comprehensive financial
            services including tax filing, GST compliance, statutory audits, and strategic advisory to help your
            business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="group text-slate-400">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
