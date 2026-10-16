import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Footer() {
  const [shouldTypeHeading, setShouldTypeHeading] = useState(false);

  return (
    <footer id="contact" className="px-6 py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:gap-24">
        <div className="flex flex-1 flex-col justify-between gap-10">
          <motion.h2
            className="max-w-xl text-4xl font-bold leading-tight text-[#f2f2ed] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onViewportEnter={() => setShouldTypeHeading(true)}
          >
            {shouldTypeHeading && (
              <TypeAnimation
                sequence={["Start your journey with me."]}
                speed={50}
                cursor={false}
                repeat={0}
              />
            )}
          </motion.h2>
          <nav aria-label="Social media">
            <ul className="flex gap-4">
              <li>
                <a href="#" aria-label="YouTube" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#f2f2ed] transition-colors hover:border-white/60 hover:bg-white/10">
                  <img src="/assets/youtube.svg" alt="" aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="X" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#f2f2ed] transition-colors hover:border-white/60 hover:bg-white/10">
                  <img src="/assets/x.svg" alt="" aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#f2f2ed] transition-colors hover:border-white/60 hover:bg-white/10">
                  <img src="/assets/instagram.svg" alt="" aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#f2f2ed] transition-colors hover:border-white/60 hover:bg-white/10">
                  <img src="/assets/facebook.svg" alt="" aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-1 flex-wrap gap-x-10 gap-y-12">
          <div className="w-full sm:w-[calc(50%-1.25rem)]">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500">LOCATIONS</h3>
            <p className="mt-4 text-lg leading-relaxed text-[#f2f2ed]">Chennai, India</p>
          </div>
          <div className="w-full sm:w-[calc(50%-1.25rem)]">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500">CONTACT ME</h3>
            <a href="mailto:projectexpo@gmail.com" className="mt-4 inline-block break-all text-lg text-[#f2f2ed] hover:text-white">
              projectexpo@gmail.com
            </a>
          </div>
          <div className="w-full sm:w-[calc(50%-1.25rem)]">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500">AVAILABLE TIME</h3>
            <p className="mt-4 text-lg leading-relaxed text-[#f2f2ed]">Mon–Fri, 9:00 AM–6:00 PM</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Devendhiran. All rights reserved.
      </div>
    </footer>
  );
}
