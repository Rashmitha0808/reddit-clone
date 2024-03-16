import React from "react";
import { Link } from "react-router-dom";

const FrontpageSidebar = () => {
  return (
    <>
      <div className="mt-6 w-64 flex flex-col gap-6">
        <div className="flex flex-col gap-1 bg-white p-2 rounded-md border border-[#ccc]">
          <div className="flex flex-row items-center gap-3 text-xs font-medium">
            <img
              src="/Assets/premium.png"
              className="h-7 w-8"
              alt="reddit-premium-image"
            />
            <div className="flex flex-col ">
              <span>Reddit Premium</span>
              <span className="text-xs font-light">
                The best Reddit experience
              </span>
            </div>
          </div>

          <Link to="/premium">
            <button className="w-full bg-[#ff4500] rounded-3xl text-white font-semibold text-base py-1 px-2">
              Try Now
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-md border border-[#ccc]">
          <div className=" bg-[url('/Assets/bannerPf.png')] bg-top bg-no-repeat bg-contain">
            <div className="pt-4 px-2 flex flex-row items-center gap-4 font-medium ">
              <img
                src="/Assets/frontpagesidebar.png"
                className="w-10 h-16 "
                alt=""
              />
              <span className="">Home</span>
            </div>
            <div className="px-1 py-3 text-sm font-medium ">
              <span className=" ">
                Your personal Reddit frontpage. Come here to check in with your
                favorite communities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontpageSidebar;
// 2022 jan sde
