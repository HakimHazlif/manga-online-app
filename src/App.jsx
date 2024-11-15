import React, { useEffect, useRef, useState } from "react";
import Navbar from "./section/Navbar";
import Hero1 from "./section/Hero1";
import Features from "./section/Features";
import Descover from "./section/Descover";
import Footer from "./section/Footer";
import AppDownload from "./section/AppDownload";
import Contact from "./section/Contact";
import { motion } from "framer-motion";

const App = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // نسبة الظهور التي عندها يتم اعتبار القسم مرئياً
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // تحديد جميع الأقسام التي نريد مراقبتها
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // ظهور شريط من عدمه
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop - 200;
        const sectionBottom = sectionRef.current.offsetHeight + 400;
        //console.log([sectionTop, sectionBottom, window.scrollY])

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }

        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <div>
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className={`w-full h-[65px] font-kufi transition-transform duration-300 ease-in-out ${
          isFixed
            ? "fixed-navbar bg-dark-blue-transparent text-white"
            : "normal-navbar text-slate-500"
        }`}
      >
        <Navbar activeSection={activeSection} isFixed={isFixed} />
      </motion.header>
      <main className="font-kufi">
        <Hero1 />
        <div ref={sectionRef}>
          <Descover />
          <Features />
        </div>
        <AppDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
