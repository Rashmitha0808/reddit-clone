import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h1>Log In</h1>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quam!</p>
        <form>
          <input type="email" />
          <input type="password" />
          <div>
            <span>Forgot password?</span>
            <span>New to Reddit?</span>
            <span>Sign up</span>
          </div>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
