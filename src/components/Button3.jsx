import React from "react";

const Button3 = ({ stylish }) => {
  const handleClick = () => {
    window.location.href = "#app-download";
  };
  return (
    <button className={`${stylish} rounded-full font-semibold bottom-0 relative overflow-hidden bg-light-green-100 text-center text-base duration-300 z-10 cursor-pointer text-white font-kufi btn-5`} onClick={handleClick}>
      تحميل التطبيق
    </button>
  );
};

export default Button3;
