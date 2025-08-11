import React, { useEffect, useState } from 'react';
import Workspaces from '../components/browse/Workspaces';
import Available from '../components/browse/availabledata';
import Availablesvg from '../../public/svg/browser_arrow-right-2.svg'
import axios from 'axios';

const Browse = () => {
    const [data,setdata]=useState([])
  useEffect(()=>{
async function fetchdata() {
  try {
  const res = await axios.get("http://localhost:3000/api/getallproduct")
  setdata(res.data.data)
  
  } catch (error) {
console.log(error)    
  }
  
}
fetchdata()
  },[])
  const delhi= data.filter((item)=>item.catogry === "Delhi")
  const Chandigarh= data.filter((item)=>item.catogry === "Chandigarh")
  const Noyda= data.filter((item)=>item.catogry === "Noyda")
  const Jaipur= data.filter((item)=>item.catogry === "Jaipur")
  const Kangra= data.filter((item)=>item.catogry === "Kangra")
  const Dheradun= data.filter((item)=>item.catogry === "Dheradun")
  return (
    <>
     <Workspaces/>
     <Available  data={delhi} text={"Available in Delhi"} img={Availablesvg}/>
     <Available data={Chandigarh} text={"Available in Chandigarh"} img={Availablesvg}/>
     <Available data={Noyda} text={"Available in Noyda"} img={Availablesvg}/>
     <Available data={Jaipur} text={"Available in Jaipur"} img={Availablesvg}/>
     <Available data={Kangra} text={"Available in Kangra"} img={Availablesvg}/>
     <Available data={Dheradun} text={"Available in Dheradun"} img={Availablesvg}/>


    </>
  );
}

export default Browse;
