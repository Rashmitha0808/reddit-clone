import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../store/UserSlice";

const SignUp = ({ onClose, setIsLoginPage }) => {
  const { authenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "reddit",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      setError("All fields must be filled");
    } else if (!isValidEmail) {
      setError("Enter valid email");
    } else {
      setError("");
      dispatch(signUpUser(formData));
      onClose();
    }
  };

  if (authenticated) {
    navigate("/");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white shadow max-w-xl flex flex-col justify-center border mx-auto py-5 rounded-3xl">
      <div className="flex justify-end px-10 ">
        <div className="rounded-full border bg-[#eaedef] p-2 cursor-pointer">
          <RxCross1 onClick={onClose} className="h-5 w-5 text-[#292828]" />
        </div>
      </div>

      <div className="w-8/12 flex flex-col mx-auto gap-6">
        <div>
          <h1 className="font-bold text-3xl mb-4 text-[#0f1a1c]">Sign Up</h1>
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
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="email"
              className="bg-[#eaedef] outline-none h-14 rounded-3xl px-4 mb-4 text-lg"
              placeholder="Email *"
            />
            <input
              value={formData.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="bg-[#eaedef] h-14 rounded-3xl px-4 mb-4"
              placeholder="Username *"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              className="bg-[#eaedef] h-14 rounded-3xl px-4"
              placeholder="Password *"
              onChange={handleChange}
            />
            <div>
              {error && (
                <p className="h-3 text-sm text-red-600">
                  {error.toLowerCase()}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 my-5">
              <div>
                Already a redditor?
                <span
                  className="text-[#4444d9] cursor-pointer mx-2"
                  onClick={() => setIsLoginPage(true)}
                >
                  Log In
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white h-14 rounded-full cursor-pointer flex items-center justify-center"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
