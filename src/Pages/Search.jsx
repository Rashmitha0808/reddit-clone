import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Main/Card";
import useAPI from "../Hooks/useAPI";

const Search = () => {
  const params = useParams();
  const { data, isLoading, get } = useAPI();

  useEffect(() => {
    get(`/reddit/post?search={"content":"${params.query}"}&limit=20`);
  }, [params]);
  return (
    <div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <div>{data.length === 0 ? `Hm... we couldn’t find any results for " ${params.query} " ` : `Results for ' ${params.query} '`}</div>
          {data?.map((results) => (
            <Card {...results} key={results._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
