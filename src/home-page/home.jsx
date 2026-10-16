import ProductHeader from "../components/product-header";
import Footer from "../components/footer";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion , useScroll, useTransform } from "framer-motion";
import { WorkExperience } from "../components/data/work-experience";
import timelineEntries from "../components/data/timeline.json";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef
  });
  const horizontalScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  return (
    <>
    <ProductHeader  />

    { /*tech-skill && */}
    <section id="about" className="relative flex scroll-mt-24 items-center pt-[100px] pb-[80px] px-6 h-[100vh]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div className="flex flex-col items-start z-10" initial={{ x: "-50%", opacity: 0 }}  transition={{ duration: 0.5 }}  whileInView={{ opacity: 1, x: "0%" }} viewport={{ once: true, amount: 0.5 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Available for new projects</span>
          </motion.div>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
           <motion.span  className="inline-block"
              initial={{ opacity: 0  }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0, ease: "linear" }}
              >
                Vanakkam..!
            </motion.span>
            <br />
            <motion.span className="inline-block"
              initial={{ y: "-50%" , opacity: 0 }} 
              animate={{ y: 0 , opacity: 1}} 
              transition={{ duration: 0.5, delay: 1, ease: "linear" }}>
             I am
            {' '}
             <TypeAnimation
              sequence={[
                'Devendhiran',
                3000,          
                'a Developer',    
                3000           
              ]}
              cursor={true}
              repeat={Infinity}
              wrapper="span"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              />
            </motion.span>
          </h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-[#848484] max-w-lg leading-relaxed hover:text-white transition-colors"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1.5, ease: "linear" }}
          >
         Transforming complex ideas into seamless digital experiences. As a Frontend Engineer, I focus on responsive layouts, clean code, and creating visually engaging web applications.
          </motion.p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: "-30%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "linear" }}
          >
            <motion.a href="#contact"
              className="group inline-flex gap-2 items-center text-white px-5 py-2.5 text-base font-lg rounded-xl"
              animate={{ scale: 1 }} 
              whileHover={{ scale: 1.1, boxShadow: "0 4px 20px rgba(79, 76, 76, 0.5)" , border: "1px solid rgba(255, 255, 255, 0.2)" }} 
              whileTap={{ scale: 0.95 }}
            >
            Let's Talk 
            <span className="group-hover:translate-x-1 transition-transform">
              <svg width="25px" height="25px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#fff" d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"></path><path fill="#fff" d="M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"></path></g></svg>
            </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="relative" initial={{ x: "50%", opacity: 0 }} transition={{ duration: 0.5 }}  whileInView={{ opacity: 1, x: "0%" }} viewport={{ once: true , amount: 0.5}}>
          <img  src="/assets/portfolio-dashboard.png" alt="Profile" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        </motion.div>
      </div>
    </section>

    { /*tech-skill && */}
    <section id="tech-stack" className="scroll-mt-24 px-6 py-20 h-[100vh]">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center [text-shadow:-1px_5px_4px_rgba(255,255,255,0.5)]  mb-4 ">Tech Stack</h2>
        <p className="text-center text-gray-300 ">Here are some of the technologies I work with:</p>
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-20 mt-12">
          <motion.div className="group flex flex-col min-h-[150px] justify-between" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/html.png" alt="HTML" className="w-[100px]" />
            <p className="font-serif  text-gray-300 text-center mt-4 text-shadow-lg group-hover:text-shadow-lg   group-hover:font-bold">HTML</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between " initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/css.png" alt="CSS" className="w-[100px]" />
            <p className="font-serif text-gray-300 text-center mt-4  group-hover:text-shadow-lg  group-hover:font-bold">CSS</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/javascript.png" alt="JavaScript" className="w-[100px] h-[100px]" />
            <p className="font-serif text-gray-300 text-center mt-4  group-hover:text-shadow-lg  group-hover:font-bold">JavaScript</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/react.png" alt="React" className="w-[100px] " />
            <p className="font-serif text-gray-300 text-center mt-4  group-hover:text-shadow-lg  group-hover:font-bold">React</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/ember.png" alt="Ember Js" className="w-[100px]" />
            <p className="font-serif text-gray-300 text-center mt-4  group-hover:text-shadow-lg  group-hover:font-bold">Ember</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/bootstrap.png" alt="Bootstrap" className="w-[100px]" />
            <p className="font-serif text-gray-300 text-center mt-4  group-hover:text-shadow-lg  group-hover:font-bold">Bootstrap</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between " initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/tailwindcss.svg" alt="Tailwind" className="w-[100px] mt-4" />
            <p className="font-serif text-gray-300 text-center mt-4 text-shadow-lg font-serif  group-hover:text-shadow-lg  group-hover:font-bold">Tailwind</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/motion.svg" alt="Motion" className="w-[100px] mt-8" />
            <p className="font-serif text-gray-300 text-center mt-4 text-shadow-lg group-hover:text-shadow-lg  group-hover:font-bold">Motion</p>
          </motion.div>
          <motion.div className="group flex flex-col min-h-[150px] justify-between" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} whileHover={{ scale: 1.15 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}  viewport={{ once: false , amount: 0.5 }}>
            <img src="/assets/github.png" alt="GitHub" className="w-[100px]" />
            <p className="font-serif text-gray-300 text-center mt-4 text-shadow-lg group-hover:text-shadow-lg  group-hover:font-bold">GitHub</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Project and Experience Section */}
    <section id="experience" ref={containerRef} className="scroll-mt-24 h-[200vh]"> 
      <div className="sticky top-[50px] h-screen pt-[100px] pb-[80px] flex flex-col justify-center overflow-hidden"> 
        <div className="container max-w-5xl mx-auto mb-[60px] px-6"> 
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center [text-shadow:-1px_5px_4px_rgba(255,255,255,0.5)]  mb-4"> Experience </h2>
          <p className="w-[600px] m-auto text-center text-base mb-8 text-gray-400">I have experience working as a <span className="text-blue-400"> Web Developer </span> at  <span className="text-blue-400">Zoho</span>, a world-renowned software company. Below is a curated list of the products I have contributed to</p>
          <div className="flex flex-row gap-6 justify-center item-center mt-[60px]">
            <a href="https://www.zoho.com/"><img src="/assets/zoho-logo.png" alt="Zoho" className="w-[100px] item-center" /></a>
            <a href="https://www.vikra.com/en-in/seller/" className="flex item-center bg-white"><img src="/assets/vikra-color.svg" alt="" className="w-[160px] item-center"/></a>
          </div>
        </div>
        
        <div className="w-full">
          <motion.div 
            style={{ x: horizontalScroll }} 
            className="flex gap-12 items-stretch relative pr-[100vw] pl-[30vw] w-max"
          >
            {WorkExperience.map((itemParent, index) => (
              <div key={index} className="flex flex-col shrink-0">
                <div className="flex gap-6 h-full items-stretch ">
                  {itemParent.details.map((detail, detailIndex) => (
                    <motion.div 
                      key={detailIndex} 
                      className="flex flex-col p-10 border border-white/20 rounded-lg shadow-lg w-[400px] shrink-0 bg-white/5 hover:bg-[var(--bg-color)] backdrop-blur-sm origin-center transition-colors duration-200" style={{ "--bg-color": detail.productColor }}
                      initial={{ scale: 0.85, opacity: 0.4 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, amount: "some", margin: "0px -35% 0px -25%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      
                    >
                      {detail.refImg && (
                        <img  
                          src={detail.refImg} 
                          alt={detail.title} 
                          className="mt-auto w-[200px]  object-cover rounded-md mb-6 inline-block"
                        />
                      )}
                      <p className="text-gray-300 text-lg my-4 flex-grow leading-relaxed">{detail.description}</p>
                      <a href={detail.link} className="inline-flex w-fit text-white mt-4 border-b-2 border-transparent hover:border-white hover:cursor-pointer transition-colors duration-200"> {detail.title} Website </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section id="timeline" className="scroll-mt-24 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center [text-shadow:-1px_5px_4px_rgba(255,255,255,0.5)]  mb-4">Timeline</h2>
        <p className="text-center text-gray-400 mb-12">A few moments from the journey so far</p>
        <div className="flex flex-col gap-[60px]">
          {timelineEntries.map((entry , index) => (
            <div
              className={`w-full pb-10 border-white ${
                index % 2 === 0
                  ? "border-r-[3px] pr-10"
                  : "border-l-[3px] pl-10"
              }`}
              key={entry.year}
            >
              <div>
                <p className={`text-2xl font-bold pb-10 color-white ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
                >{entry.year}</p>
                <motion.article
                  className={`h-full min-h-[320px] min-w-0 overflow-hidden rounded-2xl md:grid md:grid-cols-2 ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className={`flex flex-col justify-center p-6 md:p-10 ${index % 2 === 0 ? "md:order-2" : ""}`}>
                    <p className="mt-4 leading-relaxed text-gray-300">{entry.description}</p>
                  </div>
                  <img
                    src={entry.image}
                    alt={`Memory from ${entry.year}`}
                    className={`h-64 w-full object-cover md:h-full md:min-h-[280px] ${index % 2 === 0 ? "md:order-1" : ""}`}
                    loading="lazy"
                  />
                </motion.article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    
    </>
  );
}