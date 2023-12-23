import React, { useState } from "react";
import Card from "./Card";
import "../Main/Main.css";
import Search from "../../Pages/Search";
const Main = () => {
  const [showSearch, setshowSearch] = useState(false);
  const handleSearch = (hasResult) => {
    setshowSearch(hasResult);
  };

  return <div className="main-container overflow-y-auto h-full">{showSearch ? <Search onSearchResult={handleSearch} /> : <Card />}</div>;
};

export default Main;
