import React from "react";
import Workssvg1 from "../../../public/svg/workssvg1.svg";
import Workssvg2 from "../../../public/svg/workssvg2.svg";
import Userdata from "../../json/userdata.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Users = ({ Workhaeding, Workparagraph }) => {
  return (
    <>
      <div className="container pt-[30px] md:pt-[60px] pb-[30px] md:pb-[51px]">
        <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
          <img className="hidden md:block" src={Workssvg1} alt="Workssvg1" />
          <h1 className="font-Inter font-semibold text-[22px] md:text-10 leading-[130%] text-black-black">
            {Workhaeding}
          </h1>
          <img className="hidden md:block" src={Workssvg2} alt="Workssvg2" />
        </div>

        <p className="max-w-[487px] m-auto text-sm md:text-[20px] text-dark-grya leading-[130%] font-normal font-Inter text-center  mb-[30px] md:mb-[60px]">
          {Workparagraph}
        </p>
         <Swiper
        spaceBetween={32}
        pagination={{ clickable: true }}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
       500:{
            slidesPerView: 1.2,
        
       },
          640: {
            slidesPerView: 1.5,
          },
            750: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
      >
      {
Userdata.map((iteam,index)=>(
    <SwiperSlide key={index}>
      
        <div className=" flex flex-col h-[248px] gap-6 p-[30px] bg-Flash-White max-w-[419px] w-full rounded-3xl">
          <div className="flex gap-3">
            <img src={iteam.profilesvg} alt="profilesvg" />

            <div>
              <h5 className="font-Inter font-medium text-base leading-[130%] pb-[2px]">
                {iteam.name}
              </h5>
              <p className="text-dark-grya font-Inter font-normal text-xs leading-[130%]">
                {iteam.text}
              </p>
            </div>
          </div>
          <p className=" text-sm md:text-lg leading-[130%] font-normal font-Inter h-[69px] line-clamp-3">
           {iteam.pragraph}
          </p>
          <div className="flex  justify-between">
            <div className="flex gap-3">
              <img src={iteam.star} alt="star" />
              <p className="font-Inter font-medium text-base leading-[130%]">{iteam.reating}</p>
            </div>
            <p className="font-Inter text-base font-normal leading-[130%]">{iteam.date}</p>
          </div>
        </div>
    </SwiperSlide>
))
      }
      </Swiper>
      </div>
    </>
  );
};

export default Users;
