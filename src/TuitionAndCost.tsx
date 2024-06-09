import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CollegeCards from "./components/CollegeCards";
import AltSections from "./components/SAltSections";
import Button from "./components/Button";
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
  const sections = [
    {
      title: "Online Tuition",
      heading: "Managing Your Money.",
      description:
        "College is a whole new time and experience for young adults. Between going to a whole new school, you may be living on your own, starting your first job, managing money on your own for the first time, and so on. This can be a scary thing, but it is very possible to do it correctly!",
      imgSrc: "/src/assets/admissions.jpeg",
      imgAlt: "tuition",
      buttonLabel: "Learn More",
      buttonHref: "/tuition-and-costs.html",
    },
    {
      title: "Online Tuition",
      heading: "Program Applicability.",
      description:
        "If you are receiving financial aid, keep in mind that the federal government will only pay for the courses that apply toward your major.  Your aid may be adjusted accordingly, if you chose to remain in those courses. ",
      imgSrc: "/src/assets/admissions.jpeg",
      imgAlt: "tuition",
      buttonLabel: "Learn More",
      buttonHref: "/tuition-and-costs.html",
    },
    {
      title: "Financial Aid",
      heading: "Graduate Debt Free.",
      headingHighlight: "",
      description:
        "We are here to provide you with what you need to succeed. Paying for college can be confusing. Learn about financial aid with these great videos.",
      imgSrc: "/src/assets/admissions.jpeg",
      imgAlt: "tuition",
      buttonLabel: "Learn More",
      buttonHref: "/tuition-and-costs.html",
    },
  ];

  return (
    <>
      <Header isActive="tuition-and-cost" />
      <Hero title="Tuition and Costs" />
      <div className="bg-[] mb-[64px] lg:mb-[96px]">
        <div className="container mx-auto px-[24px] lg:px-0 pt-[64px] lg:pt-[96px] pb-[56px] lg:pb-[96px]">
          <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[64px]">
            <div className="w-full aspect-[4/3] lg:w-1/2 rounded-[12px] overflow-hidden">
              <img
                src="https://southeast.kctcs.edu/about/media/images/about-tuition-cost.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#00467F] text-[20px] mb-[12px] inline-block font-[600]">
                Tuition & Cost
              </span>
              <h1 className="text-[48.8px] leading-[52px] lg:text-[61.04px] mb-[24px] font-[800] lg:leading-[64px] text-[#00467F]">
                Afraid You Can't Afford College<span className="">?</span>
              </h1>
              <p className="text-[21px] font-[500] leading-[32px] text-[#00467F]">
                Well, you can. With the lowest tuition in Kentucky, financial
                aid options, and a helping hand to guide you through the
                application process, our colleges have you covered. We'll help
                you reach your dreams at a price that won't break the bank.
              </p>
              <div className="flex justify-center mt-[32px]">
                <Button label="How to Pay for College" href="" type="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AltSections sections={sections} />

      <CollegeCards
        contentset="tuition"
        subheadline="Choose a college to explore more Tuition resources."
      />
    </>
  );
}

export default TuitionAndCost;
