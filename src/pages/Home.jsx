import React from 'react';
import Banner from '../components/home/banner';
import Workspage from '../components/home/Works';
import Choose from '../components/home/choose';
import Asked from '../components/home/Asked';
import Profect from '../components/home/Profect';
import Users from '../components/home/Users';
import Featured from '../components/home/Featured';
const Home = () => {
  return (
   <>
   <Banner/>
   <Workspage Workhaeding={"How It Works"} Workparagraph={"Booking a coworking space has never been easier."}/>
   <Featured Workhaeding={"Top Featured Workspaces"} Workparagraph={"Handpicked workspaces loved by remote professionals and teams."}/>
   <Choose  Workhaeding={"Why Choose CoWorkMate?"} Workparagraph={"Simplifying workspace booking for individuals, teams, and businesses."}/>
   <Users Workhaeding={"What Our Users Are Saying"}  Workparagraph={"Trusted by remote professionals, startups, and global teams."}/>
   <Asked  Workhaeding={"Frequently Asked Questions"} Workparagraph={"Got a question? We’re here to help."}/>
   <Profect  Workhaeding={"Ready to Book Your Perfect Workspace?"} Workparagraph={"Join thousands of professionals using CoWorkMate to work better, smarter, and anywhere."}/>
   </>
  );
}

export default Home;
