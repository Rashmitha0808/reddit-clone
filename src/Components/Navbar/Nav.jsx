import React, { useEffect, useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { PiChatCircleDots, PiBellThin, PiPlus } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import { HiMiniHome } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiFlowerEmblem } from "react-icons/gi";
import { BsQrCodeScan } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { MdOutlineClear } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";
import LoginPage from "../LogInSignUp/LoginPage";
import Portal from "../Modals/Portal";
import Authentication from "../LogInSignUp/Authentication";

const Nav = () => {
  const { authenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [searchValue, SetsearchValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const onModalOpen = (e) => {
    if (e.stopProgation) e.stopProgation();
    setShowModal(true);
  };
  const onModalClose = (e) => {
    console.log("debug");
    setShowModal(false);
  };
  const handleSearch = (e) => {
    SetsearchValue(e.target.value);
  };
  const handleUserLogin = () => {
    localStorage.getItem("");
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
    <nav className="flex items-center h-16 fixed top-0 left-0 right-0 bg-white w-full">
      <div className="lg:hidden flex items-center ">
        <HiOutlineMenu className="w-7 h-7 ml-4 cursor-pointer" />
      </div>

      {/* <div className="px-7 w-full h-16 border-b border-solid  flex items-center "> */}
      <div className="flex justify-between w-full border-b px-7 h-16 items-center">
        <div className="logo flex items-center cursor-pointer">
          <Link to="/">
            <img
              src="/Assets/reddit_logo.png"
              alt="logo"
              className="w-32 max-w-full"
            />
          </Link>

          {/* <HiMiniHome />
          <span>Home</span>
          <MdKeyboardArrowDown /> */}
        </div>

        <div className=" search-bar flex items-center content-center rounded-full bg-[#eeeeee] px-4 h-[45px] w-[41.5rem]  border-[#edeff1] hover:bg-[#e6eaed]">
          <div className="search-icon  pr-2 text-[#0f1a1c]">
            <CiSearch className="w-5 h-5 text-black" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="text-neutral-content-strong max-w-full"
          >
            <input
              type="search"
              onChange={handleSearch}
              placeholder="Search Reddit"
              className="bg-inherit border-none focus:outline-none max-w-full"
            />
          </form>
        </div>

        {!authenticated ? (
          <div className=" header-end flex items-center h-[45px] ">
            <div className="flex items-center content-end px-3 rounded-full h-full mr-2   bg-[#eeeeee] border-[#edeff1] hover:bg-[#e6eaed]">
              <BsQrCodeScan className="mr-2 w-5 h-5" />
              <button className="font-medium">Get app</button>
            </div>
            <div className="flex items-center px-3  h-full  mr-2  text-white font-roboto rounded-full bg-[#d93a00]   hover:bg-[#962900]">
              <button className="font-medium" onClick={onModalOpen}>
                Log In
              </button>
            </div>
            <div className="flex items-center h-full px-3 rounded-full cursor-pointer  hover:bg-[#e6eaed]">
              <RxDotsHorizontal className="w-5 h-5" />
            </div>
          </div>
        ) : (
          <div className="header-end-after-login flex items-center gap-3 max-w-full">
            <BsArrowUpRightCircle className="cursor-pointer h-6 w-6 hidden lg:inline-block" />
            <PiChatCircleDots className="cursor-pointer h-7 w-7 hidden lg:inline-block" />
            <PiBellThin className="cursor-pointer h-7 w-7 hidden lg:inline-block" />
            <Link to="/post">
              <PiPlus className="cursor-pointer h-7 w-7 hidden lg:inline-block" />
            </Link>
            <span className="hidden lg:inline-block">Advertise</span>

            <div className="flex flex-col max-w-full whitespace-nowrap">
              <div className="flex justify-between items-center mx-2 border p-1">
                <img src="/Assets/profile-img.jpg" className="w-10" />
                <div className="user-details max-w-full flex items-center flex-col px-3 hidden lg:flex ">
                  <span className="text-sm ">Glitter head</span>
                  <div className="flex items-center gap-1 text-sm">
                    <GiFlowerEmblem className="text-orange-700" />
                    <span className="text-sm font-bold text-gray-400">
                      1 Karma
                    </span>
                  </div>
                </div>
                {openDropdown ? (
                  <MdKeyboardArrowUp onClick={handleDropdown} />
                ) : (
                  <MdKeyboardArrowDown onClick={handleDropdown} />
                )}
              </div>
              <div>{openDropdown && <DropDown />}</div>
            </div>
          </div>
        )}
        {showModal && (
          <Portal onClose={onModalClose}>
            <Authentication onClose={onModalClose} />
          </Portal>
        )}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
//  bg-slate-900
//1200 d show the 3 option
