import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const LoginPage = () => {
  const handleGoogleLoginSuccess = (profile) => {
    console.log("Google login success:", profile);
  };

  const handleGoogleLoginFailure = () => {
    console.error("Google login failure");
  };

  return (
    <div>
      <div className="flex flex-col content-center w-10/12 border">
        <h1 className="font-bold text-3xl">Log In</h1>
        <p>By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</p>

        <div className="flex w-full flex-col ">
          <div className=" border py-3 rounded-full ">
            <div className="flex flex-row ml-3 content-around">
              <FcGoogle className="h-6 w-6 " />
              Continue with Google
            </div>
          </div>

          <div className="flex w-full flex-col ">
            <div className=" border py-3 rounded-full ">
              <div className="flex flex-row ml-3">
                <FaApple className="h-6 w-6" />
                Continue with Apple
              </div>
            </div>
          </div>

          <form>
            <input type="email" placeholder="Enter your name" />
            <input type="password" placeholder="Enter your password" />

            <div>
              <span>Forgot password?</span>
              <span>New to Reddit?</span>
              <span>Sign up</span>
            </div>

            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

{
  /* <GoogleLoginButton onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} /> */
}
