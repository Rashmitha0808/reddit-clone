import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

function Authentication({ onClose }) {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return isLoginPage ? (
    <LoginPage onClose={onClose} setIsLoginPage={setIsLoginPage} />
  ) : (
    <SignUp onClose={onClose} setIsLoginPage={setIsLoginPage} />
  );
}

export default Authentication;
