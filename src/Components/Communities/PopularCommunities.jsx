import React, { useEffect, useState } from "react";
import useAPI from "../../Hooks/useAPI";
import "../Communities/PopularCommunities.css";

const PopularCommunities = () => {
  const { get, data } = useAPI();
  const initialShow = 5;

  const [communityToShow, setCommunityToShow] = useState(initialShow);
  const [iconToShow, setIconToShow] = useState("See More");

  const handleShowMore = () => {
    setCommunityToShow(data.length);
    setIconToShow("See Less");
  };
  const handleShowLess = () => {
    setCommunityToShow(initialShow);
    setIconToShow("See More");
  };
  useEffect(() => {
    get("/reddit/channel");
  }, [get]);
  return (
    <div className="flex h-screen">
      <div className="popular-main w-[350px] h-[420px] overflow-y-auto mr-10 mt-10 px-3 bg-[#f8f8f8] rounded-lg">
        <h1 className="py-4 text-sm font-semibold text-slate-500">POPULAR COMMUNITIES</h1>
        {data.slice(0, communityToShow).map((community) => (
          <div key={community._id} className="flex flex-row items-center px-5 hover:bg-[#f0eef0] cursor-pointer">
            <img className="w-8 h-8 rounded-full " src={community?.owner?.profileImage} />
            <div className="flex flex-col ml-4 my-3">
              <span className="text-sm">r/{community?.name}</span>
              <span className="text-xs">5,680,983 members</span>
            </div>
          </div>
        ))}
        {/* {communityToShow < data.length ? <span onClick={handleShowMore}>"See More"</span> : <span onClick={handleShowLess}>"See Less"</span>} */}
        <div className="mt-2 cursor-pointer" onClick={communityToShow === initialShow ? handleShowMore : handleShowLess}>
          {communityToShow === initialShow ? (
            <button className=" hover:bg-[#dbdfe2] font-medium text-sm px-3 py-2 rounded-full">See more</button>
          ) : (
            <button className=" hover:bg-[#dbdfe2] font-medium text-sm px-3 py-2 rounded-full">See less</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCommunities;
