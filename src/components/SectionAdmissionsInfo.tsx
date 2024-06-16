import React, { useState, useEffect, useRef } from "react";
import { collegeContent } from "./content.json";
import Button from "./Button";

function AdmissionsInfo() {
  const [selectedTab, setSelectedTab] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("Select a College");

  const [selectedCollegeVideo, setSelectedCollegeVideo] = useState("");
  const dropdownRefs = useRef([]);

  const focusFirstOption = (dropdownIndex) => {
    if (dropdownRefs.current[dropdownIndex]) {
      const firstItem =
        dropdownRefs.current[dropdownIndex].querySelector('[role="option"]');
      if (firstItem) firstItem.focus();
    }
  };

  useEffect(() => {
    if (showOptions) {
      setTimeout(() => {
        focusFirstOption(selectedTab);
      }, 0);
    }
  }, [showOptions, selectedTab]);

  const handleCollegeChange = (college) => {
    setSelectedCollege(college);
    setShowOptions(false);
  };

  const handleKeyDown = (e, dropdownIndex) => {
    if (e.key === "Escape") {
      setShowOptions(false);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const options = Array.from(
        dropdownRefs.current[dropdownIndex].querySelectorAll('[role="option"]'),
      );
      const currentIndex = options.indexOf(document.activeElement);
      let nextIndex;
      if (e.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % options.length;
      } else {
        nextIndex = (currentIndex - 1 + options.length) % options.length;
      }
      options[nextIndex].focus();
    }
  };

  const tabs = [
    {
      name: "Degree Seeking",
      description:
        "KCTCS Online is dedicated to assisting you in advancing your educational aspirations through exceptional, adaptable, and cost-effective programs.",
      url: "https://77ykxy-5173.csb.app/explore-programs.html?area=&credentialTypes=Degree",
      image:
        "https://southcentral.kctcs.edu/about/media/images/career-services-contact-us-skctc.jpg",
      stat: "50+ Degree Plans",
      buttonText: "Degree Plans",
    },
    {
      name: "Non-Degree Seeking",
      description:
        "Seeking professional development and skill enhancement opportunities without committing to a traditional degree program? Look no further — we've got you covered.",
      url: "https://77ykxy-5173.csb.app/explore-programs.html?area=&credentialTypes=Certificate%2CDiploma",
      image: "/assets/admissions.jpeg",
      stat: "100+ Program Options",
      buttonText: "Non-degree Programs",
    },
    {
      name: "First Time Student",
      description:
        "Never attended college before? This is where you start. You've got this!",
      url: "",
      admissionsPage: "admissions/information-for/first-time-freshman.aspx",
      image:
        "https://bluegrass.kctcs.edu/admissions/media/images/info-for-freshman.jpg",
      stat: "",
      buttonText: "Learn More",
    },
    {
      name: "HS Dual Credit Students",
      description:
        "Want to earn college credit while you’re still in high school? We've got you covered.",
      url: "",
      admissionsPage: "/dual-credit/index.aspx",
      image:
        "https://bluegrass.kctcs.edu/admissions/media/images/info-for-hs-dual-credit-students.jpg",
      stat: "",
    },
    {
      name: "Returning Students",
      description: "You look familiar! We look forward to welcoming you back.",
      url: "",
      admissionsPage: "/admissions/information-for/returning-students.aspx",
      image:
        "https://bluegrass.kctcs.edu/admissions/media/images/info-for-returning-students.jpg",
      stat: "",
    },
    {
      name: "Veterans",
      description:
        "We salute you for your service! BCTC is excited to help our service men, women and veterans reach their goals.",
      url: "",
      admissionsPage: "education-training/military-veterans/index.aspx",
      image:
        "https://bluegrass.kctcs.edu/admissions/media/images/info-for-veterans.jpg",
      stat: "",
    },
    {
      name: "Adult Learners",
      description:
        "Whether you've been out of high school for four years or 40, we can help you build a better future.",
      url: "https://kctcs.edu/education-training/military-veterans/index.aspx",
      admissionsPage: "admissions/information-for/adult-learners.aspx",
      image:
        "https://bluegrass.kctcs.edu/admissions/media/images/info-for-adult-learners.jpg",
      stat: "",
      buttonText: "Learn More",
    },
    {
      name: "Students with GEDs",
      description:
        "Do you have a GED? You'll fit right in at BCTC. Here's how to continue your education by joining our family.",
      url: "",
      admissionsPage: "admissions/information-for/students-with-ged.aspx",
      image:
        "https://bluegrass.kctcs.edu/admissions/media/images/info-for-transfer-students.jpg",
      stat: "",
    },
  ];

  return (
    <div>
      <header className="pt-[0px] lg:pb-[96px]">
        {/* ... (Your header content) */}
      </header>
      <main className="relative px-[24px] w-full container mx-auto px-[24px] lg:px-0 pb-[64px] pt-[48px] lg:pt-[56px] border-[#f0f0f0] lg:pb-[96px] lg:mb-[56px]">
        <section className="flex flex-row justify-center items-center gap-[80px] w-full">
          <div className="flex w-full lg:w-[50%] flex-col order-2">
            <h3 className="text-[31px] leading-[32px] lg:text-[39px] lg:leading-[44px] mb-[16px] lg:mb-[32px] font-[800] text-[#00467F]">
              Programs that fit your needs.
            </h3>
            <div className="flex flex-row flex-wrap">
              {tabs.slice(0, 2).map((tab, index) => (
                <div
                  key={index}
                  className={`w-full relative group border-l-[1px] border-[#FBBF24] border-b border-b-[#f3f3f3] last:border-b-[0] transition ease-in-out cursor-pointer`}
                  onClick={() => setSelectedTab(index) && setShowOptions(false)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedTab(index)}
                >
                  <div
                    className={`flex flex-col transition-all ease-in-out text-[#00467F] duration-[250ms] w-full h-full justify-center p-[20px] ${
                      selectedTab === index
                        ? "lg:border-l-[6px] bg-[#f5f5f5] border-[#FBBF24]"
                        : ""
                    }`}
                  >
                    <div className="flex gap-[16px] items-center">
                      <div className="max-w-[18px] min-w-[18px]">
                        {selectedTab !== index ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            fill="#00467f"
                            className="w-full"
                            aria-hidden="true"
                          >
                            <path
                              d="M7.706 18v-7.657H.5V7.62h7.206V0h2.623v7.621H17.5v2.722h-7.17V18z"
                              fillRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            fill="#00467f"
                            aria-hidden="true"
                          >
                            <path
                              d="M.5 10.343V7.62h17v2.722z"
                              fillRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <h1 className="text-[20px] whitespace-wrap font-semibold">
                        {tab.name}
                      </h1>
                    </div>
                    {selectedTab === index && (
                      <div>
                        <p className="text-[16px] text-[#00467F] mt-[8px]">
                          {tab.description}
                        </p>
                        {tab.url && (
                          <div className="text-center hidden lg:text-left mt-[24px]">
                            <a
                              href={tab.url}
                              className="w-full rounded-full text-[17.5px] flex gap-2 group items-center hover:transform transition inline-block transition ease-in-out text-center cursor-pointer width-auto text-[#00467F] font-semibold"
                            >
                              {tab.buttonText}
                              <span className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="currentColor"
                                  className="bi bi-arrow-right"
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:w-[50%] lg:flex flex-row items-center justify-center flex-wrap gap-[24px]">
            {tabs.slice(0, 2).map((item, index) => (
              <div
                className={`flex w-[calc(50%-12px)] aspect-square flex-row gap-[24px]  overflow-hidden cursor-pointer ${selectedTab === index ? "shadow-[0_4px_8px_1px_rgba(0,0,0,0.15)]" : ""}`}
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedTab(index) && setShowOptions(false)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedTab(index)}
              >
                <div
                  className={`cursor-pointer w-full h-full relative overflow-hidden transition ease-in-out duration-[250ms] ${
                    selectedTab === index
                      ? "bg-[#00467F] border-[#FBBF24] border-[11px] shadow-[0_4px_8px_1px_rgba(0,0,0,0.15)]"
                      : "bg-[#FBBF24]"
                  }`}
                >
                  <img
                    className={`w-full h-full object-cover transition ease-in-out duration-[250ms] absolute transform top-0 left-0 ${
                      selectedTab === index ? "scale-[1.15]" : "scale-[1]"
                    }`}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="absolute p-[24px] flex bottom-0 w-full h-full items-center justify-center">
                    {item.stat && (
                      <div className="flex flex-col gap-[12px]">
                        <div
                          className={`p-[12px] rounded-[12px] text-center font-[600] text-[#00467F] ${
                            selectedTab === index
                              ? "bg-[#00467F] text-[white] bg-opacity-[1] "
                              : "bg-[white] bg-opacity-[1] backdrop-blur-[20px] "
                          }`}
                        >
                          {item.stat}
                        </div>
                        <div
                          className={`transform absolute bottom-[48px] w-full flex justify-center left-[0] transition ease-in-out duration-[350ms] ${selectedTab === index ? "translate-y-[0] opacity-[1]" : "translate-y-[25%] opacity-[0]"}`}
                        >
                          <Button
                            type="primary-dark"
                            size="small"
                            depth="medium"
                          >
                            {item.buttonText}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-row items-center justify-center gap-[80px] lg:mt-[56px] w-full">
          <div className="flex w-full lg:w-[50%] flex-col">
            <div className="flex flex-row items-center flex-wrap">
              <h3 className="text-[31px] leading-[32px] w-full lg:text-[39px] mt-[32px] lg:mt-[0] lg:leading-[44px] mb-[16px] lg:mb-[32px] font-[800] text-[#00467F]">
                What Kind of Student Are You?
              </h3>
              {tabs.slice(2, 6).map((tab, index) => {
                const adjustedIndex = index + 2; // Adjust the index for the second set of tabs
                return (
                  <div
                    key={adjustedIndex}
                    className={`w-full relative group border-l-[1px] border-[#FBBF24] border-b border-b-[#f3f3f3] last:border-b-[0] transition ease-in-out cursor-pointer`}
                    onClick={() =>
                      setSelectedTab(adjustedIndex) && setShowOptions(false)
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setSelectedTab(adjustedIndex)
                    }
                  >
                    <div
                      className={`flex flex-col transition-all ease-in-out text-[#00467F] duration-[250ms] w-full h-full justify-center p-[20px] ${
                        selectedTab === adjustedIndex
                          ? "lg:border-l-[6px] bg-[#f5f5f5] border-[#FBBF24]"
                          : ""
                      }`}
                    >
                      <div className="flex gap-[16px] items-center">
                        <div className="max-w-[18px] min-w-[18px]">
                          {selectedTab !== adjustedIndex ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 18"
                              fill="#00467f"
                              className="w-full"
                              aria-hidden="true"
                            >
                              <path
                                d="M7.706 18v-7.657H.5V7.62h7.206V0h2.623v7.621H17.5v2.722h-7.17V18z"
                                fillRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 18"
                              fill="#00467f"
                              aria-hidden="true"
                            >
                              <path
                                d="M.5 10.343V7.62h17v2.722z"
                                fillRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <h1 className="text-[20px] whitespace-wrap font-semibold">
                          {tab.name}
                        </h1>
                      </div>
                      {selectedTab === adjustedIndex && (
                        <div>
                          <p className="text-[16px] text-[#00467F] mt-[8px]">
                            {tab.description}
                          </p>
                          <div
                            className="flex lg:hidden w-full mt-[32px]
                          flex-row gap-[24px]
                          shadow-[0_4px_8px_1px_rgba(0,0,0,0.15)]
                          cursor-pointer"
                            key={adjustedIndex}
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              setSelectedTab(adjustedIndex) &&
                              setShowOptions(false)
                            }
                            onKeyDown={(e) =>
                              e.key === "Enter" && setSelectedTab(adjustedIndex)
                            }
                          >
                            <div
                              className={`aspect-video lg:aspect-[1/1] cursor-pointer overflow-hidden w-full relative transition ease-in-out duration-[250ms] ${
                                selectedTab === adjustedIndex
                                  ? "bg-[#00467F] border-[#FBBF24] shadow-[0_4px_8px_1px_rgba(0,0,0,0.15)]"
                                  : "bg-[#FBBF24]"
                              }`}
                            >
                              <div className="overflow-hidden relative h-full w-full rounded-[12px]">
                                <img
                                  className={`w-full h-full rounded-[12px] object-cover transition ease-in-out duration-[250ms] absolute transform top-0 left-0 ${
                                    selectedTab === adjustedIndex
                                      ? "scale-[1.15]"
                                      : "scale-[1]"
                                  }`}
                                  src={tab.image}
                                  alt={tab.name}
                                />
                              </div>
                              <div className="absolute top-0 z-[2] w-full h-full">
                                <div className="absolute p-[24px] flex h-full justify-center items-center w-full">
                                  {selectedTab === adjustedIndex && (
                                    <div
                                      className={`cursor-pointer text-[16px] text-[#00467F] font-[600] rounded-full bg-[white] bg-opacity-[100%] hover:bg-opacity-[100%] transition ease-in-out duration-[250] backdrop-blur-[20px] appearance-none py-[12px] pl-[24px] pr-[16px] ${
                                        selectedCollege ? "" : " "
                                      }`}
                                      onClick={() => {
                                        setShowOptions(!showOptions);
                                        setTimeout(() => {
                                          focusFirstOption(adjustedIndex);
                                        }, 0);
                                      }}
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          setShowOptions(!showOptions);
                                          setTimeout(() => {
                                            focusFirstOption(adjustedIndex);
                                          }, 0);
                                        }
                                      }}
                                    >
                                      <div
                                        className={`selected-option flex gap-[8px] justify-between items-center ${
                                          selectedCollege ? "selected" : ""
                                        }`}
                                      >
                                        <span className="truncate max-w-[10em]">
                                          {selectedCollege ||
                                            "Select a College"}
                                        </span>
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 -960 960 960"
                                            width="24px"
                                            fill="#00467F"
                                            aria-hidden="true"
                                          >
                                            <path d="M480-371.69 267.69-584 296-612.31l184 184 184-184L692.31-584 480-371.69Z" />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {showOptions === true &&
                                  selectedTab === adjustedIndex && (
                                    <div
                                      className="absolute top-[60%] max-w-[200px] max-h-[200px] top-[16px] overflow-scroll m-auto z-10 w-full left-[50%] transform translate-x-[-50%] rounded-[12px] p-[16px] shadow-lg bg-white bg-opacity-[100%] backdrop-blur-[20px] ring-1 ring-black ring-opacity-5"
                                      role="listbox"
                                      aria-activedescendant={selectedCollege}
                                      ref={(el) => {
                                        dropdownRefs.current[adjustedIndex] =
                                          el;
                                      }}
                                      onKeyDown={(e) => {
                                        handleKeyDown(e, adjustedIndex);
                                      }}
                                    >
                                      <div
                                        className="flex flex-col"
                                        role="presentation"
                                      >
                                        {Object.keys(collegeContent).map(
                                          (college) => (
                                            <a
                                              key={college}
                                              id={college}
                                              href={`https://${college
                                                .replace(/\s+/g, "")
                                                .toLowerCase()}.kctcs.edu/${tab.admissionsPage}`}
                                              role="option"
                                              aria-selected={
                                                selectedCollege === college
                                              }
                                              className={`text-[16px] w-full font-[600] cursor-pointer text-[#00467F] hover:bg-gray-100 rounded-[4px] group flex items-center px-[16px] py-[8px] ${
                                                selectedCollege === college
                                                  ? "bg-gray-100"
                                                  : ""
                                              }`}
                                              tabIndex={0}
                                              onClick={() =>
                                                handleCollegeChange(college)
                                              }
                                              onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                  handleCollegeChange(college);
                                                } else if (e.key === "Escape") {
                                                  setShowOptions(false);
                                                } else if (
                                                  e.key === "ArrowDown" ||
                                                  e.key === "ArrowUp"
                                                ) {
                                                  const options = Array.from(
                                                    dropdownRefs.current[
                                                      adjustedIndex
                                                    ].querySelectorAll(
                                                      '[role="option"]',
                                                    ),
                                                  );
                                                  const currentIndex =
                                                    options.indexOf(
                                                      document.activeElement,
                                                    );
                                                  let nextIndex;
                                                  if (e.key === "ArrowDown") {
                                                    nextIndex =
                                                      (currentIndex + 1) %
                                                      options.length;
                                                  } else {
                                                    nextIndex =
                                                      (currentIndex -
                                                        1 +
                                                        options.length) %
                                                      options.length;
                                                  }
                                                  options[nextIndex].focus();
                                                }
                                              }}
                                            >
                                              {college}
                                            </a>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:w-[50%] relative aspect-square lg:flex flex-row justify-center flex-wrap gap-[24px]">
            {tabs.slice(2, 6).map((item, index) => {
              const adjustedIndex = index + 2; // Adjust the index for the second set of tabs
              return (
                <div
                  className={`flex w-[calc(50%-12px)] aspect-square flex-row gap-[24px]  cursor-pointer ${selectedTab === adjustedIndex ? "shadow-[0_4px_8px_1px_rgba(0,0,0,0.15)]" : ""}`}
                  key={adjustedIndex}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setSelectedTab(adjustedIndex) && setShowOptions(false)
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedTab(adjustedIndex)
                  }
                >
                  <div
                    className={`aspect-[1/1] cursor-pointer w-full  relative transition ease-in-out duration-[250ms] ${
                      selectedTab === adjustedIndex
                        ? "bg-[#00467F] border-[#FBBF24] border-[11px] shadow-[0_4px_8px_1px_rgba(0,0,0,0.15)]"
                        : "bg-[#FBBF24]"
                    }`}
                  >
                    <div className="w-full h-full aspect-square overflow-hidden relative ">
                      <img
                        className={`w-full h-full object-cover transition ease-in-out duration-[250ms] absolute transform top-0 left-0 ${
                          selectedTab === adjustedIndex
                            ? "scale-[1.15]"
                            : "scale-[1]"
                        }`}
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="absolute top-0 w-full h-full z-10">
                      <div className="absolute p-[16px] flex h-full items-center justify-center w-full">
                        {selectedTab === adjustedIndex && (
                          <div
                            className={`cursor-pointer text-[16px] font-[600] rounded-full bg-[white] transition ease-in-out duration-[250] backdrop-blur-[20px] appearance-none py-[12px] pl-[24px] pr-[16px] ${
                              (selectedCollege !== "Select a College",
                              showOptions && selectedTab === adjustedIndex
                                ? " bg-opacity-[100%] text-[#00467F] "
                                : "bg-opacity-[100%] text-[#00467F] ")
                            }`}
                            onClick={() => {
                              setShowOptions(!showOptions);
                              setTimeout(() => {
                                focusFirstOption(adjustedIndex);
                              }, 0);
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setShowOptions(!showOptions);
                                setTimeout(() => {
                                  focusFirstOption(adjustedIndex);
                                }, 0);
                              }
                            }}
                          >
                            <div
                              className={`selected-option flex gap-[8px] justify-between items-center ${
                                selectedCollege ? "selected" : ""
                              }`}
                            >
                              <span className="truncate max-w-[10em]">
                                {selectedCollege || "Select a College"}
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 -960 960 960"
                                  width="24px"
                                  fill={`${(selectedCollege !== "Select a College", showOptions && selectedTab === adjustedIndex ? "#00467F" : "#00467F")}`}
                                  aria-hidden="true"
                                >
                                  <path d="M480-371.69 267.69-584 296-612.31l184 184 184-184L692.31-584 480-371.69Z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      {showOptions && selectedTab === adjustedIndex && (
                        <div
                          className="absolute max-w-[200px] max-h-[200px] top-[184px] overflow-scroll m-auto z-10 w-full left-[50%] transform translate-x-[-50%] rounded-[8px] p-[12px] shadow-lg bg-white bg-opacity-[100%] backdrop-blur-[20px] ring-1 ring-black ring-opacity-5"
                          role="listbox"
                          aria-activedescendant={selectedCollege}
                          ref={(el) => {
                            dropdownRefs.current[adjustedIndex] = el;
                          }}
                          onKeyDown={(e) => {
                            handleKeyDown(e, adjustedIndex);
                          }}
                        >
                          <div className="flex flex-col" role="presentation">
                            {Object.keys(collegeContent).map((college) => (
                              <a
                                key={college}
                                id={college}
                                href={`https://${college
                                  .replace(/\s+/g, "")
                                  .toLowerCase()}.kctcs.edu/${item.admissionsPage}`}
                                role="option"
                                aria-selected={selectedCollege === college}
                                className={`text-[16px] w-full font-[600] text-center justify-center cursor-pointer text-[#00467F] hover:bg-gray-100 rounded-[4px] group flex items-center px-[16px] py-[8px] ${
                                  selectedCollege === college
                                    ? "bg-gray-100"
                                    : ""
                                }`}
                                tabIndex={0}
                                onClick={() => handleCollegeChange(college)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleCollegeChange(college);
                                  } else if (e.key === "Escape") {
                                    setShowOptions(false);
                                  } else if (
                                    e.key === "ArrowDown" ||
                                    e.key === "ArrowUp"
                                  ) {
                                    const options = Array.from(
                                      dropdownRefs.current[
                                        adjustedIndex
                                      ].querySelectorAll('[role="option"]'),
                                    );
                                    const currentIndex = options.indexOf(
                                      document.activeElement,
                                    );
                                    let nextIndex;
                                    if (e.key === "ArrowDown") {
                                      nextIndex =
                                        (currentIndex + 1) % options.length;
                                    } else {
                                      nextIndex =
                                        (currentIndex - 1 + options.length) %
                                        options.length;
                                    }
                                    options[nextIndex].focus();
                                  }
                                }}
                              >
                                {college}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex justify-center mt-[72px]">
          <Button
            label="Explore Admissions"
            type="primary"
            href="./admissions.aspx"
          />
        </div>
      </main>
    </div>
  );
}

export default AdmissionsInfo;
