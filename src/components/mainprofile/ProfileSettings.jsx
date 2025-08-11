import React, { useState } from 'react'
import Input from '../ui/Input'
import Show from "../../../public/svg/forgot_show.svg"
import Hiddenshow from "../../../public/svg/hidden_show.svg"
const ProfileSettings = () => {
    const [show, setShow] = useState(false);
     const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        tel: "",
        email: "",
        password: "",
        agree: false,
      });
       const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
   <>
   <div className='mt-[59px]'>
     <h1 className="font-semibold font-Inter text-[22px] leading-[130%] pb-5 md:pb-[22px] ">
        Profile Settings
        </h1>
        <form className='flex flex-col gap-[14px] md:gap-[30px]'>
            <div className="grid grid-cols-2 gap-[29px] max-w-full">
            <Input
              name="Full Name"
              placeholder="Priya"
              label="Full Name"
              value={formData.firstName}
              className='pt-[22px] pb-[21px] border-pramery-purpal pl-5' 
              onChange={handleChange}
            />
            <Input
              name="lastName"
              placeholder="Sharma"
              label="Last Name"
              className='sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            name="email"
            placeholder="Priiya.45863sharma56@gmail.com"
            label="Email"
            type="email"
            value={formData.email}
            className='sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-[33px]'
            onChange={handleChange}
          />
            <Input
            name="tel"
            placeholder="+91 98765-43210"
            label="Phone Number"
            type="tel"
            value={formData.tel}
            className='sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5'
            onChange={handleChange}
          />
          <div className='relative'>

            <Input
              name="password"
              placeholder="Password"
              label="Password"
             type={show ? "text" : "password"}
              value={formData.password}
              className='sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5'
              onChange={handleChange}
    
            />
            <div onClick={() => setShow(!show)} >
                <img className={`absolute bottom-[20px] right-[20px] ${show ? "hidden":"block"}`} src={Hiddenshow} alt="Show" />
                <img className={`absolute bottom-[20px] right-[20px] ${show ? "block":"hidden"}`} src={Show} alt="Hiddenshow" />

            </div>
            </div>

          <Input
              name="Full Name"
              placeholder="Intech"
              label="Company"
              value={formData.firstName}
              className='sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5' 
              onChange={handleChange}
            />
            <div className="flex items-center gap-3">
                <Input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label
                  className="text-xs md:text-base font-normal font-Inter leading-[130%]"
                  htmlFor="agree"
                >
                 enable email notifications.
                </label>
              </div>
        </form>
   </div>
   </>
  )
}

export default ProfileSettings
