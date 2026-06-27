import ProductsHero    from "@/components/Product/ProductsHero";
import ProductCatalog  from "@/components/Product/ProductCatalog";
import WireRopesSection from "@/components/Product/WireRopesSection";
import CTA             from "@/components/CTA";

export const metadata = {
  title:
    "Products | Elevator Accessories, Wire Ropes, LED Lighting & Cables",
  description:
    "Explore Balvir Lifting's full range of elevator accessories, IS:2365 wire ropes, LED lighting, cables and automation products from trusted global brands.",
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
