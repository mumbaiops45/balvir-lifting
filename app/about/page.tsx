import AboutHero      from "@/components/About/AboutHero";
import CompanyStory   from "@/components/About/CompanyStory";
import VisionMission  from "@/components/About/VisionMission";
import Segments       from "@/components/About/Segments";
import CTA            from "@/components/CTA";

export const metadata = {
  title: "About Us | Balvir Lifting",
  description:
    "Learn about Balvir Lifting — established 2014 in Navi Mumbai. A leading multi-brand supplier of elevator accessories, wire ropes, LED lighting and industrial automation products.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <Segments />
      <CTA />
    </main>
  );
}
