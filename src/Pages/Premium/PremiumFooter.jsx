import React, { useState } from "react";
import ComingSoon from "../../Components/ComingSoon/useComingSoon";
import ComingSoonHook from "../../Components/ComingSoon/ComingSoonHook";

const PremiumFooter = ({ title1, title2, title3 }) => {
  const { ComingSoon, openComingSoon, closeComingSoon } = ComingSoonHook();
  const handleComingSoon = () => {
    setShowComingSoon(true);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <span onClick={handleComingSoon} className="cursor-pointer">
        {title1}
      </span>
      <span onClick={handleComingSoon} className="cursor-pointer">
        {title2}
      </span>
      <span onClick={handleComingSoon} className="cursor-pointer">
        {title3}
      </span>
      {showComingSoon && <ComingSoon onClose={handleClose} />}
    </div>
  );
};

export default PremiumFooter;
