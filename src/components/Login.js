import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkEmailValidation } from "./Emailvalidation";
import { isPasswordvalidate } from "./Passwordvalidation";
import { isNamevalidate } from "./Namevalidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [emailerrorMessage, setEmailerrorMessage] = useState();
  const [passworderrorMessage, setPassworderrorMessage] = useState();
  const [nameerrorMessage, setnameerrorMessage] = useState();
  const [signinError, setSigninError] = useState();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const checkValidation = () => {
    const message = checkEmailValidation(email.current.value);
    setEmailerrorMessage(message);
    const passwordmsg = isPasswordvalidate(password.current.value);
    setPassworderrorMessage(passwordmsg);
    if (!isSignIn) {
      const namemsg = isNamevalidate(name.current.value);
      setnameerrorMessage(namemsg);
    }
    if (message && passwordmsg) return;

    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSigninError(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSigninError(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80"
      >
        <h1 className="font-bold text-3xl text-center mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-700"
            />

            <p className="text-red-500">{nameerrorMessage}</p>
          </>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500">{emailerrorMessage}</p>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500">{passworderrorMessage}</p>
        <button
          className=" bg-red-700 w-full py-2 my-6"
          onClick={checkValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500">{signinError}</p>
        <p onClick={toggleSignIn} className="cursor-pointer">
          {isSignIn ? "New To Netfilx? Sign Up" : "Alredy Register? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
