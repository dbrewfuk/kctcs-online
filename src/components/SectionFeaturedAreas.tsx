import React, { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kctcs-online.vercel.app/api/programs-with-colleges",
        );
        const data = await response.json();

        const sectors = [...new Set(data.map((item) => item.sector))];
        const credentials = [...new Set(data.map((item) => item.credential))];
        const plans = [...new Set(data.map((item) => item.plan))];
        const areas = [...new Set(data.map((item) => item.area))];

        setUniqueSectors(sectors);
        setUniqueCredentials(credentials);
        setUniquePlanNames(plans);
        setUniqueProgramAreas(areas);

        const credentialTypesSet = new Set(data.map((item) => item.credential));
        setUniqueCredentialTypes(Array.from(credentialTypesSet));

        const uniqueAcademicPlans = data.reduce((acc, program) => {
          const key = `${program.plan} - ${program.credential}`;
          if (!acc[key]) {
            acc[key] = {
              name: program.plan,
              credential: program.credential,
              colleges: Array.isArray(program.colleges) ? program.colleges : [], // Ensure colleges is an array// Convert colleges string to array
              area: program.area,
              sector: program.sector,
              description: program.description,
              programAreaUrl: program.program_area_url,
            };
          }
          return acc;
        }, {});

        setAcademicPlans(Object.values(uniqueAcademicPlans));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Standardize credentials
  const credentialMapping = {
    "Assoc in Applied Science": "Degree",
    "Assoicate in Applied Science": "Degree",
    "Associate in Applied Science": "Degree",
    "Associates in Applied Science": "Degree",
    "Associate in Arts": "Degree",
    "Associate in Science": "Degree",
    Certificate: "Certificate",
    Diploma: "Diploma",
  };

  useEffect(() => {
    const filteredPlans = academicPlans.filter((plan) => {
      const matchesCredentialTypes =
        selectedCredentialTypes.length === 0 ||
        selectedCredentialTypes.includes(plan.credential);

      const matchesSearch =
        !searchQuery ||
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.credential.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters =
        (!selectedCredential || plan.credential === selectedCredential) &&
        (!selectedArea ||
          plan.area.toLowerCase() === selectedArea.toLowerCase()) && // Ensure case-insensitive match
        (!selectedPlan || plan.name === selectedPlan);

      return matchesSearch && matchesFilters && matchesCredentialTypes;
    });

    setFilteredAcademicPlans(filteredPlans);
  }, [
    selectedCredential,
    selectedCredentialTypes,
    selectedArea,
    selectedPlan,
    academicPlans,
    searchQuery,
  ]);

  return (
    <>
      <div className="pt-[48px] lg:pt-[0px] lg:pb-[56px]">
        <div className="flex flex-col">
          <div className="relative w-full group overflow-hidden">
            <div className="px-[24px] container mx-auto px-[24px] lg:px-0 flex items-end mb-[48px] lg:mb-[64px] w-full">
              <h1 className="text-[48.8px] leading-[48px] tracking-[-0.09375rem] lg:w-[50%] lg:text-[61.04px] lg:leading-[64px] text-[#00467F] font-[800] has-bar">
                Real World Success,{" "}
                <span className="whitespace-nowrap">
                  <span className="text-[#FBBF24]">Anywhere</span>
                  <span className="dot">.</span>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  lg:gap-[64px]  lg:mb-[0]  lg:container lg:mx-auto lg:px-0">
            <div className="w-full lg:w-[50%] h-full relative z-1 aspect-[16/9] overflow-hidden lg:rounded-[12px]">
              <img
                className="w-full group-hover:scale-110 transition ease-in-out duration-[250ms] h-full absolute z-1 object-cover"
                src="https://kctcs.edu/aa-female-no-mask.png"
              />
            </div>
            <div className="px-[24px] pt-[24px] lg:pt-[0] pb-[48px] flex flex-col gap-[32px] lg:px-0 w-full  lg:w-[50%] text-center">
              <div>
                <h1 className="text-[31px] w-full leading-[28px] mb-[16px] lg:mb-[24px] w-[50%] lg:text-[48.8px] lg:leading-[48px] lg:tracking-[-0.09rem] text-[#00467F] font-[800]">
                  Start Your Future.
                </h1>
                <p className="text-[16px] lg:text-[20px] text-[#00467F] max-w-[calc(27.5*25px)] mx-auto">
                  Whether you’re starting college for the first time or thinking
                  about a career change, we’ve got you covered. We offer{" "}
                  <a className="border-b" href="">
                    associate degrees
                  </a>
                  ,{" "}
                  <a className="border-b" href="">
                    diplomas
                  </a>
                  , and <a className="border-b">certificates</a> - and we’re
                  here to help you reach your goals. Get started by finding the
                  program that works for you!
                </p>
              </div>
              <div className="w-full flex justify-center text-center ">
                <Button
                  href="/explore-programs.html"
                  label="Explore Programs"
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full container mx-auto px-[24px] lg:px-0 mx-auto pb-[56px] border-[#f0f0f0] lg:pb-[96px]">
        <h3 className="text-[31px] leading-[32px] lg:text-[48.8px] mb-[24px] lg:leading-[52px] lg:mb-[56px] font-[800] text-[#00467F]">
          Shape Your Future.
        </h3>
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[64px]">
          <div className="w-full lg:w-[25%] lg:sticky lg:top-0 h-full">
            <FeaturedAreasList2
              handleProgramAreaClick={handleProgramAreaClick}
              academicPlans={academicPlans}
              setAcademicPlans={setAcademicPlans}
            />
          </div>
          <div className="w-full  lg:w-[70%]">
            <div className={`w-full hidden lg:block `}>
              <ProgramResults
                key={selectedArea}
                darkBg={true}
                showCount={false}
                filteredAcademicPlans={filteredAcademicPlans}
                enableViewToggle={false}
                minWidth={false}
                showViewToggle={false}
              />
            </div>
          </div>
        </div>
        <div className="w-full hidden flex justify-center lg:mt-[64px]">
          <Button
            href="/programs.aspx"
            label="Explore All Programs"
            type="primary"
          />
        </div>
      </div>
    </>
  );
}

export default SFeaturedAreas;
