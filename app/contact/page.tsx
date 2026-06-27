import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo  from "@/components/Contact/ContactInfo";
import ContactForm  from "@/components/Contact/ContactForm";

export const metadata = {
  title:
    "Contact Balvir Lifting | Elevator Products Supplier, Navi Mumbai",
  description:
    "Get a quote within 24 hours. Call +91 98190 02726 or visit our Kharghar, Navi Mumbai office.",
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
