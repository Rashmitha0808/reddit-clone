import React from "react";

const Icons = ({ icons, title, iconClasses, colorChange }) => {
  return (
    <div>
      <div
        className={`text-[#878a8c] font-semibold py-3 flex items-center content-center gap-2 ${iconClasses}`}
        onClick={colorChange}
      >
        {icons}
        {title}
      </div>
    </div>
  );
};

export default Icons;
