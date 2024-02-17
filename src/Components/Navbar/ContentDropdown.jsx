import React, { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const ContentDropdown = ({ content, toggleIcon }) => {
  const [toggleState, setToggleIcon] = useState(false);
  const handleToggle = () => {
    setToggleIcon(!toggleState);
    handleToggle(!toggleState);
  };
  return (
    <div className="bg-white flex items-center px-5 py-3 gap-5 text-sm font-medium overflow-auto max-h-full max-w-full">
      <span className="cursor-pointer text-[#1C1C1C]">{content}</span>
      {content === "Online Status" && (
        <span onClick={handleToggle}>
          {toggleState ? (
            <BsToggleOn className="h-9 w-9 text-blue-400 cursor-pointer" />
          ) : (
            <BsToggleOff className="h-9 w-9 text-slate-300 cursor-pointer" />
          )}
        </span>
      )}
    </div>
  );
};

export default ContentDropdown;
