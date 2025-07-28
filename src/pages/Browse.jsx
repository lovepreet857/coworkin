import React from 'react';
import Workspaces from '../components/browse/Workspaces';
import Available from '../components/browse/availabledata';
import Availablesvg from '../../public/svg/browser_arrow-right-2.svg'

const Browse = () => {
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
