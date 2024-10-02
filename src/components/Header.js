import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handelSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between align-middle">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="p-4 flex align-middle">
          <img
            src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
            alt=""
            className="w-10 h-10"
          />
          <p
            className="text-white font-bold cursor-pointer"
            onClick={handelSignout}
          >
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
