import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoLight, cartLogo, porfileLogo } from "../assets/Index";
export const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);
  return (
    <div className="h-20 w-full bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className=" h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img src={logoLight} alt="logoLight" className="w-30 h-16" />
          </div>
        </Link>
        <div className="flex mr-8 gap-8">
          <ul className="flex items-center gap-8 ">
            <Link to={"/"}>
              <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Home
              </li>
            </Link>
            <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-balck font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
          </ul>
          <div className="relative flex gap-8">
            <Link to="/cart">
              <div>
                <img src={cartLogo} alt="logoLight" className="w-12" />
                <span className="absolute w-12 top-2 left-1 text-s flex items-center justify-center font-bold  font-titleFont">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <img
                className="w-12 h-12 rounded-full"
                src={userInfo ? userInfo.image : porfileLogo}
                alt="userlogo"
              />
            </Link>
            {userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2 mt-3">
                {userInfo.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
