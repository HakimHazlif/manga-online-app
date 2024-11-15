import React, { useEffect, useState } from 'react'

const SectionName = ({ activeSection, isFixed, linkHref, text, sectionId }) => {

  return (
    <li
      className={`px-5 py-[21px] w-full h-full group-in cursor-pointer duration-300 transition-colors relative ${
        isFixed 
        ? activeSection === sectionId 
          ? "bg-[#26313ca2]" 
          : 'hover:bg-[#26313ca2]' 
        : 'hover:text-black'
      }`}
    >
      {isFixed && (
        <div
          className={`absolute top-0 right-0 w-full h-[3px] bg-light-green-100 unselected-section ${
            activeSection === sectionId ? "selected-section" : ''
          }`}
        ></div>
      )}
      <a 
        href={linkHref} 
        target={linkHref === 'https://www.onma.top/' ? "_blank" : undefined} 
        className="text-sm">
        {text}
      </a>
    </li>
  )
}

export default SectionName