import React, { useEffect, useState } from 'react';
import Workspaces from '../components/browse/Workspaces';
import Available from '../components/browse/availabledata';
import Availablesvg from '../../public/svg/browser_arrow-right-2.svg'
import axios from 'axios';

const Browse = () => {
  const [data,setdata]=useState([])

  const handelechange = async () => {
    try {
       const res = await axios.get("http://localhost:3000/api/getallproduct")
       console.log(res)

    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
handelechange()
  },[])
  return (
    <>
     <Workspaces/>
     <Available text={"Available in Delhi"} img={Availablesvg}/>
     <Available text={"Available in Chandigarh"} img={Availablesvg}/>
     <Available text={"Available in Noyda"} img={Availablesvg}/>
     <Available text={"Available in Jaipur"} img={Availablesvg}/>
     <Available text={"Available in Kangra"} img={Availablesvg}/>
     <Available text={"Available in Dheradun"} img={Availablesvg}/>


    </>
  );
}

export default Browse;
