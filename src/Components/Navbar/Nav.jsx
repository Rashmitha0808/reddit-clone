import React, { useEffect, useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { PiChatCircleDots, PiBellThin, PiPlus } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import { HiMiniHome } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiFlowerEmblem } from "react-icons/gi";
import { BsQrCodeScan } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { MdOutlineClear } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [searchValue, SetsearchValue] = useState("");
  const handleSearch = (e) => {
    SetsearchValue(e.target.value);
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchValue.length < 3) return;
      navigate(`/search/${searchValue}`);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  return (
    <div className="flex items-center">
      <div className="lg:hidden flex items-center ">
        <HiOutlineMenu className="w-7 h-7 ml-4 cursor-pointer" />
      </div>
      <div className="px-7 w-full h-16 border-b border-solid flex items-center ">
        <nav className="flex justify-between w-full  h-[40px] items-center">
          <div className="header-start flex items-center cursor-pointer">
            <Link to="/">
              <img src="/Assets/reddit-logo.png" className="w-9 h-9 mr-2 object-contain" />
            </Link>
            <img src="/Assets/reddit-word.png" className="w-50 h-8 object-contain" />
            {/* <HiMiniHome />
          <span>Home</span>
          <MdKeyboardArrowDown /> */}
          </div>

          <div className=" search-bar flex items-center content-center  rounded-full bg-[#eeeeee] px-4 h-[45px] w-[41.5rem]  border-[#edeff1] hover:bg-[#e6eaed]">
            <div className="search-icon  pr-2 text-[#0f1a1c]">
              <CiSearch className="w-5 h-5 text-black" />
            </div>

            <form className="text-neutral-content-strong w-full">
              <input type="search" onChange={handleSearch} placeholder="Search Reddit" className="bg-inherit border-none focus:outline-none  w-full" />
            </form>

            {/* <div className=" close-search pr-3">
            <IoIosCloseCircleOutline className=" w-5 h-5" />
          </div> */}
          </div>

          <div className=" header-end flex items-center h-[45px] ">
            <div className="flex items-center px-3 rounded-full h-full mr-2   bg-[#eeeeee] border-[#edeff1] hover:bg-[#e6eaed]">
              <BsQrCodeScan className="mr-2 w-5 h-5" />
              <button className="font-medium		">Get app</button>
            </div>
            <div className="flex items-center px-3  h-full  mr-2  text-white font-roboto rounded-full bg-[#d93a00]   hover:bg-[#962900]">
              <button className="font-medium		">Log In</button>
            </div>
            <div className="flex items-center h-full px-3 rounded-full cursor-pointer  hover:bg-[#e6eaed]">
              <RxDotsHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* after login show this */}
          {/* <div className="header-end-after-login">
          <BsArrowUpRightCircle />
          <PiChatCircleDots />
          <PiBellThin />
          <PiPlus />
          <span>Advertise</span>

          <div className="user-icon">
            <img src="/Assets/reddit-logo.png" className="w-10" />

            <img src="/Assets/profile-img.jpg" className="w-20" />
            <div className="user-details">
              <span>Glitter head</span>
              <span>
                <GiFlowerEmblem className="text-orange-700" /> 1 Karma
              </span>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
//  bg-slate-900
//1200 d show the 3 option
