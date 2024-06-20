import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import FeaturedAreasList2 from "./FeaturedAreas2";
import ProgramResults from "./ProgramResults";

function SFeaturedAreas() {
  const [selectedCredential, setSelectedCredential] = useState("");
  const [selectedArea, setSelectedArea] = useState("paralegal");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [uniqueCredentialTypes, setUniqueCredentialTypes] = useState([]);
  const [selectedCredentialTypes, setSelectedCredentialTypes] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [academicPlans, setAcademicPlans] = useState([]);
  const [uniqueCredentials, setUniqueCredentials] = useState([]);
  const [uniqueProgramAreas, setUniqueProgramAreas] = useState([]);
  const [uniqueSectors, setUniqueSectors] = useState([]);
  const [uniquePlanNames, setUniquePlanNames] = useState([]);
  const [filteredAcademicPlans, setFilteredAcademicPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedPrograms, setExpandedPrograms] = useState({});
  const [isExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleProgramAreaClick = (title) => {
    setSelectedArea(title.toLowerCase());
    console.log("Clicked on:", title);
  };

  return (
    <>
      <section className="pt-[48px] lg:pt-[0px] lg:pb-[56px]">
        <div className="flex flex-col">
          <div className="relative w-full group overflow-hidden">
            <div className="px-[24px] container mx-auto px-[24px] lg:px-0 flex items-end mb-[32px] lg:mb-[64px] w-full">
              <h1 className="text-[48.8px] leading-[52px] tracking-[-0.09375rem] lg:w-[50%] lg:text-[61.04px] lg:leading-[64px] text-[#00467F] font-[800] has-bar">
                Real World Success,{" "}
                <span className="whitespace-nowrap">
                  <span className="bar">Anywhere</span>
                  <span className="dot">.</span>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-[80px] items-center lg:mb-[24px] lg:container lg:mx-auto lg:px-0">
            <div className="w-full lg:w-[50%] h-full relative z-1 aspect-[16/9] overflow-hidden">
              <img
                className="w-full group-hover:scale-110 transition ease-in-out duration-[250ms] h-full absolute z-1 object-cover"
                src="https://kctcs.edu/aa-female-no-mask.png"
                alt="Success story of a female student"
              />
            </div>
            <div className="px-[24px] pt-[32px] lg:pt-[0] pb-[48px] lg:pb-0 flex flex-col gap-[24px] lg:gap-[32px] lg:px-0 w-full lg:w-[50%] text-center">
              <div>
                <h2 className="text-[31px] w-full leading-[28px] mb-[16px] lg:mb-[24px] lg:text-[48.8px] lg:leading-[48px] lg:tracking-[-0.09rem] text-[#00467F] font-[800]">
                  Start Your Future.
                </h2>
                <p className="text-[16px] lg:text-[20px] text-[#00467F] max-w-[calc(27.5*25px)] mx-auto">
                  Whether you’re starting college for the first time or thinking
                  about a career change, we’ve got you covered. We offer{" "}
                  <a
                    className="border-b"
                    href="/explore-programs.html?credential=Degree"
                  >
                    associate degrees
                  </a>
                  ,{" "}
                  <a
                    className="border-b"
                    href="/explore-programs.html?credential=Diploma"
                  >
                    diplomas
                  </a>
                  , and{" "}
                  <a
                    className="border-b"
                    href="/explore-programs.html?credential=Certificate"
                  >
                    certificates
                  </a>{" "}
                  - and we’re here to help you reach your goals. Get started by
                  finding the program that works for you!
                </p>
              </div>
              <div className="w-full flex justify-center text-center">
                <Button
                  href="/explore-programs.html"
                  label="Explore Programs"
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full container mx-auto px-[24px] lg:px-0 pb-[56px] border-[#f0f0f0] lg:pb-[96px]">
        <h3 className="text-[31px] leading-[32px] lg:text-[48.8px] mb-[16px] lg:leading-[52px] lg:mb-[24px] font-[800] text-[#00467F]">
          Shape Your Future.
        </h3>
        <p className="mb-[24px] lg:mb-[32px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
          Explore featured online programs in growing professions.
          <span className="hidden">
            Shape your future with the expertise to thrive in growing
            professional fields.
          </span>
        </p>
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[64px]">
          <div className="w-full lg:sticky lg:top-0 h-full">
            <FeaturedAreasList2
              handleProgramAreaClick={handleProgramAreaClick}
              academicPlans={academicPlans}
              setAcademicPlans={setAcademicPlans}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SFeaturedAreas;
