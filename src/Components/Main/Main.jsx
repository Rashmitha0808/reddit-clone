import React, { useEffect, useState } from "react";
import Card from "./Card";
import useAPI from "../../Hooks/useAPI";
const Main = () => {
  const { get, data } = useAPI();

  useEffect(() => {
    get("/reddit/post?limit=20&page=2");
  }, []);
  // console.log(data);
  return (
    <div className="min-w-0 my-3 mx-3">
      {data?.map((post) => (
        <Card key={post?._id} {...post} />
      ))}
    </div>
  );
};

export default Main;
