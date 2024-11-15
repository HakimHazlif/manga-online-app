import React from "react";

const Button2 = () => {
  const handleClick = () => {
    window.location.href = "#app-download";
  };

  return (
    <button
      className="h-12 w-[180px] text-center font-kufi relative items-center font-semibold text-base rounded-full overflow-hidden bg-light-green-100 text-light-green-100 group btn-2"
      onClick={handleClick}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        تحميل التطبيق
      </span>
    </button>
  );
};

export default Button2;
