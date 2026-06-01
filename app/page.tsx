import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import Marquee         from "@/components/Marquee";
import About           from "@/components/About";
import Services        from "@/components/Services";
import Stats           from "@/components/Stats";
import WhyUs           from "@/components/WhyUs";
import Projects        from "@/components/Projects";
import Gallery         from "@/components/Gallery";
import VideoShowcase   from "@/components/VideoShowcase";
import Testimonials    from "@/components/Testimonials";
import CTA             from "@/components/CTA";
import Contact         from "@/components/Contact";
import Footer          from "@/components/Footer";
import WhatsAppButton  from "@/components/WhatsAppButton";
import EnquiryModal    from "@/components/EnquiryModal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
      <WhyUs />
      <Projects />
      <Gallery />
      <VideoShowcase />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />

      {/* Floating elements */}
      <WhatsAppButton />
      <EnquiryModal />
    </main>
  );
}
