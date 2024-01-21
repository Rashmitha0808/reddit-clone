import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  // const token = localStorage.getItem("reddit_token");

  // return token ? children : <Navigate to="/login" />;
  return children;
}

export default PrivateRouter;
