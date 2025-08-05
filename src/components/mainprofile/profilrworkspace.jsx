import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Profiledata from "../../json/profileWorkspace.json"
import "swiper/css";
import "swiper/css/pagination";
import Button from '../ui/Button';
const profilrworkspace = () => {
  return (
    <>
     <div className='mt-10 md:mt-[51px]'>
         <h1 className="font-semibold font-Inter text-[22px] leading-[130%] pb-5 md:pb-[22px] ">
         Saved Workspace
        </h1>
                 <div className=" w-full">
            <Swiper
              spaceBetween={32}
              breakpoints={{
                375: {
                  slidesPerView: 1,
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
              {Profiledata.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-Flash-White rounded-[12px] max-w-[244px] md:max-w-full pb-5  md:p-[14px]"
                >
                 <img className='rounded-[12px]' src={item.imgmai} alt="" />
                 <h1 className='md:pt-5 pt-3 font-medium font-Inter text-lg leading-[130%]'>
                    {item.tetel}
                 </h1>
                 <p className='font-normal font-Inter text-dark-grya pt-[6px] leading-[130%]'>{item.price}</p>
                 <Button
                 size='custom3' className='max-w-[171px] w-full rounded-[12px] m-auto mt-6 md:mt-[30px] leading-[100%] text-base'>Book Now</Button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
     </div>
    </>
  )
}

export default profilrworkspace
