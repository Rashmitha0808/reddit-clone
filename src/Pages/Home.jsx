import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import PopularCommunities from "../Components/Communities/PopularCommunities";
import Card from "../Components/Main/Card";
import Main from "../Components/Main/Main";
import LoginPage from "../Components/LogInSignUp/LoginPage";
import SignUp from "../Components/LogInSignUp/SignUp";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const { authenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserLoggedIn());
    console.log("user loggedIn done");
  }, [dispatch]);

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };
  const toggleSignInPage = () => {
    setIsSignInPage(!isSignInPage);
  };
  function handleChange(event) {
    const element = event.target;
    const { name, value } = element;

    setUserInfo((oldInfo) => {
      return {
        ...oldInfo,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {isLoginPage ? (
        isSignInPage ? (
          <LoginPage
            togglePage={toggleSignInPage}
            userEmail={userInfo.email}
            onChange={handleChange}
          />
        ) : (
          <SignUp />
        )
      ) : (
        <Main />
      )}
    </div>
  );
};

export default Home;
