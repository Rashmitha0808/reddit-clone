import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  // useEffect(() => {
  //   {
  //     alert("Hello this will be coming soon!!");
  //   }

  // }, []);

  console.log("clicked");

  return <div className="w-0 h-0">{alert("Hello this will be coming soon!!")}</div>;
};

export default ComingSoon;