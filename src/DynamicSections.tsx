import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/testimonial";
import HeroSearch from "./components/hero-search";
import HeroRfi from "./components/hero-rfi";
import Header from "./components/header";
import VideoBlockSlider from "./components/video-block-slider";
import { collegeContent } from "./college-content.json";

function DynamicSections({ title, supportingText, contentset }) {
  const [selectedCollege, setSelectedCollege] = useState("Select a College");

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  return (
    <>
      <div className="relative">
        <div className="py-[64px] lg:py-[96px] bg-blue-900">
          <div className="container mx-auto px-8">
            <h1 className="text-6xl font-black text-white mb-5">{title}</h1>
            <p className="text-3xl text-white mb-[48px]">{supportingText}</p>
            <div className="flex flex-row gap-4 lg:w-1/2">
              <div className="grow text-xl  shrink-0 basis-0 max-w-[18rem] text-ellipsis white-space-nowrap dropdown-button">
                <select
                  className={`w-full rounded-full appearance-none py-3 px-6 font-semibold border ${
                    selectedCollege
                      ? "bg-white text-blue-900"
                      : "text-white bg-blue-900"
                  }`}
                  value={selectedCollege}
                  onChange={handleCollegeChange}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_278_3093)">
                      <path
                        d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
                        fill="#005CB8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_278_3093">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <option value="Select a College">Select a College</option>
                  {Object.keys(collegeContent).map((college) => (
                    <option key={college} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grow shrink-0 text-xl basis-0 max-w-[18rem] text-ellipsis white-space-nowrap">
                {selectedCollege !== "Select a College" && (
                  <a
                    href={`https://${collegeContent[selectedCollege][0]?.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full rounded-full  inline-block transition ease-in-out text-center cursor-pointer width-auto bg-blue-900 text-white py-3 font-semibold px-6 hover:bg-white hover:text-blue-900 hover:border-blue-900">
                      Visit Website
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-25 translate-y-full -translate-x-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="142"
            height="56"
            viewBox="0 0 142 71"
            fill="#005CB8"
            className="fill-blue-900"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.578613 0L71 70.4214L141.421 0H0.578613Z"
              fill="#005CB8"
            />
          </svg>
        </div>
      </div>

      {selectedCollege !== "Select a College" && (
        <div>
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
                        <h1 className="text-[36px] leading-[120%] lg:text-5xl font-black text-blue-900 mb-4">
                          {item.title}
                        </h1>
                        <p className="text-xl text-blue-900 mb-8">
                          {item.content}
                        </p>
                        <div className="text-center lg:text-left">
                          <div className="rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-blue-900 text-white py-3 font-semibold px-8 hover:bg-white hover:text-blue-900 hover:border-blue-900">
                            Learn More
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
    </>
  );
}

export default DynamicSections;
