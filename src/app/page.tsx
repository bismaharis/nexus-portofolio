import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import Portfolio from "@/components/Portfolio";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <StatsSection />
        <ProcessSection />
        <Portfolio />
        <VisionMission />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
