import React from "react";
import { gitLogo } from "../assets/Index";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        toast.success("LogOut Successfully");
        dispatch(removeUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10 ">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 py-8 rounded-md flex justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 items-center "
        >
          <img
            src="https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png"
            alt="googleLogo"
          />
          <span className="text-sm text-gray-900">Sign in with google </span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10 ">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 py-8 rounded-md flex justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 items-center ">
          <img className="rounded-3xl" src={gitLogo} alt="git" />
          <span className="text-sm text-gray-900">Sign in with GitHub </span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoclose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
