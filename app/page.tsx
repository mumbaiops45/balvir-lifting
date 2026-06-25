import Hero            from "@/components/Hero";
import Marquee         from "@/components/Marquee";
import About           from "@/components/About";
import Products        from "@/components/Products";
import Services        from "@/components/Services";
import Stats           from "@/components/Stats";
import WhyUs           from "@/components/WhyUs";
import Projects        from "@/components/Projects";
import Gallery         from "@/components/Gallery";
import Testimonials    from "@/components/Testimonials";
import CTA             from "@/components/CTA";
import Contact         from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      {/* <Products /> */}
      <Services />
      <Stats />
      <WhyUs />
      {/* <Projects /> */}
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
