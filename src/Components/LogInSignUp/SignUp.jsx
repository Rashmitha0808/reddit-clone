import React from "react";

const SignUp = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="email" />
        <input type="password" />
        <div>
          <span>Already a redditor?</span>
          <span>Log In</span>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
