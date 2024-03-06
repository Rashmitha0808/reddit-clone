import React from "react";

const PremiumButton = ({ children, variant }) => {
  const buttonSytle = {
    default:
      "text-sm font-bold py-1 px-10 lg:py-3 lg:px-20 border border-white rounded-full max-w-full",
    orange:
      "text-sm font-bold py-1 px-5 lg:py-3 lg:px-20 rounded-full bg-orange-400 max-w-full",
  };
  const style = buttonSytle[variant] || buttonSytle.default;
  return <button className={style}>{children}</button>;
};

export default PremiumButton;
