import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ModalProvider } from "@/context/ModalContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balvir Lifting | Premium Elevator & Lift Solutions",
  description:
    "Balvir Lifting delivers world-class elevator, goods lift, escalator, and maintenance solutions across India.",
  keywords: "lifts, elevators, escalators, goods lift, home lift, India, Balvir Lifting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <ModalProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ModalProvider>
      </body>
    </html>
  );
}
