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
// div fixed will work still need to check with the footer or the hght need to adjust
