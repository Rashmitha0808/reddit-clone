import React from "react";
import { Link } from "react-router-dom";
import Words from "./Words";
import { useSelector } from "react-redux";

const Footer = () => {
  const { authenticated } = useSelector((state) => state.user);

  return (
    <div className="text-slate-600 bg-white max-w-xs p-3">
      {authenticated && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <Words text={"User Agreement"} />
            <Words text={"Privacy Policy"} />
            <Words text={"Content Policy"} />
            <Words text={"Moderator Code Of Conduct"} />
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-2 gap-4 mb-2">
            <Words text={"English"} />
            <Words text={"Français"} />
            <Words text={"Italiano"} />
            <Words text={"Deutsch"} />
            <Words text={"Español"} />
            <Words text={"Português"} />
          </div>
        </>
      )}

      <Link to="/" className="no-underline text-tone-2 text-xs px-md">
        Reddit, Inc. © 2023. All rights reserved.
      </Link>
    </div>
  );
};

export default Footer;
