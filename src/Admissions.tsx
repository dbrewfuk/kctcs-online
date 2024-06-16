import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AltSections from "./components/SAltSections";
import DynamicSections from "./DynamicSections";
import CollegeCards from "./components/CollegeCards";
import { collegeContent } from "./components/content.json";
import Button from "./components/Button";
import GlobalFooter from "./components/GlobalFooter";

function Admissions() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("Select a College");
  const [contentFade, setContentFade] = useState(false); // State for content fade
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
  const delay = 20000;

  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
    window.location.href = `/programs?search=${searchQuery}`;
  };

  return (
    <>
      <Header isActive="admissions" />
      <Hero title="Admissions" />

      <div className="container mx-auto px-[24px] lg:px-0 pt-[64px] lg:pt-[96px] pb-[64px] border-b-[1px] border-[rgba(0,0,0,0.1)] lg:pb-[96px]">
        <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[64px]">
          <div className="w-full  aspect-[4/3] lg:w-1/2 overflow-hidden">
            <img
              src="/assets/admissions.jpeg"
              className="w-full h-full object-cover"
              alt="admissions-photo"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#00467F] text-[20px] mb-[4px] inline-block font-[600]">
              Admissions
            </span>
            <h1 className="text-[48px] leading-[52px] lg:text-[61.04px] mb-[24px] font-[800] lg:leading-[64px] text-[#00467F]">
              Let's Get You{" "}
              <span className="whitespace-nowrap">
                <span className="bar">Started</span>
                <span className="dot">.</span>
              </span>
            </h1>
            <p className="text-[17.5px] leading-[28px] lg:text-[21px] font-[500] lg:leading-[32px] text-[#00467F]">
              Whether you’re a high school student, a returning student or just
              looking to take a class on the side, we are here for you. Pick a
              school to learn more about their admission requirements.
            </p>
            <div className="flex mt-[32px] justify-center lg:justify-start">
              <Button
                label="Visit Admissions"
                href="https://kctcs.edu/admissions/"
                type="primary"
              />
            </div>
          </div>
        </div>
      </div>

      <CollegeCards
        contentset="admissions"
        theme=""
        subheadline="Choose a college to explore more Admissions resources."
      />
      <GlobalFooter />
    </>
  );
}

export default Admissions;
