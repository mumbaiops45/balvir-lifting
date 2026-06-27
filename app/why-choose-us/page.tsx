import WhyChooseUsHero from "@/components/WhyChooseUs/WhyChooseHero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import CTA            from "@/components/CTA";

export const metadata = {
  title:
    "Why Choose Balvir Lifting | Trusted Quality, Genuine Brands & Expert Support",
  description:
    "Discover why businesses trust Balvir Lifting for genuine industrial and elevator products, competitive pricing, expert guidance, reliable support and fast delivery across India.",
};

export default function AboutPage() {
  return (
    <main>
      <WhyChooseUsHero />
    <WhyChooseUs />
      <CTA />
    </main>
  );
}
