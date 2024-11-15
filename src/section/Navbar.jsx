import React, { useEffect, useRef, useState } from "react";
import BarMenu from "../components/BarMenu";
import Button3 from "../components/Button3";
import SectionName from "../components/SectionName";
import { logoDark, logoLight } from "../assets/icons";

const Navbar = ({...props}) => {
  const [openBarMenu, setOpenBarMenu] = useState(false);

  const handleClick = () => {
    setOpenBarMenu(false);
  };

  return (
    <nav
      className={`h-full w-full navbar-padding-x flex justify-between items-center text-base font-bold text-kufi`}
    >
      <div className="w-[180px] flex justify-between items-center min-w-[150px]">
        <img
          src={props.isFixed ? logoLight : logoDark}
          alt="مانجا اون لاين"
          className="w-full"
        />
      </div>
      <ul className="flex justify-between items-center max-md:hidden whitespace-nowrap">
        <SectionName
          activeSection={props.activeSection}
          isFixed={props.isFixed}
          linkHref="https://www.onma.top/"
          text='الرئيسية'
          sectionId='hero'
        />
        <SectionName
          activeSection={props.activeSection}
          isFixed={props.isFixed}
          linkHref="#descover"
          text='استكشف'
          sectionId='descover'
        />
        <SectionName
          activeSection={props.activeSection}
          isFixed={props.isFixed}
          linkHref="#features"
          text='مميزات'
          sectionId='features'
        />
        <SectionName
          activeSection={props.activeSection}
          isFixed={props.isFixed}
          linkHref="#contact"
          text='اتصل بنا'
          sectionId='contact'
        />
      </ul>
      <div className="max-md:hidden">
        <Button3 stylish="min-h-10 max-w-64 w-40 min-w-32" />
      </div>

      <div className="md:hidden" onClick={() => setOpenBarMenu(!openBarMenu)}>
        <i
          className={`fa-solid fa-bars text-2xl hover:text-slate-400 duration-300 transition-colors cursor-pointer ${
            openBarMenu && "text-light-green-100"
          }`}
        ></i>

        {openBarMenu && (
          <div className="">
            <BarMenu handleClick={handleClick} />
            <div
              onClick={handleClick}
              className="w-screen h-screen top-0 right-0 bg-black opacity-75 z-40 fixed"
            ></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
