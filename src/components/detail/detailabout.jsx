import React from "react";
import Oficedata from "../../json/officedata.json";
import Offerdata from "../../json/placoffer.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const DetailAbout = () => {
  return (
    <div className="container flex flex-col md:flex-row">
      <div className="">
        {/* About Section */}
        <div className="py-5 md:py-10 max-w-[758px] border-y border-dark4-grya w-full">
          <h1 className="text-base md:text-[22px] font-Inter leading-[150%] font-medium">
            About this project
          </h1>
          <p className="max-w-[590px] pb-5 md:pb-[30px] pt-3 md:pt-2 font-normal font-Inter text-[10px] md:text-sm leading-[150%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>
          <button className="py-3 px-5 rounded-[12px] bg-Flash-White leading-[100%] text-base font-Inter font-medium cursor-pointer">
            Book now
          </button>
        </div>

        {/* Slider Section */}
        <h1 className="font-Inter font-medium  text-base sm:text-[22px] leading-[150%] pb-[30px] mt-5 sm:mt-10">
          Where you’ll Work
        </h1>
        <div className=" border-b md:border-b-0 max-w-[758px] w-full pb-[25px] md:pb-10 border-dark4-grya">
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 1.5,
              },
            }}
          >
            {Oficedata.map((item, index) => (
              <SwiperSlide className="md:max-w-[364px] w-full" key={index}>
                <img
                  src={item.officeimg}
                  alt="Office"
                  className=" rounded-[12px]"
                />
                <h5 className=" text-sm sm:text-base leading-[100%] font-Inter font-medium pb-1 pt-[18px]">
                  {item.text1}
                </h5>
                <p className="text-dark-grya  text-xs sm:text-sm leading-[150%] font-normal font-Inter">
                  {item.pragrapaph}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h1 className="leading-[150%] sm:text-[22px] text-base font-Inter font-medium mt-5 md:mt-0">
          What this place offer
        </h1>
        <div className="grid sm:grid-cols-2 gap-y-5 pb-10 border-b border-dark4-grya pt-[30px]">
          {Offerdata.map((item, index) => (
            <div className="flex gap-[12px] items-end" key={index}>
              <img
                src={item.placesvg}
                alt={item.text1}
                className="w-5 h-5 mt-1"
              />
              <p className="text-sm font-Inter">{item.text1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailAbout;
