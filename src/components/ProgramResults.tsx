import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgramResults = ({
  darkBg,
  filteredAcademicPlans,
  showLimit,
  filters,
  showCount,
  square,
}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [expandedPrograms, setExpandedPrograms] = useState({});
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [selectedCollegeIndex, setSelectedCollegeIndex] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter],
    );
  };

  const toggleExpanded = (index) => {
    setExpandedPrograms((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const toggleDropdown = (index) => {
    setSelectedCollegeIndex((prevIndex) =>
      prevIndex === index ? null : index,
    );
  };

  const handleCollegeChange = (index, name, url, overview) => {
    setSelectedColleges((prevSelectedColleges) => {
      const updatedColleges = [...prevSelectedColleges];
      updatedColleges[index] = { name, url, overview };
      return updatedColleges;
    });
  };

  useEffect(() => {
    // Additional logic can be added here if needed for side effects related to props
  }, [filteredAcademicPlans, showLimit, filters]);

  return (
    <motion.div
      className={`w-full `}
      initial={{ opacity: 0, y: 50 }} // Fade up effect
      animate={{ opacity: 1, y: 0 }} // Fade up effect
      transition={{ duration: 0.25 }}
    >
      <div className="w-full relative ">
        <div className="h-full">
          <div className="container flex flex-col">
            {filters && (
              <div className="flex items-start flex-wrap gap-[12px]">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterChange(filter)}
                    className={`border px-[12px] py-[12px] rounded-[2px] text-[14px] ${
                      selectedFilters.includes(filter)
                        ? "bg-blue-500 text-white"
                        : "bg-white text-blue-500"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
            {/* Results section */}
            {showCount && (
              <span className="text-[#00467F] py-[16px]">
                Showing {filteredAcademicPlans.length} Programs
              </span>
            )}

            <div className="flex flex-col lg:flex-row items-start flex-wrap gap-[24px] group">
              {filteredAcademicPlans
                .filter(
                  (plan) =>
                    selectedFilters.length === 0 ||
                    selectedFilters.includes(plan.name),
                )
                .slice(0, showLimit)
                .sort((a, b) => {
                  // Check if a and b are defined before accessing their properties
                  if (a && b && a.name && b.name) {
                    return a.name.localeCompare(b.name);
                  } else {
                    // Handle the case where either a or b (or their names) is undefined
                    return 0; // or any other appropriate value
                  }
                })
                .map((plan, index) => (
                  <div
                    key={index}
                    className={`hover:opacity-100 w-[365px]  transition-all  ease-in-out duration-[200ms] ${expandedPrograms[index] ? "shadow-[0px_4px_4px_rgba(0,0,0,0.15)] transform translate-y-[-4px] z-[9]" : ""} ${index === filteredAcademicPlans.length - 1 ? "" : ""} ${square ? "w-[480px]" : ""}`}
                  >
                    {/* Render each unique academic plan */}

                    <div
                      className={`px-[24px] lg:px-[32px] py-[32px] transition-all text-[#00467F]  group-hover:hover:opacity-[1] transition ease duration-[200ms] cursor-pointer ${darkBg === true ? "bg-[white] lg:bg-[#f5f5f5]" : "bg-[#f5f5f5]"} `}
                    >
                      <div className="flex flex-col gap-[20px] h-full justify-between relative">
                        <div
                          className="flex justify-between cursor-pointer"
                          onClick={() => toggleExpanded(index)}
                        >
                          <div className="flex flex-col  gap-[8px]">
                            <h3 className="text-[25px]  leading-[32px]  font-semibold pr-[48px]">
                              <span>{plan.name}</span>
                            </h3>
                            <span className="uppercase tracking-[0.75px] font-[600] text-[14px]">
                              {plan.credentials_awarded}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col ">
                          <div className="w-full">
                            <p className="text-[16px] mb-[24px]">
                              Sorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nunc vulputate libero et velit interdum, ac
                              aliquet odio mattis. Sorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Nunc vulputate libero
                              et velit interdum, ac aliquet odio mattis. Sorem
                              ipsum dolor sit amet, consectetur adipiscing elit.
                              Nunc vulputate libero et velit interdum, ac
                              aliquet odio mattis.
                            </p>
                            <p>{selectedColleges[index]?.overview}</p>
                          </div>
                          <div className="w-full flex flex-col gap-[24px]">
                            {plan.colleges.length > 0 ? (
                              <div className="w-full">
                                <div className="relative inline-block w-full">
                                  <div
                                    className={`border border-[2px] w-full gap-[8px] text-[17.5px] items-center border-[#00467F] font-[600] py-[12px] px-[16px] whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer  text-[#00467F]  ${selectedColleges[index] ? "bg-white" : ""}`}
                                    onClick={() => {
                                      toggleDropdown(index);
                                    }}
                                  >
                                    <div className="flex items-center">
                                      <span className="inline-block w-full overflow-hidden text-ellipsis">
                                        {selectedColleges[index]?.name
                                          ? selectedColleges[index]?.name
                                          : `Available at ${plan.colleges.length}  College${plan.colleges.length > 1 ? "s" : ""}`}
                                      </span>
                                      <span>
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
                                          ></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                  {selectedCollegeIndex === index && (
                                    <div className="p-4 absolute bg-white border shadow flex flex-col items-center gap-2 z-10">
                                      {plan.colleges.map(
                                        (college, collegeIndex) => (
                                          <div
                                            className="font-semibold text-[#00467F] cursor-pointer"
                                            key={collegeIndex}
                                            onClick={() => {
                                              handleCollegeChange(
                                                index,
                                                college.name,
                                                college.url,
                                                college.overview,
                                              );
                                              toggleDropdown(index);
                                            }}
                                          >
                                            {college.name}
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <button
                                type="button"
                                className=" bg-gray-300 w-100 mb-2"
                                disabled
                              >
                                No Colleges Available
                              </button>
                            )}
                            <div>
                              <a
                                className="text-[#00467F] inline-block w-auto font-semibold border-b border-[#00467F]"
                                href="https://catalog.kctcs.edu/programs-of-study/aas/visual-communication-multimedia/web-design-certificate/"
                              >
                                View in Course Catalog
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramResults;
