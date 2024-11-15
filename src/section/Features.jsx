import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FeatureCardAA from "../components/FeatureCardAA";
import { features } from "../contast/constants";

const Features = () => {
  const ref = useRef(null);
  const refCards = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });
  const inViewCards = useInView(refCards, {
    once: true,
  });

  return (
    <section id="features" className="padding-x py-10 lg:pb-48 md:pb-10 pb-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: inView ? 1 : 0, y: inView && 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10 text-center flex flex-col items-center"
      >
        <h2 className="sm:text-5xl text-4xl font-bold mb-5">
          مميزات <span className="text-light-green-100">التطبيق</span>
        </h2>
        <h3 className="text-xl font-medium mb-10 text-slate-400">
          أكثر من مجرد تطبيق
        </h3>
      </motion.div>
      <div>
        <motion.div
          ref={refCards}
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: inViewCards ? 1 : 0, y: inViewCards && 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:h-[300px] sm:h-[500px] h-[600px] relative"
        >
          {features.map((feature, index) => (
            <FeatureCardAA
              key={index}
              iconPath={feature.iconPath}
              textSize={feature.styles.iconSize}
              title={feature.title}
              description={feature.description}
              textColor={feature.styles.textColor}
              imageBg={feature.styles.backgrounds.imageBg}
              bgTo30Deg={feature.styles.backgrounds.bgTo30Deg}
              bgToRight={feature.styles.backgrounds.bgToRight}
              position={feature.styles.measures}
              translatation={feature.styles.transformTranslate}
              isLeft={feature.motion.isLeft}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
