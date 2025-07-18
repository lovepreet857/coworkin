import React, { useState } from 'react';
import Mainimg from "../../public/img/loginig.png";
import Loginsvg from "../../public/svg/login_arrow-left.svg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Google from "../../public/svg/creat_google.svg";
import Apple from "../../public/svg/login_apple.svg";
import Facebook from "../../public/svg/login_facebook.svg";
import Twitter from "../../public/svg/login_twitter.svg";
import { Link } from 'react-router-dom';

const Forgorpass = () => {
     const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);
      };
      const [isLoading, setIsLoading] = useState(false);
    
      const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      };
  return (
    <div className='container flex flex-col-reverse md:grid grid-cols-2 md:gap-[32px]' >
         <div>
         <Link to={"/"}> <img
            className=" hidden md:block w-[24px]"
            src={Loginsvg}
            alt="Loginsvg"
          /></Link>
          <h1 className=" py-5 md:py-10 text-[20px] md:text-[40px] text-black-black leading-[130%] font-semibold font-Inter">
            Log in
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="email"
              placeholder="Enter your E-mail"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              placeholder="Create Password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Input
                  name="agree"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label
                  className="text-xs md:text-base font-normal font-Inter leading-[130%]"
                  htmlFor="agree"
                >
                  Remember me
                </label>
              </div>
              <p className="text-natural-blue font-Inter font-normal text-[10px] md:text-base leading-[100%]">
                Forgot Password?
              </p>
            </div>

            <Button
              onClick={handleClick}
              loading={isLoading}
              size="cutom1"
              className="text-center mb-5 max-w-full w-full leading-[130%] font-Inter font-normal"
            >
              Log in
            </Button>

            <p className="font-Inter mb-[30px]  text-center font-normal text-sm  md:text-base leading-[100%] ">
              Don,t have an Account?{" "}
             <Link to={"/Create_Account"}> <span className="text-natural-blue"> Create account</span></Link>
            </p>
            <div className="justify-center items-center gap-5 flex  mb-[30px]">
              <span className=" max-w-[90px] sm:max-w-[120px] w-full border-dark2-grya  h-0 border md:hidden "></span>
              <p className="text-[14px] md:text-base font-Inter font-normal leading-[100%]">
                Or Continue with
              </p>
              <span className=" max-w-[90px] sm:max-w-[120px]  w-full border-dark2-grya h-0 border md:hidden "></span>
            </div>
            <div className="justify-between m-auto flex max-w-[427px]">
              <img className="h-[30px]" src={Google} alt="Google" />
              <img src={Facebook} alt="Facebook" />
              <img src={Apple} alt="Apple" />
              <img src={Twitter} alt="Twitter" />
            </div>
          </form>
        </div>
       <div className="relative">
         <Link to={"/"}> <img
            className=" absolute md:hidden w-[24px]"
            src={Loginsvg}
            alt="Loginsvg"
          /></Link>
          <img className="" src={Mainimg} alt="Mainimg" />
        </div>
    </div>
  );
}

export default Forgorpass;
