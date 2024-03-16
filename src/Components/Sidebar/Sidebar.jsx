import React from "react";
import { useState } from "react";
import Footer from "../Foot/Footer";
import Accordion from "./Accordion";
import SidebarIcons from "./SidebarIcons";
import "../Sidebar/Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import {
  PiArrowUpRightLight,
  PiListChecksLight,
  PiScalesThin,
  PiRedditLogoThin,
  PiWrench,
  PiBookOpenThin,
  PiMicrophoneStage,
  PiContactlessPaymentLight,
} from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GiBugleCall, GiSandsOfTime } from "react-icons/gi";
import { MdOutlinePolicy, MdContentPaste } from "react-icons/md";

const Sidebar = () => {
  const initialIconToShow = 6;
  const [iconToShow, setIconToShow] = useState(initialIconToShow);

  const handleShowMore = () => {
    setIconToShow(accordionItems[2].content.length);
  };
  const handleShowLess = () => {
    setIconToShow(initialIconToShow);
  };

  const accordionItems = [
    {
      title: "RECENT",
      content: "",
    },
    {
      title: "TOPICS",
      content: "",
    },
    {
      title: "RESOURCES",
      content: [
        <SidebarIcons
          key={1}
          icon={<PiRedditLogoThin />}
          content={"About Reddit"}
        />,
        <SidebarIcons key={2} icon={<GiBugleCall />} content={"Advertise"} />,
        <SidebarIcons
          key={3}
          icon={<IoIosHelpCircleOutline />}
          content={"Help"}
        />,
        <SidebarIcons key={4} icon={<PiBookOpenThin />} content={"Blog"} />,
        <SidebarIcons key={5} icon={<PiWrench />} content={"Career"} />,
        <SidebarIcons key={6} icon={<PiMicrophoneStage />} content={"Press"} />,
        ...(iconToShow === initialIconToShow
          ? []
          : [
              <hr />,
              <SidebarIcons
                key={7}
                icon={<PiContactlessPaymentLight />}
                content={"Communities"}
              />,
              <SidebarIcons
                key={8}
                icon={<GiSandsOfTime />}
                content={"Best of Reddit"}
              />,
              <SidebarIcons
                key={9}
                icon={<PiListChecksLight />}
                content={"Topics"}
              />,
              <hr />,
              <SidebarIcons
                key={10}
                icon={<MdOutlinePolicy />}
                content={"Content Policy"}
              />,
              <SidebarIcons
                key={11}
                icon={<PiScalesThin />}
                content={"Privacy Policy"}
              />,
              <SidebarIcons
                key={12}
                icon={<MdContentPaste />}
                content={"User Agreement"}
              />,
            ]),
        <div
          className="mt-2 cursor-pointer"
          onClick={
            iconToShow === initialIconToShow ? handleShowMore : handleShowLess
          }
        >
          {iconToShow === initialIconToShow ? (
            <button className=" hover:bg-[#f2f4f5] font-medium text-sm px-2 py-2 rounded-full">
              See More
            </button>
          ) : (
            <button className=" hover:bg-[#f2f4f5] font-medium text-sm px-2 py-2 rounded-full">
              See Less
            </button>
          )}
        </div>,
      ],
    },
  ];
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="sidebar-main px-4 flex flex-col justify-self-start  w-80 border overflow-y-auto">
        <SidebarIcons
          icon={<AiFillHome className="w-7 h-7" />}
          content={"Home"}
        />
        <SidebarIcons
          icon={
            <PiArrowUpRightLight className=" rounded-full border border-black w-6 h-6" />
          }
          content={"Popular"}
        />

        {/* here thsi is the culprit , once it will show this alert and it wont because of mounting*/}
        <Accordion items={accordionItems} />
        <div className="visible py-md grow flex flex-col justify-end">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default React.memo(Sidebar);
