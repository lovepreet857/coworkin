import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Show from "../../../public/svg/forgot_show.svg";
import Hiddenshow from "../../../public/svg/hidden_show.svg";
import Button from "../ui/Button";

const Settings = () => {
      const [isSearchLoading, setIsSearchLoading] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
    
      const Click = () => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      };
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });


 const handleClick = (e) => {
  e.preventDefault();

  if (!formData.password.trim() || !formData.confirmPassword.trim()) {
    alert("Please fill in both Password fields.");
    return;
  }
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Show loading
  setIsSearchLoading(true);

  // Simulate API call
  setTimeout(() => {
    setIsSearchLoading(false);
    navigate("/profile"); // Redirect to profile page
  }, 2000);
};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <div className="mt-[59px]">
        <h1 className="font-semibold font-Inter text-[22px] leading-[130%] pb-5 md:pb-[22px] ">
          Profile Settings
        </h1>
        <form
          className="flex flex-col gap-[14px] md:gap-[30px]"
          onSubmit={handleClick}
        >
          <div className="grid grid-cols-2 gap-[29px] max-w-full">
            <Input
              name="firstName"
              placeholder="Priya"
              label="First Name"
              value={formData.firstName}
              className="pt-[22px] pb-[21px] border-pramery-purpal pl-5"
              onChange={handleChange}
            />
            <Input
              name="lastName"
              placeholder="Sharma"
              label="Last Name"
              className="sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            name="email"
            placeholder="Priya.45863sharma56@gmail.com"
            label="Email Address"
            type="email"
            value={formData.email}
            className="sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-[33px]"
            onChange={handleChange}
          />
          <Input
            name="tel"
            placeholder="+91 98765-43210"
            label="Phone Number"
            type="tel"
            value={formData.tel}
            className="sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5"
            onChange={handleChange}
          />

          {/* Password field */}
          <div className="relative">
            <Input
              name="password"
              placeholder="Password"
              label="Password"
              type={show ? "text" : "password"}
              value={formData.password}
              className="sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5"
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password field */}
          <div className="relative">
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              label="Confirm Password"
              type={show ? "text" : "password"}
              value={formData.confirmPassword}
              className="sm:pt-[22px] pt-[13px] pb-[15px] sm:pb-[21px] border-pramery-purpal pl-3 sm:pl-5"
              onChange={handleChange}
            />
            <div onClick={() => setShow(!show)}>
              <img
                className={`absolute bottom-[20px] right-[20px] ${
                  show ? "hidden" : "block"
                }`}
                src={Hiddenshow}
                alt="Show"
              />
              <img
                className={`absolute bottom-[20px] right-[20px] ${
                  show ? "block" : "hidden"
                }`}
                src={Show}
                alt="Hiddenshow"
              />
            </div>
          </div>
<div className="m-auto max-w-full">

       <Button
  loading={isSearchLoading}
  type="submit"
  className="leading-[100%] py-3 px-5 text-lg cursor-pointer font-Inter font-medium"
>
  Save Changes
</Button>

</div>
        </form>
      </div>
    </>
  );
};

export default Settings;
