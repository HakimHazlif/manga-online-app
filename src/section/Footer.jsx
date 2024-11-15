import React from "react";
import { logoLight } from "../assets/icons";

const Footer = () => {

  return (
    <footer
      className="bg-[#252422]
     padding-x pt-10 pb-4 font-kufi"
    >
      <div className="flex justify-between md:flex-row flex-col gap-16 sm:items-start items-center">
        <a href="/" className="w-52">
          <img
            src="https://www.onma.top/app/images/logo.png"
            alt="مانجا اون لاين"
            className="w-full cursor-pointer max-w-56 min-w-40"
          />
        </a>
        <div className="flex sm:gap-20 gap-10 sm:flex-row flex-col sm:items-start items-center">
          <div className="flex sm:gap-20 gap-2 sm:flex-row flex-col sm:items-start items-center">
            <ul className="flex flex-col gap-2 text-white font-medium justify-between sm:items-start items-center">
              <li className="hover:text-light-green-100 duration-200 cursor-pointer transition-colors">
                <a href="https://www.onma.top/" target="_blank">
                  الرئيسية
                </a>
              </li>
              <li className="hover:text-light-green-100 duration-200 cursor-pointer transition-colors">
                <a href="https://www.onma.top/manga-list" target="_blank">
                  قائمة المانجا
                </a>
              </li>
              <li className="hover:text-light-green-100 duration-200 cursor-pointer transition-colors">
                <a href="https://www.onma.top/latest-release" target="_blank">
                  أحدث الفصول
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 text-white font-medium justify-between sm:items-start items-center">
              <li className="hover:text-light-green-100 duration-200 cursor-pointer transition-colors">
                <a href="https://www.onma.top/advanced-search" target="_blank">
                  بحث متقدم
                </a>
              </li>
              <li className="hover:text-light-green-100 duration-200 cursor-pointer transition-colors">
                <a href="https://www.onma.top/privacy-policy" target="_blank">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex sm:gap-4 gap-10 items-start">
            <li className="hover:text-light-green-100 transform hover:scale-125 duration-300 cursor-pointer transition-all text-white h-4 w-4">
              <a href="https://www.facebook.com/onmangacom" target="_blank">
                <i className="fa-brands fa-square-facebook text-3xl"></i>
              </a>
            </li>
            <li className="hover:text-light-green-100 transform hover:scale-125 duration-300 cursor-pointer transition-all text-white h-4 w-4">
              <a href="https://x.com/onmanga" target="_blank">
                <i className="fa-brands fa-square-x-twitter text-3xl"></i>
              </a>
            </li>
            <li className="hover:text-light-green-100 transform hover:scale-125 duration-300 cursor-pointer transition-all text-white">
              <a href={logoLight} target="_blank">
                <i className="fa-solid fa-envelope text-3xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 text-center text-white text-sm">
        <p className="font-kufi">جميع الحقوق محفوظة &#169;</p>
      </div>
    </footer>
  );
};

export default Footer;
