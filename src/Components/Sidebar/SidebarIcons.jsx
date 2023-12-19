import React from "react";

const SidebarIcons = ({ content, icon, onClick }) => {
  return (
    <div className="py-3 flex items-center  rounded-xl cursor-pointer hover:bg-[#f2f4f5]">
      <span className="px-4 text-xl">{icon}</span>
      <span className="text-14" onClick={onClick}>
        {content}
      </span>
    </div>
  );
};

export default SidebarIcons;
