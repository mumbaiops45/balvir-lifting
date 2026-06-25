import BrandsHero from "@/components/brands-partners/BrandPartner";
import BrandsGrid from "@/components/brands-partners/BrandsGrid";
import CTA            from "@/components/CTA";

export const metadata = {
  title: "About Us | Balvir Lifting",
  description:
    "Learn about Balvir Lifting — established 2014 in Navi Mumbai. A leading multi-brand supplier of elevator accessories, wire ropes, LED lighting and industrial automation products.",
};

export default function AboutPage() {
  return (
    <main>
      <BrandsHero />
    <BrandsGrid />
      <CTA />
    </main>
  );
}
