import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logInUser } from "../../store/UserSlice";

const LoginPage = ({ onClose, setIsLoginPage }) => {
  const { authenticated, error: authError } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    appType: "reddit",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields must be filled");
    } else if (!isValidEmail(email)) {
      setError("Enter valid email");
    } else {
      setError("");
      dispatch(logInUser(formData));
    }
  };

  if (authenticated) {
    navigate("/");
  }

  return (
    <div className="bg-white shadow max-w-xl flex flex-col justify-center border mx-auto py-5 rounded-3xl">
      <div className="flex justify-end px-4">
        <div
          onClick={onClose}
          className="rounded-full border bg-[#eaedef] p-2 cursor-pointer"
        >
          <RxCross1 className="h-5 w-5 text-[#292828]" />
        </div>
      </div>

      <div className="w-8/12 flex flex-col mx-auto gap-6">
        <div>
          <h1 className="font-bold text-3xl mb-4 text-[#0f1a1c]">Log In</h1>
          <p className="text-[#131313]">
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </p>
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

          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              className="bg-[#eaedef] outline-none h-14 rounded-3xl px-4 mb-5 text-lg"
              value={formData.email}
              name="email"
              type="email"
              placeholder="Email *"
              onChange={handleChange}
            />
            <input
              className="bg-[#eaedef] h-14 rounded-3xl px-4"
              value={formData.password}
              type="password"
              name="password"
              placeholder="Password *"
              onChange={handleChange}
            />
            <div>
              <h1> error populated here</h1>
              {error ? (
                <p className="error h-4">{error}</p>
              ) : (
                authError && <p className="error">{authError}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 my-7">
              <p>
                Forgot your{" "}
                <span className="text-[#4444d9] cursor-pointer">username</span>{" "}
                or{" "}
                <span className="text-[#4444d9] cursor-pointer">password?</span>
              </p>
              <p>
                New to Reddit?
                <span
                  className="text-[#4444d9] cursor-pointer"
                  onClick={() => setIsLoginPage(false)}
                >
                  {" "}
                  Sign up
                </span>
              </p>
            </div>

            <div className="bg-red-500 text-white h-14 rounded-full cursor-pointer flex items-center justify-center">
              Log In
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

//  <GoogleLoginButton onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} /> */

// const handleGoogleLoginSuccess = (profile) => {
//   console.log("Google login success:", profile);
// };

// const handleGoogleLoginFailure = () => {
//   console.error("Google login failure");
// };
