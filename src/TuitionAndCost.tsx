import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CollegeCards from "./components/CollegeCards";
import DynamicSections from "./DynamicSections";
import VideoBlockSlider from "./components/VideoBlockSlider";
import programs from "./programs-20240207";

function TuitionAndCost() {
  const [selectedCredential, setSelectedCredential] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [uniqueCredentialTypes, setUniqueCredentialTypes] = useState([]);
  const [selectedCredentialTypes, setSelectedCredentialTypes] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [academicPlans, setAcademicPlans] = useState([]);
  const [uniqueCredentials, setUniqueCredentials] = useState([]);
  const [uniqueProgramAreas, setUniqueProgramAreas] = useState([]);
  const [uniquePlanNames, setUniquePlanNames] = useState([]);
  const [filteredAcademicPlans, setFilteredAcademicPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedPrograms, setExpandedPrograms] = useState({}); // State to track expanded state for each program
  const [isExpanded] = useState(false);
  const [selectedColleges, setSelectedColleges] = useState(
    Array(filteredAcademicPlans.length).fill({ name: "", url: "" }),
  );
  const videoUrls = [
    "https://player.vimeo.com/video/665275644?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/678281924?background=1&autoplay=1&loop=1&byline=0&title=0",
  ];
  const captions = [
    "Bluegrass Community & Technical College",
    "West Kentucky Community & Technical College",
  ];

  return (
    <>
      <Header />
      <Hero title="Tuition and Costs" />
      <div className="container mx-auto px-[24px] lg:px-0 pt-[64px] lg:pt-[96px] pb-[64px] lg:pb-[96px]">
        <div className="flex flex-col lg:flex-row items-center gap-[64px]">
          <div className="w-full lg:w-1/2 rounded-[12px] overflow-hidden">
            <img
              src="./src/assets/admissions.jpeg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-[61.04px] mb-[24px] font-[900] leading-[64px] text-[#00467F]">
              AFRAID YOU CAN'T AFFORD COLLEGE<span className="dot">?</span>
            </h1>
            <p className="text-[21px] font-[500] leading-[32px] text-[#00467F]">
              Well, you can. With the lowest tuition in Kentucky, financial aid
              options, and a helping hand to guide you through the application
              process, our colleges have you covered. We'll help you reach your
              dreams at a price that won't break the bank.
            </p>
            <div className="mt-[32px] lg:mt-[48px]">
              <a className="px-[48px] hover:bg-[white] hover:text-[#00467F] transition border-[1px] border-[#00467F] ease-in-out duration-[250ms] py-[16px] bg-[#00467F] rounded-full text-[white] text-[17.5px] font-[600] cursor-pointer">
                How to Pay for College
              </a>
            </div>
          </div>
        </div>
      </div>

      <CollegeCards contentset="tuition" />
    </>
  );
}

export default TuitionAndCost;
