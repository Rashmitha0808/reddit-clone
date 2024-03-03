import React from "react";

const PremiumButton = ({ children, variant }) => {
  const buttonSytle = {
    default: "text-sm font-bold py-3 px-20 border border-white rounded-full",
    orange: "text-sm font-bold py-3 px-10 rounded-full bg-orange-400",
  };
  const style = buttonSytle[variant] || buttonSytle.default;
  return <button className={style}>{children}</button>;
};

export default PremiumButton;
