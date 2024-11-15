import React from "react";

const FeatureCard = ({ icon, title, description, color, iconSize, borderColor }) => {
  return (
    <div className="shadow-2 rounded-lg py-14 px-6 w-[300px] flex flex-col items-center text-center justify-center gap-2">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full mb-2 ${color}`}
      >
        <img src={icon} alt="feature icon" className={`${iconSize}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <hr className={`border-2 ${borderColor} w-1/3 text-center `} />
      <p className="font-kufi mt-6">{description}</p>
    </div>
  );
};

export default FeatureCard;
