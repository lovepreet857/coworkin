import React from 'react'
import Profile from "../../json/profile.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Guest = () => {
  const button = ["Great hospitality 2", "Spacious 1", "Kitchen 1", "Air conditioner 1"];

  return (
    <>
      <div className='container '>
        <div className='hidden md:flex gap-[10px] py-[50px]'>
          {button.map((item, index) => (
            <button
              key={index}
              className='px-5 py-[10px] bg-Flash-White rounded-[41px] text-sm leading-[100%] font-normal cursor-pointer'
            >
              {item}
            </button>
          ))}
        </div>
<div className=' hidden lg:grid grid-cols-2 gap-[50px]'>

        {
            Profile.map((item,index)=>(
                <div key={index}className='max-w-[586px] w-full'>
                    <div className='flex items-center gap-[10px] pb-5'>
                        <img src={item.pofilesvg} alt="" />
                        <span>
                            <h1 className='pb-1 leading-[150%] text-base font-medium font-Inter'>{item.name}</h1>
                            <p className='font-normal font-Inter leading-[130%] text-sm text-dark-grya'>{item.dateborth}</p>
                        </span>
                    </div>
                    <div>
                        <span className='flex gap-[10px] pb-[22px]'>
                            <img src={item.stars} alt="" />
                            <p className='text-dark-grya text-sm leading-[130%] font-normal font-Inter'>{item.date}</p>
                        </span>
                        <p className='pb-5 font-Inter font-normal leading-[130%] text-base line-clamp-6'>{item.pragraph}</p>
                        <button className='underline font-Inter font-normal text-base leading-[130%]'>{item.show}</button> 
                    </div>
                </div>
            ))
        }
</div>
<div className='lg:hidden'>
  
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
            Profile.map((item,index)=>(
                <SwiperSlide key={index}className='max-w-[586px] w-full'>
                   
                    <div>
                        <span className='flex gap-[10px] pb-5'>
                            <img src={item.stars} alt="" />
                            <p className='text-dark-grya text-sm leading-[130%] font-normal font-Inter'>{item.date}</p>
                        </span>
                        <p className='pb-5 font-Inter font-normal leading-[130%] text-base line-clamp-6'>{item.pragraph}</p>
                        <button className='underline font-Inter font-normal text-base leading-[130%] pt-5'>{item.show}</button> 
                    </div>
                     <div className='flex items-center gap-[10px] pt-[28px]'>
                        <img src={item.pofilesvg} alt="" />
                        <span>
                            <h1 className='pb-1 leading-[150%] text-base font-medium font-Inter'>{item.name}</h1>
                            <p className='font-normal font-Inter leading-[130%] text-sm text-dark-grya'>{item.dateborth}</p>
                        </span>
                    </div>
                </SwiperSlide>
            ))
        }
   </Swiper>
</div>
        <div>
          <h1 className='underline leading-[130%] text-xs md:font-medium font-medium font-Inter mt-5 text-center sm:text-start md:mt-[50px]'>Learn how work review works</h1>
        </div>
      </div>
    </>
  )
}

export default Guest;
