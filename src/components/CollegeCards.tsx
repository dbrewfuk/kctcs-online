import React, { useState } from "react";
import { collegeContent } from "./college-content.json";
import { motion, AnimatePresence } from "framer-motion";

function CollegeCards({ contentset }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("Select a College");
  const [contentFade, setContentFade] = useState(false); // State for content fade
  const handleCollegeChange = (college) => {
    setIsVisible(true);
    setSelectedCollege(college);
    setShowOptions(false); // Close the options after selection (optional)
    setContentFade(false); // Trigger fade in after a delay
    // Adjust according to your transition duration
    // Add any other logic you need based on the selected college
  };
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="flex flex-col gap-[64px] py-[96px]">
        <div className="bg-[white]">
          <div className="px-[24px] lg:px-[96px]">
            <div className="flex flex-col gap-[32px] justify-center w-full">
              <h1 className="text-[39.06px] leading-[40px] font-[900] text-[#00467F] text-center">
                Programs that work for You.
              </h1>
              <div className="flex justify-center ">
                <div className="relative">
                  <div
                    className={`cursor-pointer text-ellipsis bg-[#fafafa] white-space-nowrap  text-[17.5px] font-[600]  border border-[#00467F] appearance-none py-[16px] px-[48px] ${
                      selectedCollege ? "text-[#00467F]" : "text-white "
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
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.25 }}
            >
              {selectedCollege && (
                <div>
                  <div className="px-[24px] lg:px-[96px]">
                    {collegeContent[selectedCollege]?.map(
                      (section, sectionIndex) => (
                        <div
                          className="w-full flex flex-col lg:flex-row gap-[32px]"
                          key={sectionIndex}
                        >
                          {section[contentset]?.map(
                            (item, itemIndex) =>
                              item.featured &&
                              item.featured.map((feature, featureIndex) => (
                                <a
                                  href={feature.url}
                                  className="group lg:w-[33%] flex flex-col"
                                  key={itemIndex}
                                >
                                  <div className="">
                                    <div className="aspect-[4/3] w-full overflow-hidden">
                                      <img
                                        className="group-hover:scale-[1.15] transition ease-in-out duration-[250ms] w-full h-full object-cover"
                                        src={feature.img}
                                        alt={feature.title}
                                      />
                                    </div>
                                  </div>
                                  <div className="w-full p-[32px] bg-[#f5f5f5]">
                                    <div className="flex flex-col h-full justify-center align-items-center">
                                      <h1 className="text-[24px] font-[600] text-[#00467F] mb-4">
                                        {feature.title}
                                      </h1>
                                      <p className="text-[18px] text-[#00467F]">
                                        {feature.content}
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
                                </a>
                              )),
                          )}
                        </div>
                      ),
                    )}
                  </div>

                  <div className="px-[24px] lg:px-[96px] mt-[64px]">
                    {collegeContent[selectedCollege]?.map(
                      (section, sectionIndex) => (
                        <div
                          className="w-full flex flex-wrap gap-x-[24px] [&>:first-child]:border-t-[2px] [&>:nth-child(2)]:border-t-[2px] lg:[&>:nth-child(3)]:border-t-[2px] justify-center"
                          key={sectionIndex}
                        >
                          {section[contentset]?.map(
                            (admissionItem, itemIndex) =>
                              admissionItem.resources &&
                              admissionItem.resources.map(
                                (resource, resourceIndex) => (
                                  <div
                                    key={resourceIndex}
                                    className="w-[calc(50%-12px)] lg:w-[calc(33%-12px)]  border-b-[2px] border-[#fdd000]"
                                  >
                                    <a
                                      className="font-[600] relative py-[20px] flex group text-[#00467F] uppercase tracking-[0.35px] text-[17.5px]"
                                      href={resource.url}
                                    >
                                      <span className="transform transition pr-[32px]  ease-in-out duration-[250ms] group-hover:translate-x-[20px] ">
                                        {resource.title}
                                      </span>
                                      <span className="w-[32px] absolute right-0 opacity-[0%] h-[24px] transform translate-x-[-40px] group-hover:translate-x-[0] transition ease-in-out duration-[250ms] group-hover:opacity-[100%]">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                          fill="#00467f"
                                        >
                                          <path d="M31.71 15.295l-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 000-1.41z" />
                                        </svg>
                                      </span>
                                    </a>
                                  </div>
                                ),
                              ),
                          )}
                        </div>
                      ),
                    )}
                    ,
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default CollegeCards;
