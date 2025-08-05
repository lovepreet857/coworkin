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
        <div className='md:pb-[50px] '>
          <h1 className='underline leading-[130%] text-xs md:font-medium font-medium font-Inter mt-5 text-center sm:text-start md:mt-[50px]'>Learn how work review works</h1>
        </div>
       <div className='flex flex-col gap-5 md:gap-y-[30px] max-w-[1320px] border-y border-dark4-grya py-5 md:py-[50px]'>
  <div>
    <h4 className='font-Inter font-medium  text-base md:text-[22px] leading-[100%] pb-[10px] md:p-2'>Where you’ll be</h4>
    <p className='font-Inter font-normal text-xs md:text-[20px] leading-[150%] text-dark-grya'>
      Lorem Ipsum is simply dummy text of the printing.
    </p>
  </div> 
  <div>
    <iframe
      className='h-[500px] w-full rounded-[7px]'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.839184214203!2d75.78850607542802!3d26.89334027664639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e0d6792a3d%3A0x6a6ab7894204d6c7!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1692097407860!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </div>
    </>
  )
}

export default Guest;
