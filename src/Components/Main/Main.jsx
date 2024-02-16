import React, { useEffect, useState } from "react";
import Card from "./Card";
import { PiRedditLogoThin, PiImageSquareThin } from "react-icons/pi";
import {
  BsLink45Deg,
  BsBarChartSteps,
  BsFillRocketFill,
  BsFire,
} from "react-icons/bs";
import { TiStarburstOutline } from "react-icons/ti";

import useAPI from "../../Hooks/useAPI";
import Icons from "../../Pages/Post/Icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Foot/Footer";
const Main = () => {
  const { authenticated } = useSelector((state) => state.user);
  const { get, data } = useAPI();
  const filterIcons = [
    { icon: <BsFillRocketFill />, title: "Best" },
    { icon: <BsFire />, title: "Hot" },
    { icon: <TiStarburstOutline />, title: "New" },
    { icon: <BsBarChartSteps />, title: "Top" },
  ];
  useEffect(() => {
    get("/reddit/post?limit=20&page=2");
  }, []);

  return (
    <>
      {authenticated && (
        <>
          <Link to="/post">
            <div className="w-full my-6 ">
              <div className="flex flex-row border p-1 items-center bg-white rounded-md">
                <div className="m-1 p-1">
                  <PiRedditLogoThin className="w-9 h-9 cursor-pointer" />
                </div>
                <input
                  className="px-4 py-3 w-full rounded-md text-sm bg-[#f2f5f7] "
                  type="text"
                  placeholder="Create Post"
                />
                <div className="p-2 mx-1 hover:bg-[#e6eaed] rounded-md cursor-pointer">
                  <PiImageSquareThin className="w-6 h-6 " />
                </div>
                <div className="p-2 hover:bg-[#e6eaed] rounded-md cursor-pointer">
                  <BsLink45Deg className="w-6 h-6 " />
                </div>
              </div>
            </div>
          </Link>
          <div className="mt-6 mb-9">
            <div className="flex flex-row gap-6 items-center rounded-md p-1 w-full bg-white  border">
              {filterIcons.map((icons, index) => (
                <Icons
                  key={index}
                  icons={icons.icon}
                  title={icons.title}
                  iconClasses="hover:bg-[#e6eaed] rounded-3xl px-3 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </>
      )}
      <div className="max-w-full ">
        {data?.map((post) => (
          <Card key={post?._id} {...post} />
        ))}
      </div>
    </>
  );
};

export default Main;
