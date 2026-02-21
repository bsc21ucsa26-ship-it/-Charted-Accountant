import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { OfficeInfrastructure } from "@/components/office-infrastructure"
import { Values } from "@/components/values"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <OfficeInfrastructure />
        <Values />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
