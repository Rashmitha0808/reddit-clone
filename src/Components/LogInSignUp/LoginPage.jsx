import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const LoginPage = () => {
  const handleGoogleLoginSuccess = (profile) => {
    console.log("Google login success:", profile);
  };

  const handleGoogleLoginFailure = () => {
    console.error("Google login failure");
  };

  return (
    <div className="flex flex-col justify-center w-9/12 border mx-auto py-5">
      <div className="flex justify-end px-10 ">
        <div className="rounded-full border bg-[#eaedef] p-2 cursor-pointer">
          <RxCross1 className="h-5 w-5 text-[#292828]" />
        </div>
      </div>

      <div className="w-8/12 flex flex-col mx-auto gap-6">
        <div>
          <h1 className="font-bold text-3xl mb-4 text-[#0f1a1c]">Log In</h1>
          <p className="text-[#131313]">By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <div className="cursor-pointer border py-3 px-3 rounded-full flex flex-row text-center">
            <FcGoogle className="h-6 w-6 " />
            <span className="px-20 text-[#131313]">Continue with Google</span>
          </div>

          <div className="cursor-pointer border py-3 px-3 rounded-full flex flex-row text-center">
            <FaApple className="h-6 w-6" />
            <span className="px-20 text-[#131313]">Continue with Apple</span>
          </div>

          <div className="flex items-center mb-3">
            <hr className="flex-grow  border-gray-300" />
            <span className="mx-4 text-[#434343] text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <form className="flex flex-col">
            <input type="email" className="bg-[#eaedef] outline-none h-14 rounded-3xl px-4 mb-5 text-lg" placeholder="Username *" />
            <input type="password" className="bg-[#eaedef] h-14 rounded-3xl px-4" placeholder="Password *" />

            <div className="flex flex-col gap-3 my-7">
              <p>
                Forgot your <span className="text-[#4444d9] cursor-pointer">username</span> or <span className="text-[#4444d9] cursor-pointer">password?</span>
              </p>
              <p>
                New to Reddit?<span className="text-[#4444d9] cursor-pointer"> Sign up</span>
              </p>
            </div>

            <div className="bg-red-500 text-white h-14 rounded-full cursor-pointer flex items-center justify-center">Log In</div>
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
