import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "./button";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];
import "./product-header.css";

export default function ProductHeader() {
  const [active, setActive] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
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
	<>
	<motion.header id="home" className={` rounded-full sticky  left-0 right-0 bottom-0 z-50  ${ isScrolled ? "scrolledNav" : "nonScrolledNav" }`}>
		<nav className="max-w-7xl mx-auto flex items-center justify-between  py-[16px] px-[30px]" >
			<div className="product-header-logo cursor-pointer">
			<img src="/src/assets/product-logo.svg" alt="Dev Logo" className=" h-10 w-auto" />
			</div>
			<div className="flex items-center gap-8">
			<ul className="hidden md:flex items-center gap-1 p-0 list-none">
				{navLinks.map(({ label, href }) => (
				<motion.li key={label} className="relative" animate={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
					<a href={href} onClick={() => setActive(label)}
					className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${ active === label ? "text-white font-semibold" : "text-[#848484] hover:text-white" }`}
					>
					{active === label && (
						<motion.div
						layoutId="nav-pill"
						className="absolute inset-0 bg-[var(--brand-nav-pill-bg)] rounded-xl z-0"
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						/>
					)}
					<span className="relative z-10">{label}</span>
					</a>
				</motion.li>
				))}
			</ul>
			<Button  
			   className="flex items-center gap-2 bg-[var(--brand-white)] text-black px-5 py-2.5 rounded-full transition-colors text-sm font-medium" 
			   primary={true} onClick={() => {}} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
			>
			Resume
			 </Button>
			</div>
		</nav>
		</motion.header>
	</>
  );
}