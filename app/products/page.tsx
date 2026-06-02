import ProductsHero    from "@/components/Product/ProductsHero";
import ProductCatalog  from "@/components/Product/ProductCatalog";
import WireRopesSection from "@/components/Product/WireRopesSection";
import CTA             from "@/components/CTA";

export const metadata = {
  title: "Our Products | Balvir Lifting",
  description:
    "Browse Balvir Lifting's complete product catalogue — elevator accessories, CEDES sensors, Fermator doors, ARD/UPS, KISWIRE wire ropes, LED lighting, flat travelling cables and industrial automation.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <ProductCatalog />
      <WireRopesSection />
      <CTA />
    </main>
  );
}
