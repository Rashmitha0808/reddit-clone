import React from "react";
import { Link } from "react-router-dom";

const PremiumCard = ({ img, heading, para }) => {
  return (
    <Link to="/">
      <div className="bg-[#f6f7f8]  flex flex-col justify-center content-center items-center p-3 w-48 rounded-xl cursor-pointer">
        <img className="w-12 h-12" src={img} />
        <h1 className="text-sm font-semibold">{heading}</h1>
        <p className="text-[#9a9ea3] text-xs">{para}</p>
      </div>
    </Link>
  );
};

export default PremiumCard;
