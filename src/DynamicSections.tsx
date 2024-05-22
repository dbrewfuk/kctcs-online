import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/testimonial";
import HeroSearch from "./components/hero-search";
import HeroRfi from "./components/hero-rfi";
import Header from "./components/header";
import { collegeContent } from "./components/college-content.json";

function DynamicSections({ title, supportingText, contentset }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("Select a College");
  const [contentFade, setContentFade] = useState(false); // State for content fade
  const history = useHistory();

  const handleCollegeChange = (college) => {
    setContentFade(true); // Trigger fade out
    setTimeout(() => {
      setSelectedCollege(college);
      setShowOptions(false); // Close the options after selection (optional)
      setContentFade(false); // Trigger fade in after a delay
    }, 500); // Adjust according to your transition duration
    // Add any other logic you need based on the selected college
  };

  return (
    <>
      <div>
        <div className="relative">
          <div className="py-[64px] lg:py-[96px] bg-blue-900">
            <div className="container mx-auto px-8">
              <h1 className="text-6xl font-black text-white mb-5">{title}</h1>
              <p className="text-[24px] max-w-[720px] text-white mb-[32px]">
                {supportingText}
              </p>
              <div className="flex flex-row gap-4 lg:w-1/2">
                <div className="grow text-[20px] max-w-[18rem] shrink-0 basis-0 text-ellipsis white-space-nowrap dropdown-button">
                  <div className="relative w-full inline-block">
                    <div
                      className={`w-full cursor-pointer border border-[#00467F] appearance-none py-[12px] px-[32px] font-semibold ${
                        selectedCollege
                          ? "bg-white text-[#00467F]"
                          : "text-white bg-[#00467F]"
                      }`}
                      onClick={() => setShowOptions(!showOptions)}
                    >
                      <div
                        className={`selected-option flex justify-between items-center ${
                          selectedCollege ? "selected" : ""
                        }`}
                      >
                        <span className="truncate max-w-[10em]">
                          {selectedCollege || "Select a College"}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="dropdown-icon ml-2"
                        >
                          <path
                            d="M16.2207 24.8275L0 9.15857L1.54483 7.61374L16.1103 21.8482L30.4552 7.17236L32 8.71719L16.2207 24.8275Z"
                            fill="#00467F"
                          />
                        </svg>
                      </div>
                      {showOptions && (
                        <div className="absolute z-10 mt-2 w-full left-0 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="">
                            {Object.keys(collegeContent).map((college) => (
                              <div
                                key={college}
                                className="text-[16px] cursor-pointer hover:bg-gray-100 group flex items-center px-[16px] py-[8px]"
                                onClick={() => handleCollegeChange(college)}
                              >
                                {college}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grow shrink-0 text-[20px] basis-0 max-w-[18rem] text-ellipsis white-space-nowrap">
                  {selectedCollege !== "Select a College" && (
                    <a
                      href={`https://${collegeContent[selectedCollege][0]?.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-full rounded-full flex gap-2 group items-center hover:transform transition inline-block transition ease-in-out text-center cursor-pointer width-auto bg-blue-900 text-white py-3 font-semibold px-6 ">
                        Visit Website
                        <span className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition">
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedCollege !== "Select a College" && (
          <div className={`fade-${contentFade ? "out" : "in"}`}>
            <div className="flex flex-col">
              {collegeContent[selectedCollege]?.map((section, sectionIndex) => (
                <div className="w-full" key={sectionIndex}>
                  {section[contentset]?.map((item, itemIndex) => (
                    <div className="flex flex-col lg:flex-row" key={itemIndex}>
                      <div
                        className={`${
                          itemIndex % 2 === 0
                            ? "w-full lg:w-1/2 lg:order-2"
                            : "w-full lg:w-1/2"
                        }`}
                      >
                        <div className="aspect-[4/3]">
                          <img
                            className="w-full h-full object-cover"
                            src={item.img}
                            alt={item.title}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <div className="p-8 lg:py-16 lg:pl-[96px] lg:pr-[96px] flex flex-col h-full justify-center align-items-center">
                          <h1 className="text-[36px] leading-[120%] lg:text-5xl font-[800] text-[#00467F] mb-4">
                            {item.title}
                          </h1>
                          <p className="text-[24px] text-[#00467F] mb-8">
                            {item.content}
                          </p>
                          <div className="text-center lg:text-left">
                            <div className="w-full rounded-full text-[20px] flex gap-2 group items-center hover:transform transition inline-block transition ease-in-out text-center cursor-pointer width-auto text-[#00467F] py-3 font-semibold">
                              Learn More
                              <span className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition">
                                <svg
                                  className=""
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="currentColor"
                                  className="bi bi-arrow-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DynamicSections;
