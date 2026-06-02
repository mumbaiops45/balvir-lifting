import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryModal from "@/components/EnquiryModal";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balvir Lifting | Multi-Brand Industrial Products Supplier",
  description:
    "Balvir Lifting — leading supplier of multi-brand elevator accessories, steel wire ropes, LED lighting, cables and automation products. Established 2014, Pan-India supply.",
  keywords:
    "Balvir Lifting, elevator accessories, wire ropes, KISWIRE, CEDES, Fermator, Wittur, LED lighting, flat travelling cables, industrial automation, Navi Mumbai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <ModalProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
            <EnquiryModal />
          </SmoothScroll>
        </ModalProvider>
      </body>
    </html>
  );
}
