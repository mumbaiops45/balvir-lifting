import AboutHero      from "@/components/About/AboutHero";
import CompanyStory   from "@/components/About/CompanyStory";
import VisionMission  from "@/components/About/VisionMission";
import Segments       from "@/components/About/Segments";
import CTA            from "@/components/CTA";

export const metadata = {
  title: "About Balvir Lifting | Trusted Industrial Products Supplier Since 2014",
  description:
    "Navi Mumbai based supplier of multi brand elevator and industrial products, built on the principle, Earn Trust with Business.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      {/* <Segments /> */}
      <CTA />
    </main>
  );
}
