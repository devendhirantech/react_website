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
        </div>

        <div className="flex flex-1 flex-wrap gap-x-10 gap-y-12">
          <div className="w-full sm:w-[calc(50%-1.25rem)]">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500">LOCATIONS</h3>
              <p className="text-lg leading-relaxed text-[#f2f2ed]">Chennai, India.</p>
            </div>
            <div className="w-full mt-6 flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-gray-500">AVAILABLE TIME</h3>
              <p className="text-lg leading-relaxed text-[#f2f2ed]">24/7 Mon-Sun</p>
            </div>
          </div>
          <div className="w-full sm:w-[calc(50%-1.25rem)]">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500">CONTACT ME</h3>
            <div className="mt-4 flex flex-col items-start gap-2">
              <motion.a
                href="mailto:devendhiran.techorg.com"
                className="break-all text-lg text-[#f2f2ed] hover:text-white hover:underline underline-offset-4"
                whileInView={{ opacity: [1, 0.4, 1], scale: [1, 1.05, 1] }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ repeat: 4, duration: 0.35 }}
              >
              devendhiran.techorg.com
              </motion.a>
              <motion.a
                href="https://acesse.one/20b7brh"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-[#f2f2ed] hover:text-white hover:underline underline-offset-4"
                whileInView={{ opacity: [1, 0.4, 1], scale: [1, 1.05, 1] }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ repeat: 4, duration: 0.5 }}
              >
                WhatsApp
              </motion.a>
            </div>
            <nav aria-label="Social media" className="mt-6">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500 mb-4 ">FOLLOW ME</h3>
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
                  <a href="https://www.linkedin.com/in/devendhirand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#f2f2ed] transition-colors hover:border-white/60 hover:bg-white/10">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.19 0 22.22 0Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} .All rights reserved.
      </div>
    </footer>
  );
}
