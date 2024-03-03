import React from "react";
import { Link } from "react-router-dom";

const FrontpageSidebar = () => {
  return (
    <>
      <div className="mt-6 max-w-2xl">
        <div className="flex flex-col gap-1 bg-white p-4 rounded-md border border-[#ccc]">
          <div className="flex flex-row gap-2">
            <img
              src="/Assets/premium.png"
              className="h-7 w-8"
              alt="reddit-premium-image"
            />
            <span>Reddit Premium</span>
          </div>
          <span className="text-xs font-light">The best Reddit experience</span>
          <Link to="/premium">
            <button className="bg-[#ff4500] rounded-3xl text-white font-bold text-base py-1 px-2">
              Try Now
            </button>
          </Link>
        </div>

        <div className="bg-[url('/Assets/bannerPf.png')]">
          <div>
            <img
              src="/Assets/frontpagesidebar.png"
              className="w-9 h-12"
              alt=""
            />
          </div>
          hello
        </div>
      </div>
    </>
  );
};

export default FrontpageSidebar;
// 2022 jan sde
