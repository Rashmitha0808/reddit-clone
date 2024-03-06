import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const ComingSoon = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);
  });
  return (
    <div className="flex flex-row items-center gap-3 fixed top-5 left-auto bg-red-500 text-white px-6 py-2">
      <img
        className="w-7 h-10"
        src="/Assets/comingSoon.png"
        alt="reddit-logo"
      />
      <span>Coming soon!!</span>
      <IoCloseOutline onClick={onClose} />
    </div>
  );
};

export default ComingSoon;
