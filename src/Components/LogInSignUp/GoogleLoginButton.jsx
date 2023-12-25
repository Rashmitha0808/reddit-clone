import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const responseGoogle = (response) => {
    if (response.profileObj) {
      onSuccess(response.profileObj);
    } else {
      onFailure();
    }
  };

  return (
    <GoogleLogin
      clientId="113413976761-82vj3sorkp2a1f71u3t5bhn1qk931f9u.apps.googleusercontent.com"
      buttonText="Continue with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
