import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BenifitCard from "./Pages/BenifitCard";
import BookSlot from "./Pages/BookSlot";
import CreateCard from "./Pages/CreateCard";
import DownloadCard from "./Pages/DownloadCard";
import HospitalLabUser from "./Pages/HospitalLabUser";
import Services from "./Pages/Services";
import UseCard from "./Pages/UseCard";
import Footer from "./Pages/Footer";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Bill from "./Pages/Bill";
import AboutUs from "./common/AboutUs";
import LearnMore from "./common/LearnMore";

const App = () => {
  return (
    <>
     <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="BenifitCard/" element={<BenifitCard/>} />
        <Route path="Bookslot/" element={<BookSlot/>} />
        <Route path="CreateCard/" element={<CreateCard/>} />
        <Route path="DownloadCard/" element={<DownloadCard/>} />
        <Route path="hospitalLabUser/" element={<HospitalLabUser/>} />
        <Route path="Services/" element={<Services/>} />
        <Route path="Usecard/" element={<UseCard/>} />
        <Route path="Footer/" element={<Footer/>} />
        <Route path="SignUp/" element={<SignUp/>} />
        <Route path="LogIn/" element={<LogIn/>} />
        <Route path="Bill/" element={<Bill/>} />
        <Route path="AboutUs/" element={<AboutUs/>} />
        <Route path="LearnMore/" element={<LearnMore/>} />
        


      </Routes>
     </div>
    </>
  );
};

export default App;
