import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ImagesSlider3 from "../components/ImagesSlider3";
import { phone3 } from "../assets";

const Descover = () => {
  const ref = useRef(null);
  const refCircle1 = useRef(null);
  const refCircle2 = useRef(null);
  const refCircle3 = useRef(null);
  const refCircle4 = useRef(null);
  const refTitle = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 1 });
  const inViewCircle1 = useInView(refCircle1, { once: true, threshold: 0.5 });
  const inViewCircle2 = useInView(refCircle2, { once: true, threshold: 0.5 });
  const inViewCircle3 = useInView(refCircle3, { once: true, threshold: 0.5 });
  const inViewCircle4 = useInView(refCircle4, { once: true, threshold: 0.5 });
  const inViewTitle = useInView(refTitle, { once: true, threshold: 0.5 });

  return (
    <section id="descover" className="xl:pt-40 lg:pt-36 pt-52">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 70 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className="mb-16 flex lg:justify-between justify-end items-center md:flex-row md:gap-0 flex-col gap-16 w-full padding-x"
      >
        <div className="relative lg:mr-20">
          <img src={phone3} alt="" className="xl:w-[350px]  min-w-[220px] w-[300px]" />
          <div className="xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:h-[250px] md:w-[250px] sm:h-[300px] sm:w-[300px] h-[300px] w-[300px] absolute xl:bottom-20 xl:-left-2 lg:bottom-10 lg:-left-1 md:left-10 md:bottom-20
          bottom-16 -left-1 rounded-full custom-green-gradient -z-10"></div>
          <motion.div
            ref={refCircle1}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inViewCircle1 ? 1 : 0, y: inViewCircle1 ? 0 : 100 }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="absolute -top-36 lg:-right-[1px] md:right-14 right-4 lg:h-[100px] lg:w-[100px] md:h-[80px] md:w-[80px] h-[100px] w-[100px] rounded-full bg-dark-blue-1 -z-10" 
          ></motion.div>
          <motion.div
            ref={refCircle2}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inViewCircle2 ? 1 : 0, y: inViewCircle2 ? 0 : 100 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "linear" }}
            className="absolute lg:top-20 lg:-right-20 md:top-20 md:-right-6 top-32 -right-10 h-[20px] w-[20px] rounded-full bg-dark-blue-1 -z-10"
          ></motion.div>
          <motion.div
            ref={refCircle3}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inViewCircle3 ? 1 : 0, y: inViewCircle3 ? 0 : 100 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "linear" }}
            className="absolute lg:top-0 lg:-left-20 md:-top-12 md:-left-24 top-1 left-0 h-[50px] w-[50px] rounded-full bg-light-green-100 -z-10"
          ></motion.div>
          <motion.div
            ref={refCircle4}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: inViewCircle4 ? 1 : 0, y: inViewCircle4 ? 0 : 100 }}
            transition={{ duration: 1, ease: "linear" }}
            className="absolute xl:bottom-0 lg:-bottom-10 lg:-left-40 xl:-left-60
            md:-left-52 md:-bottom-14 xl:h-[100px] xl:w-[100px]  md:w-[80px] md:h-[80px]
            w-[80px] h-[80px]  rounded-full bg-light-green-100"
          ></motion.div>
        </div>
        <div className="bg-[#e2fbbf84] sm:green-background py-20 lg:pr-20 lg:pl-10 md:pr-10 md:pl-4 px-8 rounded-3xl text-center">
          <h2 className="lg:5xl text-4xl font-bold mb-10">
            استكشف <span className="text-light-green-100">تطبيقنا</span>
          </h2>
          <p className="leading-relaxed lg:w-[400px] md:w-[360px] text-slate-500 font-kufi">
            <span className="font-bold text-light-green-100">
              مانجا أون لاين
            </span>{" "}
            هو تطبيق مجاني مصمم لعشاق المانجا من أجل توفير تجربة قراءة سلسة على
            هاتفك. يتيح لك الوصول إلى مكتبة ضخمة من الفصول المترجمة بجودة عالية
          </p>
        </div>
      </motion.div>
      <div className="bg-gray-50 py-16 relative">

        <div className="mb-10 flex justify-center">
          <motion.p
            ref={refTitle}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inViewTitle ? 1 : 0, y: inViewTitle ? 0 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="leading-relaxed sm:w-[400px] w-[300px] text-center text-slate-500 text-xl font-kufi">
            عالم متكامل وممتع ينتظرك، مصمم ليوفر لك تجربة قراء فريدة وممتعة
          </motion.p>
        </div>
        <div className="padding-x">
          <ImagesSlider3 />
        </div>
      </div>
    </section>
  );
};

export default Descover;
