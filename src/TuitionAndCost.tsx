import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CollegeCards from "./components/CollegeCards";
import AltSections from "./components/SAltSections";
import Button from "./components/Button";
import GlobalFooter from "./components/GlobalFooter";

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
      imgSrc: "/assets/tc-mm-1920x1281.jpg",
      imgAlt: "tuition",
      youtubeId: "",
      buttonLabel: "Learn More",
      buttonHref:
        "https://kctcs.edu/affording-college/managing-your-money/index.aspx",
      buttonStyle: "",
      buttonIcon: "",
    },
    {
      title: "Online Tuition",
      heading: "Affordable Tuition for All Students.",
      description:
        "Whether you’re in Kentucky or across the country, our online tuition remains consistent and accessible. At KCTCS, both in-state and out-of-state students benefit from the same low rate for online courses. Explore your educational opportunities with transparent, predictable costs, ensuring you get the best value for your investment in your future.",
      imgSrc: "/assets/tc-mm-1920x1281.jpg",
      imgAlt: "tuition",
      youtubeId: "",
      buttonLabel: "Learn More",
      buttonHref: "https://kctcs.edu/affording-college/tuition-costs/",
      buttonStyle: "",
      buttonIcon: "",
    },
    {
      title: "Online Tuition",
      heading: "Program Applicability.",
      description:
        "If you are receiving financial aid, keep in mind that the federal government will only pay for the courses that apply toward your major.  Your aid may be adjusted accordingly, if you chose to remain in those courses. ",
      imgSrc: "/assets/tc-mm-cat-guy-1920x1281.jpg",
      imgAlt: "tuition",
      youtubeId: "",
      buttonLabel: "Learn More",
      buttonHref:
        "https://kctcs.edu/affording-college/program-applicability/index.aspx",
      buttonStyle: "",
      buttonIcon: "",
    },
    {
      title: "Financial Aid",
      heading: "Graduate",
      headingHighlight: "Debt Free",
      description:
        "We are here to provide you with what you need to succeed. Paying for college can be confusing. Learn about financial aid with these great videos.",
      imgSrc: "/assets/tc-gdf-purse-932-699.jpg",
      imgAlt: "tuition",
      youtubeId: [
        { id: "3cb1nv2IF2s", title: "Your financial aid questions answered!" },
        { id: "mnQReKOtNvo", title: "Part 1 Verification is OK!" },
        { id: "7-DSeG-v3Bc", title: "Part 2 Verification Tips" },
      ],
      buttonLabel: "Learn More",
      buttonStyle: "",
      buttonIcon: "",
      buttonHref: "https://kctcs.edu/financial-aid/index.aspx",
    },
  ];

  return (
    <>
      <Header isActive="tuition-and-cost" />
      <Hero title="Tuition and Costs" />
      <div className="bg-[] mb-[64px] lg:mb-[96px]">
        <div className="container mx-auto px-[24px] lg:px-0 pt-[64px] lg:pt-[96px] pb-[56px] lg:pb-[96px] border-b-[1px] border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[64px]">
            <div className="w-full aspect-[4/3] lg:w-1/2 overflow-hidden">
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
                Affordable Education<span className="bar">Online</span>.
              </h1>
              <p className="text-[21px] font-[500] leading-[32px] text-[#00467F]">
                Concerned about paying for your online education? We’ve got you
                covered. We have the lowest tuition in Kentucky, and online
                students are eligible for a wide array of scholarships and
                financial aid.
              </p>
              <div className="flex mt-[32px]">
                <Button
                  label="How to Pay for College"
                  href="https://kctcs.edu/affording-college/"
                  type="primary"
                />
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
      <GlobalFooter />
    </>
  );
}

export default TuitionAndCost;
