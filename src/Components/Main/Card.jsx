import React, { useEffect } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PiArrowFatUpLight, PiArrowFatDown } from "react-icons/pi";
import { GoComment } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import useAPI from "../../Hooks/useAPI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({ _id, author, channel, content, commentCount, likeCount }) => {
  const navigate = useNavigate();
  const authenticated = useSelector((state) => state.user);

  const handleVote = () => {
    if (!authenticated) return navigate("/login");
  };
  const handleComment = () => {
    if (!authenticated) return navigate("/login");
  };
  const handleShare = () => {
    if (!authenticated) return navigate("/login");
  };

  return (
    <div key={_id} className=" main">
      <div
        className={`card flex flex-col ${
          authenticated
            ? "hover:flex-none rounded-md hover:border-black"
            : "hover:bg-[#f4f5f6] rounded-2xl"
        } bg-white  px-4 py-1 my-3`}
      >
        <div className="header-section flex flex-row justify-between">
          <div className="user-details text-sm flex flex-row items-center">
            <div className="rounded-full">
              <img
                src={author?.profileImage}
                className="h-9 w-9 mr-2 px-1 py-1 cursor-pointer"
              />
            </div>
            <div className="font-medium cursor-pointer">
              r/{channel?.name.charAt(0).toLowerCase() + channel?.name.slice(1)}
            </div>
            <div className="text-slate-600">. 1 min. ago</div>
          </div>

          <div className="follow-action flex flex-row items-center">
            <button className="rounded-full h-7 w-12 text-sm font-bold text-white bg-[#0045ac] hover:bg-[#003584]">
              Join
            </button>
            <div className="rounded-full cursor-pointer hover:bg-[#e8e9ec] p-2 ml-1">
              <BiDotsHorizontalRounded className="h-5 w-5 " />
            </div>
          </div>
        </div>

        <div className="main-content">
          <h1 className="font-medium text-2xl">
            {content.split("").slice(0, 60).join("") + "..."}
          </h1>
          <p>{content}</p>
          <div className="footer flex flex-row items-center gap-3 mt-2 ">
            <div
              onClick={handleVote}
              className=" flex flex-row items-center gap-1 px-2 py-[8px] bg-[#e8e9ec] hover:bg-[#dadce3] rounded-3xl cursor-pointer"
            >
              <PiArrowFatUpLight className="h-5 w-5" />
              <span className="px-1 text-sm font-semibold">{likeCount}</span>
              <PiArrowFatDown className="h-5 w-5" />
            </div>

            <div
              onClick={handleComment}
              className="flex flex-row items-center gap-1  px-3 py-[8px] bg-[#e8e9ec] hover:bg-[#dadce3]  rounded-3xl cursor-pointer"
            >
              <GoComment className="h-5 w-5" />
              <span className="text-sm font-semibold">{commentCount}.1K</span>
            </div>

            <div
              onClick={handleShare}
              className="flex flex-row items-center gap-1  px-3 py-[8px] bg-[#e8e9ec] hover:bg-[#dadce3]  rounded-3xl cursor-pointer"
            >
              <FiShare className="h-5 w-5" />
              <span className="text-sm font-semibold">Share</span>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className={"border"} /> */}
      {!authenticated && <hr className={" border"} />}
    </div>
  );
};

export default Card;
