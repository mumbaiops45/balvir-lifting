import FAQHero from "@/components/Faq/FaqHero";
import FAQ from "@/components/Faq/Faq";
import CTA            from "@/components/CTA";

export const metadata = {
  title: "About Us | Balvir Lifting",
  description:
    "Learn about Balvir Lifting — established 2014 in Navi Mumbai. A leading multi-brand supplier of elevator accessories, wire ropes, LED lighting and industrial automation products.",
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
