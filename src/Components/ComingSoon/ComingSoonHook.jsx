import React, { useState } from "react";

const useComingSoon = () => {
  const [ComingSoon, setComingSoon] = useState(false);
  const openComingSoon = () => {
    setComingSoon(true);
  };
  const closeComingSoon = () => {
    setComingSoon(false);
  };

  return {
    ComingSoon,
    openComingSoon,
    closeComingSoon,
  };
};

export default useComingSoon;
