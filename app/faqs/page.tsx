import FAQHero from "@/components/Faq/FaqHero";
import FAQ from "@/components/Faq/Faq";
import CTA            from "@/components/CTA";

export const metadata = {
  title:
    "FAQs | Balvir Lifting | Elevator & Industrial Products Questions",
  description:
    "Find answers to frequently asked questions about Balvir Lifting, our elevator accessories, wire ropes, LED lighting, industrial products, brands, orders, delivery and support.",
};

export default function AboutPage() {
  return (
    <main>
      <FAQHero />
    <FAQ />
      <CTA />
    </main>
  );
}
