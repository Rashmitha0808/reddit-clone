import React from "react";
import PremiumCard from "./PremiumCard";
import PremiumButton from "./PremiumButton";
import PremiumFooter from "./PremiumFooter";

const Premium = () => {
  const cardDetails = [
    {
      image: "/Assets/premium-ad-1.png",
      heading: "Ad-free Browsing",
      para: "Enjoy redditing without interruptions from ads",
    },

    {
      image: "/Assets/premium-ad-2.png",
      heading: "Exclusive Avatar Gear",
      para: "Outfit your avatar with the best gear and accessories",
    },
    {
      image: "/Assets/premium-add-3.png",
      heading: "Members Lounge",
      para: "Discover all the illuminati secrets in r/lounge",
    },
    {
      image: "/Assets/premium-add-4.png",
      heading: "Custom App Icons",
      para: "Change your app icon to something more your style",
    },
  ];
  const footerDetails = [
    {
      title1: "About",
      title2: "Careers",
      title3: "Press",
    },
    {
      title1: "Advertise",
      title2: "Blog",
      title3: "Help",
    },
    {
      title1: "Reddit Premium",
    },
    {
      title1: "Facebook",
      title2: "Twitter",
      title3: "Instagram",
    },
  ];

  return (
    <div className="header w-screen">
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
          <div className="buttons flex flex-row gap-2 max-w-full">
            <PremiumButton variant="default">$5.99/Month</PremiumButton>
            <PremiumButton variant="orange">
              $49.99/Year
              <span className="bg-white text-orange-400 rounded-full p-1 m-1 text-xs max-w-full">
                Save 30%
              </span>
            </PremiumButton>
          </div>
          <span className="py-2 text-xs">Subsciptions automatically renew</span>
        </div>
      </div>

      <div className="flex content-center flex-col py-10 flex-wrap">
        <h1 className="m-auto text-3xl font-bold">Join Reddit Premium Today</h1>
        <div className="flex flex-row gap-4 m-auto justify-center w-full py-6 flex-wrap">
          {cardDetails.map((cardDetail, index) => (
            <PremiumCard
              key={index}
              img={cardDetail?.image}
              heading={cardDetail?.heading}
              para={cardDetail?.para}
            />
          ))}
        </div>
        <div className=" flex items-center justify-center flex-col">
          <div className="flex flex-row content-center items-center gap-2">
            <PremiumButton variant="default">$5.99/Month</PremiumButton>
            <PremiumButton variant="orange">
              $49.99/Year
              <span className="bg-white text-orange-400 rounded-full p-1 m-1 text-xs">
                Save 30%
              </span>
            </PremiumButton>
          </div>
          <div className="text-[#9a9ea3] flex flex-col content-center items-center gap-1">
            <p className="py-2 text-xs">Subscriptions automatically renew</p>
            <p className="py-2 text-xs">
              * Custom app icons are only available through a paid Reddit
              Premium subscription.
            </p>
          </div>

          <p className="py-8 text-sm font-medium">
            Visit the Reddit Premium FAQs
          </p>
        </div>
      </div>

      <footer className="bg-[#0c3744] text-white ">
        <div className="flex flex-row gap-16 justify-center py-12">
          {footerDetails.map((detail, index) => (
            <PremiumFooter
              key={index}
              title1={detail?.title1}
              title2={detail?.title2}
              title3={detail?.title3}
            />
          ))}
        </div>
        <div className="pb-8 text-sm flex flex-row items-center justify-center gap-4 text-[#ffffff80]">
          <span className="underline">Content Policy</span>
          <span className="underline">Privacy Policy</span>
          <span className="underline">User Agreement</span>
          <span className="underline">Mod Policy</span>
          <span>Reddit, Inc. @ 2023. All rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Premium;
