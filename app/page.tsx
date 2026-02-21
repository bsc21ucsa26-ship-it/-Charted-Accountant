import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { OfficeInfrastructure } from "@/components/office-infrastructure"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-green-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <OfficeInfrastructure />
        <About />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
