import React from "react";

const useComingSoon = ({ ComingSoon, openComingSoon, closeComingSoon }) => {
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
