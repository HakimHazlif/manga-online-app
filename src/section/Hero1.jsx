import React, { useEffect, useState } from "react";
import { phone1, phone2, wallpaper } from "../assets";
import { motion } from "framer-motion";
import Button3 from "../components/Button3";

const Hero1 = () => {
  const [index, setIndex] = useState(0);

  const texts = [
    "تطبيق مجاني وسريع",
    "خاضع لتحديث مستمر",
    "سريع وسهل الاستعمال",
  ];

  /*
  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000); 
  }, []);
  */

  return (
    <section id="hero" className="padding-x pt-16">
      <div className="max-sm:padding-x flex md:justify-between md:items-center max-sm:flex-col-reverse max-sm:gap-16">
        <div className="relative md:w-1/2 w-full">
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-end md:items-start font-bold leading-snug">
            <motion.h1
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
              className="xl:text-5xl lg:text-4xl text-3xl leading-10 xl:w-full lg:w-4/5 w-full"
            >
              تطبيق <span className="text-light-green-100 ">مانجا</span> أون
              لاين
            </motion.h1>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                stiffness: 50,
              }}
              className="md:text-right text-center mt-6 text-base font-normal w-[80%]"
            >
              <p className="font-kufi">
                لا تفوت فرصة الانغماس في عالم المانجا الغني، وقم بتحميل{" "}
                <span className="text-light-green-100">مانجا </span>
                أون لاين الآن وابدأ رحلتك الشيقة
              </p>
              <div className="h-6 flex mt-3 xl:flex-row lg:text-base md:text-sm text-base">
                <p className="font-kufi whitespace-nowrap block-inline ml-1">
                  ما يميز تطبيقنا أنه
                </p>
                <div className="h-full w-full overflow-hidden">
                  <p className="font-kufi text-swip block-inline whitespace-nowrap text-light-green-100 font-bold">
                    {texts[1]}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                type: "spring",
                stiffness: 50,
              }}
              className="mt-10 w-[230px]"
            >
              <Button3 stylish="min-h-12 max-w-72 lg:w-64 w-52 min-w-40" />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute w-[280px] h-[280px] bg-blue-200 rounded-full -z-10 bottom-0 -right-[300px]"
          ></motion.div>
        </div>
        <div className="relative md:w-1/2 flex lg:justify-end lg:gap-10 md:justify-between max-sm:justify-around w-full">
          <motion.img
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: "spring",
              stiffness: 60,
            }}
            src={phone1}
            alt="app imgae"
            className="max-w-1/2 w-[150px] h-[300px] mt-20 md:w-[140px] md:h-[290px] lg:w-[180px] lg:h-[380px] xl:w-[250px] xl:h-[490px]"
          />
          <motion.img
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
            src={phone2}
            alt="app imgae"
            className="max-w-1/2 w-[150px] h-[310px] md:w-[140px] md:h-[300px] lg:w-[180px] lg:h-[390px] xl:w-[250px] xl:h-[500px]"
          />
          <div className="absolute bottom-10 left-40 text-blue-900">
            <svg
              viewBox="-0.5 -0.5 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              id="Okta--Streamline-Unicons"
              height="20"
              width="20"
            >
              <desc>Okta Streamline Icon: https://streamlinehq.com</desc>
              <path
                d="M7.5 0.15C3.4575 0.15 0.15 3.4575 0.15 7.5S3.4575 14.850000000000001 7.5 14.850000000000001 14.850000000000001 11.5425 14.850000000000001 7.5 11.5425 0.15 7.5 0.15ZM11.174999999999999 7.5c0 2.0580000000000003 -1.617 3.675 -3.675 3.675S3.825 9.558 3.825 7.5 5.442 3.825 7.5 3.825s3.675 1.617 3.675 3.675Z"
                fill="currentColor"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-20 text-light-green-100">
            <svg
              viewBox="-0.5 -0.5 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              id="Triangle--Streamline-Unicons"
              height="30"
              width="30"
              className="transform rotate-45"
            >
              <desc>Triangle Streamline Icon: https://streamlinehq.com</desc>
              <path
                d="M14.751562499999999 12.8585625 8.1391875 1.4118125000000001c-0.0640625 -0.11306250000000001 -0.15699999999999997 -0.20712499999999998 -0.26925 -0.2725625 -0.11237499999999999 -0.0654375 -0.24 -0.09987499999999999 -0.3699375 -0.09987499999999999 -0.13 0 -0.2575625 0.0344375 -0.3699375 0.09987499999999999 -0.11225 0.0654375 -0.2051875 0.15949999999999998 -0.26925 0.2725625L0.2484375 12.8585625c-0.0645 0.1116875 -0.0984375 0.238375 -0.0984375 0.367375 0 0.1289375 0.0339375 0.2556875 0.0984375 0.367375 0.06475 0.112125 0.15793749999999998 0.205125 0.2701875 0.269625 0.11225 0.0645 0.23956249999999998 0.09825 0.369 0.0976875h13.22475c0.1294375 0.0005625 0.25675 -0.0331875 0.3690625 -0.0976875 0.1121875 -0.0645 0.205375 -0.1575 0.270125 -0.269625 0.0645 -0.1116875 0.0984375 -0.2384375 0.0984375 -0.367375 0 -0.129 -0.0339375 -0.2556875 -0.0984375 -0.367375ZM2.1586875 12.49125 7.5 3.2485625000000002l5.341312499999999 9.242687499999999H2.1586875Z"
                fill="currentColor"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] w-[200px] h-[200px] bg-green-200 rounded-full -z-10 md:-right-14 sm:left-10"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
