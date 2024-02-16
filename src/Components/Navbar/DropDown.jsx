import React from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/UserSlice";

function DropDown() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser());
  };
  return (
    <div>
      <button onClick={handleLogout}> logout</button>
    </div>
  );
}

export default DropDown;
