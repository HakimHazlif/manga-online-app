import React, { useRef } from "react";
import { phone1, wallpaper } from "../assets";
import { android } from "../assets/icons";
import { motion, useInView } from "framer-motion";

const AppDownload = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  const handleClick = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=zxc.laitooo.manga.online";
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
      transition={{ duration: 0.5 }}
      id="app-download"
      className=" w-full h-[300px] relative "
    >
      <div className="absolute text-white flex flex-col justify-center items-center w-full h-[300px] z-20">
        <h2 className="sm:text-4xl text-2xl sm:w-full w-[200px] font-bold mb-10 text-shadow text-center leading-relaxed">
          حمل الآن تطبيق{" "}
          <span className="text-light-green-100">مانجا أون لاين</span>
        </h2>
        <button
          aria-label="Download the Manga Online app from Google Play Store"
          className="flex sm:gap-8 gap-4 bg-slate-200 py-5 sm:px-16 px-12 rounded-full text-black group transform duration-300 transition-all jerkExample"
          onClick={handleClick}
        >
          <div className="group-hover:text-light-green-100 duration-300  text-slate-400 flex justify-center items-center">
            <svg
              className="w-10 h-10"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M1559 5105 c-35 -19 -62 -76 -53 -112 4 -18 63 -85 156 -179 l150
-152 -59 -44 c-140 -108 -284 -290 -358 -451 -67 -149 -115 -346 -115 -479 l0
-58 1280 0 1280 0 0 58 c0 133 -48 330 -115 479 -74 161 -218 343 -358 451
l-59 44 150 152 c93 94 152 161 156 179 9 38 -19 94 -57 113 -61 32 -87 17
-263 -157 l-161 -160 -57 25 c-153 68 -309 97 -516 97 -207 0 -363 -29 -516
-97 l-57 -25 -156 155 c-180 178 -209 195 -272 161z m524 -789 c18 -7 45 -28
61 -45 24 -25 30 -42 34 -91 4 -52 1 -66 -21 -99 -63 -95 -207 -93 -267 4 -33
53 -25 143 16 186 52 56 115 72 177 45z m1070 0 c18 -7 45 -28 61 -45 41 -43
49 -133 16 -186 -60 -97 -204 -99 -267 -4 -22 33 -25 47 -21 99 4 49 10 66 34
91 52 56 115 72 177 45z"
                />
                <path
                  d="M650 3405 c-103 -34 -197 -141 -220 -250 -7 -35 -10 -303 -8 -836 l3
-784 26 -56 c101 -214 364 -259 523 -89 25 27 52 70 65 104 21 58 21 58 19
874 l-3 817 -24 47 c-72 141 -242 219 -381 173z"
                />
                <path
                  d="M1280 2323 c0 -1044 1 -1100 19 -1138 22 -50 69 -91 119 -105 20 -5
92 -10 159 -10 l121 0 4 -402 c4 -388 5 -405 26 -459 28 -71 97 -143 170 -177
155 -73 343 2 421 167 l26 56 3 407 3 408 209 0 209 0 3 -408 3 -407 26 -56
c78 -165 266 -240 421 -167 73 34 142 106 170 177 21 54 22 71 26 458 l4 403
121 0 c67 0 139 5 159 10 50 14 97 55 119 105 18 38 19 94 19 1138 l0 1097
-1280 0 -1280 0 0 -1097z"
                />
                <path
                  d="M4295 3407 c-92 -31 -163 -91 -206 -175 l-24 -47 -3 -817 c-2 -816
-2 -816 19 -874 13 -34 40 -77 65 -104 159 -170 422 -125 523 89 l26 56 0 815
0 815 -33 67 c-54 110 -151 177 -265 184 -35 2 -79 -2 -102 -9z"
                />
              </g>
            </svg>
          </div>
          <div className="text-start">
            <p>تنزيل التطبيق</p>
            <p className="font-kufi text-sm text-slate-700">
              من متجر جوجل بلاي
            </p>
          </div>
        </button>
      </div>
      <div className="relative w-full z-0">
        <img
          src={wallpaper}
          alt="background"
          className="absolute top-0 right-0 h-[300px] w-full object-cover"
        />
      </div>
    </motion.section>
  );
};

export default AppDownload;
