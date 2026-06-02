import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo  from "@/components/Contact/ContactInfo";
import ContactForm  from "@/components/Contact/ContactForm";

export const metadata = {
  title: "Contact Us | Balvir Lifting",
  description:
    "Get in touch with Balvir Lifting — Kishore Agrawal, Head of Sales & Operations. Shop No.18, Kharghar, Navi Mumbai. Phone: +91-9819002726. Email: kishore@balvir.in",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
