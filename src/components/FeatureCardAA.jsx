import React, { useState } from "react";

const FeatureCard = (props) => {
  const [scalable, setScalable] = useState(false);

  const handleFocus = () => {
    setScalable(true);
  };

  const handleBlur = () => {
    setScalable(false);
  };

  const handleClick = () => {
    if (scalable) {
      setScalable(false);
    }
  };

  return (
    <div
      className={`absolute transform transition-transform duration-500 ${props.position} ${
        scalable ? `z-50 ${props.translatation}` : `translate-0`
      }`}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      <div
        className={`shadow-2 p-2 overflow-hidden relative transition-all duration-1000 ${
          scalable
            ? `if-unscalable ${props.bgTo30Deg} duration-1000`
            : `if-scalable ${props.bgToRight}`
        }`}
      >
        <div className="flex justify-start items-center">
          <div
            className={`w-[36px] h-[36px] bg-slate-900 rounded-full text-white flex justify-center items-center transform transition-transform ease-linear opacity-100 ${
              scalable
                ? "duration-300 delay-700 -translate-x-[248px] cursor-pointer"
                : "translate-x-0 duration-300"
            }`}
            onClick={handleClick}
          >
            <i
              className={`fa-solid fa-arrow-left absolute text-lg transition-opacity duration-200 ${
                scalable ? "opacity-0 delay-[900ms]" : "opacity-100 delay-[100ms]"
              }`}
            ></i>
            <i
              className={`fa-solid fa-xmark absolute text-lg transition-opacity duration-200  ${
                scalable ? "opacity-1 delay-[900ms]" : "opacity-0"
              }`}
            ></i>
          </div>
          <p
            className={`font-kufi mr-3 text-white font-bold duration-700 transition-opacity pointer-events-none ${
              scalable ? "opacity-0" : "opacity-1 delay-700"
            }`}
          >
            {props.title}
          </p>
        </div>

        <div
          className={`relative z-10 flex flex-col justify-center items-center pt-10 px-3 gap-2 text-center text-white transition-opacity duration-1000 ${
            scalable ? "opacity-1 delay-[1s]" : "opacity-0"
          }`}
        >
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full mb-2 text-lg slate-200-white-gradient bobm ${props.textColor}`}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className={props.textSize}
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill='currentColor'
                stroke="none"
              >
                {props.iconPath.map((path, index) => (
                  <path d={path} key={index} />
                ))}
              </g>
            </svg>
          </div>
          <h3 className="text-white text-xl font-semibold mb-2 text-shadow-10">{props.title}</h3>
          <hr className={`border-[1.5px] border-white w-1/3 text-center `} />
          <p className="font-kufi mt-6 text-white text-shadow-10">{props.description}</p>
        </div>
        <div
          className={`w-full h-full absolute top-0 right-0 ${props.imageBg} bg-contain bg-no-repeat bg-bottom pointer-events-none -z-0 transition-opacity duration-300 ${
            scalable ? "opacity-20 delay-[0.9s] " : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default FeatureCard;
