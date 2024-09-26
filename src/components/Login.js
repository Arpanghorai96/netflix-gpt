import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const[isSignIn,setIsSignIn]=useState(true);
    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg"
          alt=""
        />
      </div>
        <form className="w-4/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
        <h1 className="font-bold text-3xl text-center mb-4">{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn &&(<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />)}
          <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
          <input type="password" placeholder="Password"  className="p-2 my-4 w-full bg-gray-700"/>
          <button className=" bg-red-700 w-full py-2 my-6">{isSignIn?"Sign In":"Sign Up"}</button>
          <p onClick={toggleSignIn} className="cursor-pointer">{isSignIn?"New To Netfilx? Sign Up":"Alredy Register? Sign In"}</p>
        </form>
    </div>
  );
};

export default Login;
