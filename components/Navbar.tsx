"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Brands & Partners,", href: "/brands-partners" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const { toggle } = useModal();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    gsap.fromTo(
      navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navBg = scrolled
    ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm"
    : "bg-transparent py-3";

  const linkColor = scrolled
    ? "text-gray-700 hover:text-[var(--primary-light)]"
    : "text-white/75 hover:text-white";

  const underlineColor = scrolled ? "bg-[var(--primary-light)]" : "bg-gray-100";

  const phoneColor = scrolled
    ? "text-gray-700 hover:text-[var(--primary-light)]"
    : "text-white/70 hover:text-white";

  const ctaColor = scrolled
    ? "bg-[var(--primary-light)] text-white hover:opacity-90"
    : "bg-white text-gray-900 hover:bg-gray-100";

  const barColor = scrolled ? "bg-gray-800" : "bg-white";

  return (
    <nav
      ref={navRef}
      className={"fixed inset-x-0 top-0 z-50 border-b-2 transition-all duration-500 " + navBg}
    >
      <div className="max-w-7xl mx-auto pl-12 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Balvir-lifting-png (1).png"
            alt="Balvir Lifting Logo"
            width={260}
            height={80}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={"text-[13px] font-medium tracking-wide transition-colors relative group " + linkColor}
              >
                {l.label}
                <span
                  className={
                    "absolute -bottom-1 left-0 h-px transition-all duration-300 " +
                    underlineColor +
                    " " +
                    (isActive(l.href) ? "w-full" : "w-0 group-hover:w-full")
                  }
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919819002726"
            className={"text-[13px] font-semibold flex items-center gap-2 transition-colors " + phoneColor}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {"+91 98190 02726"}
          </a>
          <button
            onClick={toggle}
            className={"rounded-md text-[13px] font-semibold py-2.5 px-6 transition-colors " + ctaColor}
          >
            Get a Quote
          </button>
        </div>

        <button
          className="lg:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={
              "block w-6 h-0.5 transition-all duration-300 " +
              barColor +
              " " +
              (open ? "rotate-45 translate-y-2" : "")
            }
          />
          <span
            className={"block w-6 h-0.5 transition-all duration-300 " + barColor + " " + (open ? "opacity-0" : "")}
          />
          <span
            className={
              "block w-6 h-0.5 transition-all duration-300 " +
              barColor +
              " " +
              (open ? "-rotate-45 -translate-y-2" : "")
            }
          />
        </button>
      </div>

      <div className={"lg:hidden overflow-hidden transition-all duration-400 " + (open ? "max-h-96" : "max-h-0")}>
        <div className="bg-white border-t border-gray-100 shadow-lg px-6 pt-4 pb-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "text-sm font-medium py-2.5 border-b border-gray-100 transition-colors " +
                (isActive(l.href) ? "text-[var(--primary-light)]" : "text-gray-700 hover:text-[var(--primary-light)]")
              }
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <a
              href="tel:+919819002726"
              className="flex-1 text-center border border-gray-200 text-gray-700 text-sm font-medium py-3"
            >
              {"Call Us"}
            </a>
            <button
              onClick={() => {
                setOpen(false);
                toggle();
              }}
              className="flex-1 btn-red text-sm justify-center py-3"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}