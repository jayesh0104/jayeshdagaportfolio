"use client"
import { FileText, Beer } from 'lucide-react';
import DesignSection from '@/component/DesignSection';
import Footer from '@/component/Footer';
import AboutSkillsSection from '@/component/AboutSkillsSection';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll animation trigger based on scrollY position
  useEffect(() => {
    if (scrollY > -1) {
      controls.start({ opacity: 1, y: -1 });
    } else {
      controls.start({ opacity: 0, y: -100 });
    }
  }, [scrollY, controls]);

  return (
    <div className="relative w-screen overflow-x-hidden">
      {/* Social Links Desktop - Always Visible */}
      <div className="hidden lg:flex flex-col justify-around fixed right-6 top-0 h-full py-12 text-sm tracking-widest text-gray-500 font-bold z-50">
        {[
          { name: "INSTAGRAM", link: "https://www.instagram.com/dagajayesh/" },
          { name: "LINKEDIN", link: "https://www.linkedin.com/in/jayesh-daga/" },
          { name: "GITHUB", link: "https://github.com/jayesh0104" },
        ].map(({ name, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="-rotate-90 cursor-pointer relative group hover:opacity-90"
          >
            <span className="relative inline-block">
              {name}
              <span className="absolute left-0 bottom-0 w-full h-[5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 overflow-hidden">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" stroke="#1e3a8a" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </a>
        ))}
      </div>

      {/* Main Content */}
      <main className="w-screen lg:h-screen bg-[#FAF8F6] relative p-4 mt-[-50px] lg:mt-0 overflow-x-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] 
          [background-size:100px_100px] sm:[background-size:200px_200px]" 
        />

        <motion.div 
          className="flex flex-col justify-center items-start lg:h-full px-4 sm:px-10 lg:px-40 pt-20 sm:pt-24 lg:pt-0"
          initial={{ opacity: 0, y: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          {/* Hero */}
          <div className="flex flex-col gap-4 mt-10 sm:mb-20 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-700">Hello web cowboy,</h1>
            <h2 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold leading-tight">
              I’m <span className="text-black">Jayesh</span><span className="text-blue-500">*</span>
            </h2>
          </div>

          {/* About + Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 w-full max-w-6xl">
            <div className="flex flex-col justify-center gap-6 text-left">
              <p className="max-w-md text-gray-500 xl:text-md text-sm leading-relaxed">
                Hi! I&apos;m a Web Developer and a Deep Learning enthusiast based in India. Everyday I learn, read and practice to create the best interfaces as possible. It’s beautiful to have a passion and a work at the same time, don’t you think?
              </p>
            </div>

            <div className="flex flex-col justify-center gap-6 text-left text-base sm:text-lg mt-0 px-0 lg:px-16">
              <a
                href="https://drive.google.com/file/d/1_8vj93B-utMQK2Mw239kNMNy7qNURQby/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-3 items-center cursor-pointer relative group overflow-hidden">
                  <FileText className="w-5 h-5" />
                  <span className="relative">
                    If you want my resume<span className="text-blue-500">**</span>
                    <svg className="absolute left-0 top-1/2 w-full h-[5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" stroke="#1e3a8a" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jayesh-daga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-3 items-center cursor-pointer relative group overflow-hidden">
                  <Beer className="w-5 h-5" />
                  <span className="relative">
                    Or have chat
                    <svg className="absolute left-0 top-1/2 w-full h-[5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" stroke="#1e3a8a" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mobile Footer */}
        <div className="lg:hidden flex flex-col items-center gap-6 pt-6 pb-6 w-full">
          <div className="text-[13px] sm:text-[14px] text-gray-400 flex flex-col gap-1 text-center px-4">
            <div>
              <span className="text-blue-500">*</span> A very passionate and competent person open to freelance offers and internship.
            </div>
            <div>
              <span className="text-blue-500">**</span> If you want my résumé, ask me. I don&apos;t mind.
            </div>
          </div>

          <div className="flex justify-center gap-6 text-xs tracking-widest text-gray-800 font-bold">
            {[
              { name: "INSTAGRAM", link: "https://www.instagram.com/dagajayesh/" },
              { name: "LINKEDIN", link: "https://www.linkedin.com/in/jayesh-daga/" },
              { name: "GITHUB", link: "https://github.com/jayesh0104" },
            ].map(({ name, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer relative group hover:opacity-90"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden lg:block absolute bottom-4 right-0 pr-4 sm:pr-10 lg:pr-30">
          <div className="text-[13px] sm:text-[14px] text-gray-400 flex flex-col gap-1 text-right">
            <div>
              <span className="text-blue-500">*</span> A very passionate and competent person open to freelance offers and internship.
            </div>
            <div>
              <span className="text-blue-500">**</span> If you want my résumé, ask me. I don&apos;t mind.
            </div>
          </div>
        </div>
      </main>
      <AboutSkillsSection />
      {/* Design Section */}
      <DesignSection />
      <Footer />
    </div>
  );
}
