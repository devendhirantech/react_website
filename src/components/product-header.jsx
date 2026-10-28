import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
import "./product-header.css";

export default function ProductHeader() {
  const [active, setActive] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = navLinks.find(({ href }) => href === `#${entry.target.id}`);
            if (activeLink) setActive(activeLink.label);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      id="home"
      className={`sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] rounded-2xl ${
        isScrolled ? "scrolledNav" : "nonScrolledNav"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-[30px] md:py-[20px]">
        <a href="#home" className="product-header-logo" aria-label="Go to home">
          <img src="/assets/product-logo.svg" alt="Dev Logo" className="w-12 sm:w-[60px]" />
        </a>

        <ul className="hidden list-none items-center gap-1 p-0 md:flex">
          {navLinks.map(({ label, href }) => (
            <motion.li key={label} className="relative" animate={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
              <a
                href={href}
                onClick={() => setActive(label)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === label ? "font-semibold text-white" : "text-[#848484] hover:text-white"
                }`}
              >
                {active === label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-xl bg-[var(--brand-nav-pill-bg)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition-transform ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>

        {isMobileMenuOpen && (
          <ul
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full mt-2 list-none space-y-1 rounded-2xl border border-white/20 bg-black/90 p-3 shadow-xl backdrop-blur-xl md:hidden"
          >
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => {
                    setActive(label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block rounded-xl px-4 py-3 text-center text-sm font-medium transition-colors ${
                    active === label ? "bg-white/15 text-white" : "text-[#b0b0b0] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </motion.header>
  );
}