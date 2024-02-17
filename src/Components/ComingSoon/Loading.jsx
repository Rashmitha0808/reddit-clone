import React from "react";
import { BsReddit } from "react-icons/bs";

const Loading = () => {
  return (
    <div className="animate-pulse h-full w-full flex justify-center items-center content-center">
      <BsReddit className="text-red-600 bg-white w-28 h-28 rounded-full" />
    </div>
  );
};

export default Loading;
