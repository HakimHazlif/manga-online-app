import React from "react";
import Button2 from "./Button2";
import Button3 from "./Button3";

const BarMenu = ({ handleClick }) => {
  return (
    <div className="absolute md:hidden bg-dark-blue-1 rounded-lg left-7 top-12 sm:left-12 py-2 px-3">
      <div className="py-2 px-1 text-base">
        <ul className="flex flex-col gap-6 items-start text-white font-semibold text-lg mb-7">
          <li className="hover:text-light-green-100 cursor-pointer flex gap-3 w-full items-center text-base" onClick={handleClick}>
            <i className="fa-solid fa-house"></i>
            <a href="https://www.onma.top/" target="_blank">الرئيسية</a>
          </li>
          <li className="hover:text-light-green-100 cursor-pointer flex gap-3 w-full items-center">
            <i className="fa-solid fa-medal"></i>
            <a href="#features" className="text-sm">
              مميزات
            </a>
          </li>
          <li className="hover:text-light-green-100 cursor-pointer  flex gap-3 w-full items-center">
            <i className="fa-solid fa-compass"></i>
            <a href="#descover" className="text-sm">
              استكشف
            </a>
          </li>
          <li className="hover:text-light-green-100 cursor-pointer  flex gap-3 w-full items-center">
            <i className="fa-solid fa-paper-plane"></i>
            <a href="#contact" className="text-sm">
              اتصل بنا
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="mb-2">
          <Button3 />  
        </div>
      </div>
    </div>
  );
};

export default BarMenu;
