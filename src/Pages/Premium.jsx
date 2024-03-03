import React from "react";

const Premium = () => {
  return (
    <div className="headersec w-full">
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="max-w-full bgimagesec text-white bg-[url('/Assets/premiumHero.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="flex flex-col m-auto p-36 gap-3">
            <img
              className="w-666"
              src="/Assets/reddit_premium_landing.png"
              alt="reddit_pre_logo"
            />
            <p className="font-bold text-xl">
              Help support Reddit and get VIP treatment and exclusive access.
            </p>
            <div className="buttons flex flex-row gap-2">
              <button className="text-sm font-bold py-2 px-20 border border-white rounded-full">
                {" "}
                $5.99/Month
              </button>
              <button className="text-sm font-bold py-2 px-10 rounded-full bg-orange-400">
                $49.99/Year{" "}
                <span className=" bg-white text-orange-400 rounded-full p-1 text-xs">
                  Save 30%
                </span>
              </button>
            </div>
            <span className="py-2 text-xs">
              Subsciptions automatically renew
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
