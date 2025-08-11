import React, { useState } from 'react';
import Loginsvg from "../../public/svg/login_arrow-left.svg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from 'react-router-dom';
import Show from "../../public/svg/forgot_show.svg"
import { useNavigate } from "react-router-dom";

const Creatpass = () => {
        const navigate = useNavigate();
    
     const [show, setShow] = useState(false);
         const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            tel: "",
            password: "",
            agree: false,
          });

        const handleClick = (e) => {
  e.preventDefault();

   if (!formData.tel.trim() || !formData.password.trim()) {
      alert("Please fill in both Email and Password.");
      return;
    }   
  if (formData.tel !== formData.password) {
    alert("Passwords do not match");
    return;
  }
  

  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    navigate("/login");
  }, 2000);
};
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
        
        
  return (
       <div className='container flex flex-col-reverse md:grid grid-cols-2 md:gap-[32px]' >
         <div>
         <Link to={"/"}> <img
            className=" hidden md:block w-[24px]"
            src={Loginsvg}
            alt="Loginsvg"
          /></Link>
          <h1 className=" py-5 md:py-10 text-[20px] md:text-[40px] text-black-black leading-[130%] font-semibold font-Inter">
          Create password?
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="tel"
              placeholder="Enter password"
              label="Change password"
             type={show ? "text" : "password"}
              value={formData.tel}
              onChange={handleChange}
            />
            <div className='relative'>

            <Input
              name="password"
              placeholder="Re-enter password"
              label="Re-enter password"
             type={show ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
    
            />
            <div onClick={() => setShow(!show)} className='absolute bottom-[10px] right-[20px]'>
                <img src={Show} alt="Show" />
            </div>
            </div>

           <Link to={"/login"}> <Button
              onClick={handleClick}
              loading={isLoading}
              size="cutom1"
              className="text-center mb-5 max-w-full w-full leading-[130%] font-Inter font-normal"
            >
              Log in
            </Button></Link>

            <p className="font-Inter mb-[30px]  text-center font-normal text-sm  md:text-base leading-[100%] ">
              Don,t have an Account?{" "}
             <Link to={"/createaccount"}> <span className="text-natural-blue"> Create account</span></Link>
            </p>
            <div className="justify-center items-center gap-5 flex  mb-[30px]">
              <span className=" max-w-[90px] sm:max-w-[120px] w-full border-dark2-grya  h-0 border md:hidden "></span>
              <p className="text-[14px] md:text-base font-Inter font-normal leading-[100%]">
                Or Continue with
              </p>
              <span className=" max-w-[90px] sm:max-w-[120px]  w-full border-dark2-grya h-0 border md:hidden "></span>
            </div>
            <div className="justify-between m-auto flex max-w-[427px]">
              <img className="h-[30px]" src={"http://localhost:3000/upload/ashish1754891300543.svg"} alt="Google" />
              <img src={"http://localhost:3000/upload/ashish1754891300541.svg"} alt="Facebook" />
              <img src={"http://localhost:3000/upload/ashish1754891423796.svg"} alt="Apple" />
              <img src={"http://localhost:3000/upload/ashish1754891347492.svg"} alt="Twitter" />
            </div>
          </form>
        </div>
       <div className="relative">
         <Link to={"/"}> <img
            className=" absolute md:hidden w-[24px]"
            src={Loginsvg}
            alt="Loginsvg"
          /></Link>
                  <img src={"http://localhost:3000/upload/ashish1753160504473.png"} alt="Main Visual" />

        </div>
    </div>
  );
}

export default Creatpass;
