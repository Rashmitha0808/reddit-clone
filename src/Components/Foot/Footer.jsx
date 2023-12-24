import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-600">
      <Link to="/" className="no-underline text-tone-2 text-xs px-md">
        Reddit, Inc. © 2023. All rights reserved.
      </Link>
    </div>
  );
};

export default Footer;
