import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Foot/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
