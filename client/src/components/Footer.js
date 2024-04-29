import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

import { logoDark, paymentLogo } from "../assets/Index";
export const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/*============= LOGOICON END START====================== */}
        <div className="flex flex-col items-left">
          <img src={logoDark} alt="logoLight" className="w-36 h-18 mb-4" />
          <p className="text-white text-sm  tracking-wide ">© Sudarshan.com</p>
          <img src={paymentLogo} alt="logoLight" className="w-4/5 h-14 " />
          <div className="flex  gap-4 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/*============= LOGOICON END HERE====================== */}

        {/*============= LOCATEUS END START====================== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>ABC Street,Salem,TamilNadu</p>
            <p>Mobile:+0123 456 789</p>
            <p>Email: exitron@gamil.com</p>
          </div>
        </div>

        {/*============= LOCATEUS END HERE====================== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              CheckOut
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Help & SUpport
            </p>
          </div>
        </div>
        {/*============= PROFILE END START====================== */}
        {/*============= PROFILE END HERE====================== */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-3 py-4 text-sm "
            placeholder="E-Mail"
            type="text"
          />
          <button className=" py-4 text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
        {/*============= SUBCRIBE END START====================== */}
        {/*============= SUBCRIBE END HERE====================== */}
      </div>
    </div>
  );
};
