import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Newdata from "../../json/newcard.json";
import "swiper/css";
import "swiper/css/pagination";
const profileinfo = () => {
  return (
   <>
   
          <div className="flex justify-between items-center md:pt-[47px] px-5 pt-5 pb-[50px] md:pb-[42px]">
            <span>
              <h1 className="font-Inter font-bold text-[26px] sm:text-5xl leading-[100%]">
                Welcome back, Priya.S!
              </h1>
              <p className="text-dark-grya font-Inter font-medium text-xs sm:text-[20px] leading-[100%] pt-[30px]">
                Here’s a snapshot of your workspace activity.
              </p>
            </span>
            <img
              className="max-w-[110px] w-full md:max-w-[186px]"
              src="public/svg/myprofileimg.svg"
              alt=""
            />
          </div>
          <div className="">
            <Swiper
              spaceBetween={32}
              breakpoints={{
                375: {
                  slidesPerView: 1.5,
                },
                500: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 2.4    ,
                },
              
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {Newdata.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-Flash-White rounded-[12px] sm:py-5 px-5 pt-5 pb-7 sm:px-[30px] h-[268px] w-[268px]"
                >
                  <h1 className="md:pb-5  pb-3 text-lg md:text-[22px] font-Inter font-semibold leading-[130%]">
                    {item.tetel}
                  </h1>
                  <p className="md:text-lg text-base leading-[130%] font-medium font-Inter pb-[6px]">
                    {item.text}
                  </p>
                  <p className="text-sm leading-[130%] font-medium font-Inter">
                    {item.text1}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
 
        
   </>
  )
}

export default profileinfo
