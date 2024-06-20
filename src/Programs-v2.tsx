import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProgramResults from "./components/ProgramResults";
import Button from "./components/Button";

function Programs() {
  const [selectedCredential, setSelectedCredential] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [uniqueSectors, setUniqueSectors] = useState([]);
  const [uniqueCredentialTypes, setUniqueCredentialTypes] = useState([]);
  const [selectedCredentialTypes, setSelectedCredentialTypes] = useState([]);
  const [academicPlans, setAcademicPlans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [uniqueCredentials, setUniqueCredentials] = useState([]);
  const [uniqueProgramAreas, setUniqueProgramAreas] = useState([]);
  const [uniquePlanNames, setUniquePlanNames] = useState([]);
  const [filteredAcademicPlans, setFilteredAcademicPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [expandedPrograms, setExpandedPrograms] = useState({});
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [selectedCollegeIndex, setSelectedCollegeIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleSectorChange = (e) => {
    const selectedSector = e.target.value;
    setSelectedSector(selectedSector);

    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("sector", selectedSector);
    const newParamsString = urlSearchParams.toString();
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newParamsString}`,
    );
  };

  const handleCredentialTypeChange = (e, credentialType) => {
    const isSelected = selectedCredentialTypes.includes(credentialType);
    const updatedSelectedTypes = isSelected
      ? selectedCredentialTypes.filter((type) => type !== credentialType)
      : [...selectedCredentialTypes, credentialType];

    setSelectedCredentialTypes(updatedSelectedTypes);

    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("credentialTypes", updatedSelectedTypes.join(","));
    const newParamsString = urlSearchParams.toString();
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newParamsString}`,
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kctcs-online.vercel.app/api/programs-with-colleges",
        );
        const data = await response.json();

        // Mapping of misspellings to corrections
        const corrections = {
          "Release of Informatin Data Spec.":
            "Release of Information Data Specialist",
          "Release of Information Data Specicalist":
            "Release of Information Data Specialist",
          "Application Support Technician ": "Application Support Technician",
          "Criminal Behavior ": "Criminal Behavior",
          // Add more corrections as needed
        };

        // Utility function to correct misspellings and trim trailing spaces
        const correctAndTrim = (str) => {
          const trimmedStr = str.trim();
          return corrections[trimmedStr] || trimmedStr;
        };

        // Clean up the data
        const cleanedData = data.map((item) => ({
          ...item,
          sector: correctAndTrim(item.sector),
          credential: correctAndTrim(item.credential),
          plan: correctAndTrim(item.plan),
          area: correctAndTrim(item.area),
          description: correctAndTrim(item.description),
          // Ensure colleges is an array and correct each college name and url
          colleges: Array.isArray(item.colleges)
            ? item.colleges.map((college) => ({
                ...college,
                name: correctAndTrim(college.name),
                url: correctAndTrim(college.url),
              }))
            : [],
        }));

        const sectors = [...new Set(cleanedData.map((item) => item.sector))];
        const credentials = [
          ...new Set(cleanedData.map((item) => item.credential)),
        ];
        const plans = [...new Set(cleanedData.map((item) => item.plan))];
        const areas = [...new Set(cleanedData.map((item) => item.area))];

        setUniqueSectors(sectors);
        setUniqueCredentials(credentials);
        setUniquePlanNames(plans);
        setUniqueProgramAreas(areas);

        const credentialTypesSet = new Set(
          cleanedData.map((item) => item.credential),
        );
        setUniqueCredentialTypes(Array.from(credentialTypesSet));

        const uniqueAcademicPlans = cleanedData.reduce((acc, program) => {
          const key = `${program.plan} - ${program.credential}`;
          if (!acc[key]) {
            acc[key] = {
              name: program.plan,
              credential: program.credential,
              area: program.area,
              sector: program.sector,
              description: program.description,
              colleges: program.colleges, // Start with the colleges for this program
            };
          } else {
            // Merge colleges if this key already exists
            acc[key].colleges = [...acc[key].colleges, ...program.colleges];
            // Remove duplicates from colleges
            acc[key].colleges = acc[key].colleges.filter(
              (value, index, self) =>
                index ===
                self.findIndex(
                  (t) => t.name === value.name && t.url === value.url,
                ),
            );
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

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const credential = queryParams.get("credential") || "";
    const area = queryParams.get("area") || "";
    const plan = queryParams.get("plan") || "";
    const sector = queryParams.get("sector") || "";
    const credentialTypes = queryParams.get("credentialTypes") || "";
    const searchQuery = queryParams.get("search") || "";

    setSelectedCredential(credential);
    setSelectedArea(area);
    setSelectedPlan(plan);
    setSelectedSector(sector);
    setSearchQuery(searchQuery);

    // Split the credentialTypes string into an array
    if (credentialTypes) {
      setSelectedCredentialTypes(credentialTypes.split(","));
    }
  }, []);

  useEffect(() => {
    const filteredPlans = academicPlans.filter((plan) => {
      // Normalize credential to check against selected types
      const normalizedCredential = plan.credential.toLowerCase();

      // Check if the plan's credential matches the selected credential types
      const matchesCredentialTypes =
        selectedCredentialTypes.length === 0 ||
        selectedCredentialTypes.some((type) => {
          if (type.toLowerCase() === "degree") {
            return normalizedCredential.includes("associate");
          } else {
            return normalizedCredential === type.toLowerCase();
          }
        });

      // Check if the plan matches the search query
      const matchesSearch =
        !searchQuery ||
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        normalizedCredential.includes(searchQuery.toLowerCase());

      // Check if the plan matches the selected filters
      const matchesFilters =
        (!selectedCredential ||
          normalizedCredential.includes(selectedCredential.toLowerCase())) &&
        (!selectedArea || plan.area === selectedArea) &&
        (!selectedSector || plan.sector === selectedSector) &&
        (!selectedPlan || plan.name === selectedPlan);

      return matchesSearch && matchesCredentialTypes && matchesFilters;
    });

    setFilteredAcademicPlans(filteredPlans);
  }, [
    selectedCredential,
    selectedArea,
    selectedPlan,
    selectedSector,
    selectedCredentialTypes,
    academicPlans,
    searchQuery,
  ]);

  const handleApplyClick = () => {
    const queryParams = new URLSearchParams();
    if (selectedCredential) queryParams.set("credential", selectedCredential);
    if (selectedArea) queryParams.set("area", selectedArea);
    if (selectedSector) queryParams.set("sector", selectedSector);
    if (selectedPlan) queryParams.set("plan", selectedPlan);
    if (selectedCredentialTypes.length > 0)
      queryParams.set("credentialTypes", selectedCredentialTypes.join(","));

    const queryString = queryParams.toString();
    window.location.href = `/explore-programs.html?${queryString}`;
  };

  const isAnyOptionSelected = () => {
    return (
      selectedCredential ||
      selectedArea ||
      selectedSector ||
      selectedPlan ||
      selectedCredentialTypes.length > 0
    );
  };

  const updateOptions = (title, selectedOption) => {
    switch (title) {
      case "Credential":
        const filteredPlans = academicPlans
          .filter((plan) => plan.credential_type === selectedOption)
          .map((plan) => plan.name);
        const filteredAreas = academicPlans
          .filter((plan) => plan.credential_type === selectedOption)
          .map((plan) => plan.area);

        setUniquePlanNames([...new Set(filteredPlans)]);
        setUniqueProgramAreas([...new Set(filteredAreas)]);
        setSelectedPlan("");
        setSelectedArea("");
        break;
      case "Program Area":
        setSelectedPlan("");
        break;
      default:
        break;
    }
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  const toggleExpanded = (index) => {
    setExpandedPrograms((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const handleToggleExpand = (index) => {
    toggleExpanded(index);
  };

  const toggleDropdown = (index) => {
    setSelectedCollegeIndex(selectedCollegeIndex === index ? null : index);
  };

  const handleCollegeChange = (index, name, url, overview) => {
    setSelectedColleges((prevSelectedColleges) => {
      const updatedColleges = [...prevSelectedColleges];
      updatedColleges[index] = { name, url, overview };
      return updatedColleges;
    });
  };

  const filterRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header
        isActive="explore-programs"
        className={` ${filterOpen ? "z-[-1]" : "z-[1]"}`}
      />

      <div id="sticky-search" className="flex flex-col lg:flex-row z-[1]">
        <div
          id="sticky-search"
          className="w-full lg:min-w-[25vw] lg:max-w-[25vw] sticky h-full z-10 bg-white lg:top-[80px] shadow-[0px_2px_2px_rgba(0,0,0,0.15)] lg:shadow-[none]"
        >
          <div className="container mx-auto px-[24px] pt-[36px] pb-[24px] lg:py-[48px] lg:pl-[56px] lg:pr-[32px]">
            {" "}
            <div className="flex flex-col">
              <div className="lg:block">
                <div className=" text-[#00467F] text-[31.5px] leading-[36px] font-[800] mb-[12px]">
                  Unlock Your Future.
                </div>
                <p className="text-[#00467F] text-[18px] mb-[24px]">
                  From{" "}
                  <a
                    className="cursor-pointer"
                    onClick={() => setSearchQuery("agriculture")}
                  >
                    agriculture
                  </a>{" "}
                  to{" "}
                  <a
                    className="cursor-pointer "
                    onClick={() => setSearchQuery("health")}
                  >
                    health
                  </a>{" "}
                  to{" "}
                  <a
                    className="cursor-pointer "
                    onClick={() => setSearchQuery("Paralegal")}
                  >
                    paralegal
                  </a>
                  , we offer more than 90 programs entirely online. Explore the
                  options and start your journey to a better job and a better
                  life!
                </p>
              </div>

              <div className="sticky flex flex-col gap-[24px] items-center lg:flex-col">
                <form className="lg:block w-full">
                  <div className="flex items-center gap-4 text-[18px] relative">
                    <span className="absolute w-[24px] ml-[12px] left-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29.811 29.811"
                        alt="search"
                        fill="#00467F"
                      >
                        <path d="M14.884 2.25A10.5 10.5 0 009.62 3.67a10.49 10.49 0 00-4.921 6.414A10.493 10.493 0 005.754 18.1c2.735 4.738 8.613 6.556 13.496 4.344l1.82-1.05a10.476 10.476 0 004.034-5.842c.73-2.725.356-5.572-1.055-8.015s-3.688-4.19-6.414-4.922a10.66 10.66 0 00-2.751-.364zm8.606 27.561l-3.121-5.406c-5.962 2.817-13.21.626-16.563-5.18-3.533-6.12-1.43-13.97 4.689-17.504a12.74 12.74 0 019.723-1.28 12.727 12.727 0 017.779 5.97 12.73 12.73 0 011.28 9.723 12.717 12.717 0 01-4.965 7.137l3.126 5.415z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Search programs"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-[17.5px] border-[6px] transition ease-in-out duration-[250ms] border-[transparent] focus:border-[#fbbf24] focus:outline-none text-[#00467F] leading-[24px] pl-[48px] py-[12px] bg-[#f3f3f3] text-[#00467F] w-full"
                    />
                    {searchQuery && (
                      <span
                        onClick={clearSearchQuery}
                        className="absolute cursor-pointer mr-[16px] right-0 w-[18px] text-white rounded-md transition-colors duration-300 hover:bg-opacity-80 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 27.436 27.436"
                          fill="#00467F"
                        >
                          <path d="M0.412305 0L0 1.416l12.303 12.303L0 26.022l1.414 1.414 12.303-12.303 12.305 12.303 1.414-1.416-12.303-12.303L27.436 1.414 26.022.002 13.72 12.305 1.414 0z"></path>
                        </svg>
                      </span>
                    )}
                  </div>
                </form>
                <div
                  className="lg:hidden w-full
                "
                >
                  <Button
                    type="outline"
                    width="full"
                    size="large"
                    onClick={() => setFilterOpen(true)}
                  >
                    Filter
                  </Button>
                </div>

                <div
                  className={`lg:flex flex-col w-full gap-[24px] ${filterOpen ? "block" : "hidden"}`}
                >
                  {filterOpen && (
                    <div className="fixed lg:hidden z-[999] top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[200] bg-[rgba(0,0,0,0.65)]"></div>
                  )}
                  <div
                    ref={filterRef}
                    className={`
                    fixed z-[999] lg:relative p-[32px] lg:p-[0px] bg-[white] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] lg:shadow-[none] top-[50%] lg:top-0 max-w-[720px] lg:left-[0] transform  lg:translate-y-[0] lg:translate-x-[0] translate-y-[-50%] 
                    m-[24px] lg:m-[0] w-[calc(100%-48px)] lg:w-full left-0 h-auto flex-col 
                    ${filterOpen ? "lg:flex" : "hidden lg:flex"}
                  `}
                  >
                    <div className="absolute lg:hidden top-0 right-0 transform translate-y-[calc(-100%-12px)]">
                      <a
                        className="lg:hidden bg-[#fbbf24] h-[36px] w-[36px] flex justify-center items-center hover:scale-[1.15] transition easeInOut duration-[250ms] cursor-pointer rounded-full"
                        type="icon"
                        onClick={() => setFilterOpen(false)}
                        tabIndex={0}
                        aria-label="Close filter modal"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setFilterOpen(false);
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 10.586L17.707 4.879 18.707 5.879 13 11.586 18.707 17.293 17.707 18.293 12 12.707 6.293 18.293 5.293 17.293 11 11.586 5.293 5.879 6.293 4.879 12 10.586Z"
                            fill="white"
                          />
                        </svg>
                      </a>{" "}
                    </div>{" "}
                    <Filters
                      uniqueCredentials={uniqueCredentials}
                      uniqueCredentialTypes={uniqueCredentialTypes}
                      setUniqueCredentialTypes={setUniqueCredentialTypes}
                      selectedCredentialTypes={selectedCredentialTypes}
                      setSelectedCredentialTypes={setSelectedCredentialTypes}
                      handleCredentialTypeChange={handleCredentialTypeChange}
                      uniqueProgramAreas={uniqueProgramAreas}
                      uniquePlanNames={uniquePlanNames}
                      setSelectedSector={setSelectedSector}
                      selectedSector={selectedSector}
                      setUniqueSectors={setUniqueSectors}
                      uniqueSectors={uniqueSectors}
                      selectedCredential={selectedCredential}
                      setSelectedCredential={setSelectedCredential}
                      selectedArea={selectedArea}
                      setSelectedArea={setSelectedArea}
                      selectedPlan={selectedPlan}
                      setSelectedPlan={setSelectedPlan}
                      programs={academicPlans}
                      searchQuery={searchQuery}
                      backgroundColor={"light"}
                    />
                  </div>

                  <div className="container hidden">
                    <div className="flex flex-col ">
                      <span className="flex text-[14px] flex-wrap gap-[12px]">
                        {selectedArea && (
                          <span className="bg-[#00467F] flex gap-[12px] items-center  overflow-hidden text-ellipsis whitespace-nowrap rounded-[4px] px-[12px] py-[8px] text-[16px] text-[white] font-[600]">
                            <button
                              className=""
                              onClick={() => {
                                setSelectedArea("");
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                              >
                                <path
                                  d="M0.412305 0.5L0 0.912888L3.5874 4.50029L0 8.08769L0.412305 8.5L3.99971 4.9126L7.58769 8.5L8 8.08711L4.4126 4.49971L8 0.912305L7.58769 0.500583L4.00058 4.08799L0.412305 0.5Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </button>
                            <span>{selectedArea} </span>
                          </span>
                        )}{" "}
                        {selectedSector && (
                          <span className="bg-[#00467F] flex gap-[12px] items-center  overflow-hidden text-ellipsis whitespace-nowrap rounded-[4px] px-[12px] py-[8px] text-[16px] text-[white] font-[600]">
                            <button
                              className=""
                              onClick={() => {
                                setSelectedSector("");
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                              >
                                <path
                                  d="M0.412305 0.5L0 0.912888L3.5874 4.50029L0 8.08769L0.412305 8.5L3.99971 4.9126L7.58769 8.5L8 8.08711L4.4126 4.49971L8 0.912305L7.58769 0.500583L4.00058 4.08799L0.412305 0.5Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </button>
                            <span>{selectedSector} </span>
                          </span>
                        )}{" "}
                        {selectedPlan && (
                          <span
                            onClick={() => {
                              setSelectedPlan("");
                            }}
                            className="bg-[#00467F] flex gap-[8px] overflow-hidden text-ellipsis whitespace-nowrap items-center rounded-[4px] px-[12px] py-[8px] text-[16px] text-[white] font-[600]"
                          >
                            <button
                              className=""
                              onClick={() => {
                                setSelectedPlan("");
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                              >
                                <path
                                  d="M0.412305 0.5L0 0.912888L3.5874 4.50029L0 8.08769L0.412305 8.5L3.99971 4.9126L7.58769 8.5L8 8.08711L4.4126 4.49971L8 0.912305L7.58769 0.500583L4.00058 4.08799L0.412305 0.5Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </button>
                            <span>{selectedPlan}</span>
                          </span>
                        )}
                        {selectedCredential && (
                          <span
                            onClick={() => {
                              setSelectedCredential("");
                            }}
                            className="cursor-pointer bg-[#00467F] overflow-hidden text-ellipsis whitespace-nowrap flex gap-[8px] items-center rounded-[6px] py-[8px] px-[12px] text-[16px] text-[white] font-[600]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="9"
                              viewBox="0 0 8 9"
                              fill="none"
                            >
                              <path
                                d="M0.412305 0.5L0 0.912888L3.5874 4.50029L0 8.08769L0.412305 8.5L3.99971 4.9126L7.58769 8.5L8 8.08711L4.4126 4.49971L8 0.912305L7.58769 0.500583L4.00058 4.08799L0.412305 0.5Z"
                                fill="white"
                              ></path>
                            </svg>
                            <span>{selectedCredential} </span>
                          </span>
                        )}
                        {searchQuery && (
                          <span
                            onClick={clearSearchQuery}
                            className="bg-[#00467F] flex gap-[8px] overflow-hidden text-ellipsis whitespace-nowrap items-center rounded-[6px] px-[12px] py-[8px] text-[16px] text-[white] font-[600]"
                          >
                            <button className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                              >
                                <path
                                  d="M0.412305 0.5L0 0.912888L3.5874 4.50029L0 8.08769L0.412305 8.5L3.99971 4.9126L7.58769 8.5L8 8.08711L4.4126 4.49971L8 0.912305L7.58769 0.500583L4.00058 4.08799L0.412305 0.5Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </button>
                            <span>{searchQuery}</span>
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block pt-[32px] border-t border-[#f3f3f3] w-full text-center">
                  <Button
                    href="https://kctcs.edu/class-search.aspx"
                    type="tonal-white"
                    width="full"
                    className="inline-block hover:bg-[white] border border-[#f3f3f3] transition ease-in-out duration-250 hover:text-[#00467F] hover:border-[#00467F] px-[32px] rounded-full py-[12px] whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer font-semibold bg-[#f3f3f3] text-[#00467F] text-[16px] text-center"
                  >
                    Online Courses
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:border-l-[1px] border-[#f3f3f3] p-[24px] lg:p-[48px]">
          <ProgramResults
            filteredAcademicPlans={filteredAcademicPlans}
            showLimit={40}
            showCount={true}
            enableViewToggle={true}
            enableAZNavigation={true}
            showViewToggle={true}
          />
        </div>
      </div>
    </>
  );
}

export default Programs;
