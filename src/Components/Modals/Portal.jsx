import React, { Children, useEffect } from "react";

const Portal = ({ onClose, children, className }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    (
      <div
        onClick={handleClick}
        className={`fixed inset-0 z-50 bg-red-500 backdrop-blur-sm
        flex items-center justify-center ${className}`}
      >
        {children}
      </div>
    ),
    document.body
  );
};

export default Portal;
