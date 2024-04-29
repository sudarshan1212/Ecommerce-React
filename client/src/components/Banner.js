import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/Rayaan/2024/5299-HI---Unrec-hero-Under-499-hero_3000X1200_Rec_1._CB558942269_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/apr24atf/unrec/au/MA_2x._CB560498232_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Mar18/QC/PC_GW_Hero_3000x1200_01._CB579486410_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/April/GFD/GW/Hero/Fitacc/5298-Sports---GFD-April-heros-Yogamat-1-FDFO_3000-Pc._CB558905834_.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  // console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[490px] overflow-hidden relative ">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw]    flex transition-transform duration-1000"
        >
          <img
            className="w-screen object-cover "
            src={data[0]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen  "
            src={data[1]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full "
            src={data[2]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full "
            src={data[3]}
            alt="imgOne"
            loading="priority"
          />
        </div>
        <div className="absolute bottom-44 w-fit left-0 right-0 mx-auto lg:bottom-12 flex   gap-8 ">
          <div
            onClick={prevSlide}
            className="w-14 h-12  border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12  border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
