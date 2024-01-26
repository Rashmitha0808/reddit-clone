import React, { useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { GoChevronDown, GoTag } from "react-icons/go";
import { LuNewspaper, LuImage, LuLink } from "react-icons/lu";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi2";

import { BiPoll } from "react-icons/bi";
import Icons from "./Icons";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/PostSlice";
const iconData = [
  { title: "Post", icon: <LuNewspaper /> },
  { title: "Image & Video", icon: <LuImage /> },
  { title: "Link", icon: <LuLink /> },
  { title: "Poll", icon: <BiPoll /> },
];

const iconFooter = [
  { icon: <BsPlusLg />, title: "OC" },
  { icon: <BsPlusLg />, title: "Spoiler" },
  { icon: <BsPlusLg />, title: "NSFW" },
  { icon: <GoTag />, title: "Flair" },
];
const Post = () => {
  const dispatch = useDispatch();

  const [postText, setPostText] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [colorIcon, setColorIcon] = useState("");

  const handleColorChange = (index, color) => {
    setColorIcon(color);
    console.log("hey im color");
  };
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ text: postText }));

    setPostText("");
  };
  return (
    <form className="ml-40 mt-5" onSubmit={handleSubmit}>
      <div className="flex flex-col w-[740px] ">
        <div className="flex flex-row  items-center my-2 justify-between border-b-2 ">
          <h1 className="text-lg font-medium"> Create a post</h1>
          <button className="text-[#6171bf] font-bold">
            DRAFT
            <span className="mx-2 px-1 items-center border-none rounded-s-sm font-medium border bg-gray-500 text-white">
              0
            </span>
          </button>
        </div>

        <div className="rounded-md community flex flex-col w-[298px] my-2 bg-white py-2 font-medium">
          <div className="flex flex-row content-center justify-between items-center">
            <div className="flex flex-row content-center items-center">
              <TbCircleDashed className="w-8 h-8 mx-2" />
              <span className="text-base">Choose a community</span>
            </div>

            {openDropdown ? (
              <MdOutlineKeyboardArrowUp
                className="cursor-pointer text-[#7e8284] mr-4 w-6 h-6"
                onClick={handleDropdown}
              />
            ) : (
              <GoChevronDown
                onClick={handleDropdown}
                className="cursor-pointer text-[#7e8284] mr-4 w-6 h-6"
              />
            )}
          </div>
          {openDropdown && (
            <div className="text-sm mx-3 py-2 cursor-not-allowed">
              Hey your own name here!!
            </div>
          )}
        </div>

        <div className="rounded-md my-3  bg-white ">
          <div className="flex flex-row justify-around items-center text-lg font-bold border">
            {iconData.map((data, index) => (
              <Icons
                key={data.title}
                title={data.title}
                icons={data.icon}
                iconClasses="cursor-pointer"
              />
            ))}
          </div>

          <div className="m-4">
            <input
              className="w-full border py-2 px-3 rounded-md text-gray-700"
              placeholder="Title "
            />
          </div>
          <div className="m-4">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="w-full border py-2 px-3 rounded-md text-gray-700"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Text (optional)"
            />
          </div>

          <div className="m-4 flex flex-row  items-center content-center gap-10">
            {iconFooter.map((data, index) => (
              <Icons
                key={index}
                icons={data.icon}
                title={data.title}
                iconClasses={
                  index === 2
                    ? `cursor-pointer ${
                        colorIcon ? `bg-${colorIcon}` : ""
                      } rounded-full px-3`
                    : "cursor-not-allowed"
                }
                colorChange={handleColorChange}
              />
            ))}
          </div>

          <div className="flex gap-3 items-center content-center justify-end w-full border-t p-3 ">
            <button className="border border-blue-500  px-3 py-1 text-blue-500 font-bold rounded-2xl">
              Save Draft
            </button>
            <button
              className="bg-[#9e7a7a] text-[#ffffff80] font-bold rounded-2xl px-3 py-1"
              type="submit"
            >
              Post
            </button>
          </div>

          <div className="mx-4 my-2 flex items-center content-center gap-2 text-sm font-semibold">
            <input type="checkbox" />
            <span>Send me post replay notifications</span>
          </div>

          <div className="mx-4  pb-4 flex items-center content-center gap-1 text-center">
            Connect accouns to share your post
            <span title="Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.">
              <HiOutlineInformationCircle className="text-[#9e7a7a] w-6 h-6 " />
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Post;