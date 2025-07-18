import React from 'react';
import Workdata from "../../json/work2.json"
import WorkCard from '../Cards/WorkCard';
import Workssvg1 from "../../../public/svg/workssvg1.svg";
import Workssvg2 from "../../../public/svg/workssvg2.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Choose = ({Workhaeding,Workparagraph}) => {
  return (
   <>
    <div className='container pb-[30px] md:pb-[59px] '>
         <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
                <img className='hidden md:block' src={Workssvg1} alt="Workssvg1" />
                <h1 className="font-Inter font-semibold text-[22px] md:text-10 leading-[130%] text-black-black">
                 { Workhaeding}
                </h1>
                <img  className='hidden md:block' src={Workssvg2} alt="Workssvg2" />
              </div>
        
              <p className="max-w-[487px] m-auto w-full text-sm md:text-[20px] text-dark-grya leading-[130%] font-normal font-Inter text-center  mb-[30px] md:mb-[60px]">
              {Workparagraph}
              </p>
              <div className='hidden xl:flex flex-wrap justify-center gap-[32px] '>
                {Workdata.map((item, index) => (
       
            <WorkCard  key={index}
            logo={item.logo}
            tetel={item.tetel}
            text={item.text}
            />
            
        ))}
              </div>
              <div className='xl:hidden block'>

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
     {Workdata.map((item, index) => (
        <SwiperSlide key={index}>
            <WorkCard  
            logo={item.logo}
            tetel={item.tetel}
            text={item.text}
            />
            </SwiperSlide>
        ))}
        </Swiper>
              </div>
    </div>
   </>
  );
}

export default Choose;
