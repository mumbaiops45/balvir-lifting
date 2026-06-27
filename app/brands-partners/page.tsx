import BrandsHero from "@/components/brands-partners/BrandPartner";
import BrandsGrid from "@/components/brands-partners/BrandsGrid";
import CTA            from "@/components/CTA";

export const metadata = {
  title:
    "Brands & Partners | KISWIRE, CEDES, Fermator, Usha Martin & More",
  description:
    "Balvir Lifting supplies genuine products from leading global brands including KISWIRE, CEDES, MEMCO, Fermator, Wittur and Usha Martin.",
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
