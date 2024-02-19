import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/UserSlice";
import { CgProfile } from "react-icons/cg";
import { TfiEye } from "react-icons/tfi";
import { RxExit } from "react-icons/rx";

import ContentDropdown from "./ContentDropdown";

function DropDown() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };
  const [dropdownToggle, setDropdownToggle] = useState(false); // State to manage dropdown toggle
  const handleToggle = (toggleState) => {
    setDropdownToggle(toggleState); // Updates the dropdown toggle state
  };

  const contents = [
    { content: "Profile" },
    { content: "Create Avatar" },
    { content: "User Settings" },
  ];

  return (
    <div className="fixed flex flex-col bg-white w-48 rounded-s-md overflow-auto ">
      <div className="flex flex-row items-center gap-3 max-w-full py-3 px-5 text-gray-500">
        <CgProfile className="w-5 h-5 " />
        <span className=" font-medium">My Stuff</span>
      </div>
      {contents.map((data, index) => (
        <ContentDropdown
          content={data.content}
          key={index}
          handleToggle={handleToggle}
        />
      ))}
      <hr />
      <div className="flex flex-row items-center gap-3 max-w-full py-3 px-5 text-gray-500">
        <TfiEye />
        <span className="font-medium">View Options</span>
      </div>
      <ContentDropdown content={"Dark Mode"} />
      <hr />
      <div className="py-4 flex flex-row items-center justify-center gap-3 px-4 cursor-pointer">
        <RxExit className="w-5 h-5" />
        <button onClick={handleLogout}> log out</button>
      </div>
    </div>
  );
}

export default DropDown;
