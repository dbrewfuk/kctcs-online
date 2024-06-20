import React, { useState } from "react";
import { motion } from "framer-motion";

const ProgramResults = ({
  darkBg,
  filteredAcademicPlans,
  showCount,
  square,
  minWidth,
  showViewToggle,
}) => {
  const [isGridLayout, setIsGridLayout] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [expandedPrograms, setExpandedPrograms] = useState({});

  const toggleLayout = () => {
    setIsGridLayout(!isGridLayout);
  };

  const toggleDropdown = (index) => {
    setExpandedPrograms((prevExpanded) => {
      // Close all toggles first
      const newExpanded = Object.keys(prevExpanded).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Open the selected toggle
      newExpanded[index] = !prevExpanded[index];

      return newExpanded;
    });
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="w-full relative">
        <div className="h-full">
          <div className="container flex flex-col">
            <div className="flex w-full items-center justify-between">
              {showCount && (
                <span className="text-[#00467F] py-[24px]" aria-live="polite">
                  Showing {filteredAcademicPlans.length} Programs
                </span>
              )}
              {showViewToggle && (
                <button
                  onClick={toggleLayout}
                  className="toggle-button flex gap-[10px]"
                  aria-label={`Switch to ${isGridLayout ? "list" : "grid"} view`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition ease-in-out duration-[250ms]"
                  >
                    <mask
                      id="mask0_3_88"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3_88)">
                      <path
                        d="M4 11V4H11V11H4ZM4 20V13H11V20H4ZM13 11V4H20V11H13ZM13 20V13H20V20H13Z"
                        fill={`${!isGridLayout ? "#00467F" : "#f0f0f0"}`}
                      />
                    </g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition ease-in-out duration-[250ms]"
                  >
                    <mask
                      id="mask0_5_104"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_5_104)">
                      <path
                        d="M5.6155 10.6345C5.15517 10.6345 4.77083 10.4803 4.4625 10.172C4.15417 9.86367 4 9.47942 4 9.01925V5.6155C4 5.15517 4.15417 4.77083 4.4625 4.4625C4.77083 4.15417 5.15517 4 5.6155 4H18.3845C18.8448 4 19.2292 4.15417 19.5375 4.4625C19.8458 4.77083 20 5.15517 20 5.6155V9.01925C20 9.47942 19.8458 9.86367 19.5375 10.172C19.2292 10.4803 18.8448 10.6345 18.3845 10.6345H5.6155ZM5.6155 20C5.15517 20 4.77083 19.8458 4.4625 19.5375C4.15417 19.2292 4 18.8448 4 18.3845V15C4 14.5397 4.15417 14.1553 4.4625 13.847C4.77083 13.5387 5.15517 13.3845 5.6155 13.3845H18.3845C18.8448 13.3845 19.2292 13.5387 19.5375 13.847C19.8458 14.1553 20 14.5397 20 15V18.3845C20 18.8448 19.8458 19.2292 19.5375 19.5375C19.2292 19.8458 18.8448 20 18.3845 20H5.6155Z"
                        fill={`${isGridLayout ? "#00467F" : "#f0f0f0"}`}
                      />
                    </g>
                  </svg>
                </button>
              )}
            </div>
            <div
              className={`flex flex-col lg:flex-row flex-wrap gap-[24px] ${isGridLayout ? "grid" : "list"}`}
              role="list"
              aria-label="Programs"
            >
              {filteredAcademicPlans
                .filter(
                  (plan) =>
                    selectedFilters.length === 0 ||
                    selectedFilters.includes(plan.name),
                )
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((plan, index) => (
                  <div
                    key={index}
                    role="listitem"
                    className={`hover:opacity-100 z-[1] transition-all w-full ease-in-out duration-[200ms] ${isGridLayout ? "w-full" : "lg:w-[calc(33%-13px)]"} ${
                      expandedPrograms[index]
                        ? "transform translate-y-[-4px] shadow-[0px_4px_8px_rgba(0, 0, 0, 0.25)] z-[9]"
                        : ""
                    } ${darkBg ? "bg-[white] lg:bg-[#f5f5f5]" : "bg-[#f5f5f5]"} ${
                      square ? "aspect-square lg:w-[calc(50%-12px)]" : ""
                    } ${minWidth ? `min-w-[${minWidth}px]` : ""}`}
                    tabIndex={0} // Make the div focusable
                  >
                    <div
                      className="px-[24px] lg:px-[32px] h-full py-[32px] transition-all text-[#00467F] group-hover:opacity-[1] transition ease duration-[200ms] cursor-pointer"
                      aria-expanded={expandedPrograms[index] ? "true" : "false"}
                      onClick={() => toggleDropdown(index)}
                      aria-controls={`program-description-${index}`}
                      tabIndex={0} // Make the inner div focusable
                    >
                      <div className="flex flex-col gap-[20px] h-full justify-between relative">
                        <div className="flex justify-between cursor-pointer">
                          <div className="flex flex-col gap-[8px] w-full">
                            <h3 className="text-[25px] leading-[32px] font-semibold whitespace-wrap hyphens-auto">
                              {plan.name}
                            </h3>
                            <span className="uppercase tracking-[0.75px] font-[600] text-[14px]">
                              {plan.credential}
                            </span>
                            {plan.description &&
                              plan.description !==
                                "No description available" && (
                                <p
                                  id={`program-description-${index}`}
                                  className="text-[16px] mb-[24px] line-clamp-3"
                                >
                                  {plan.description}
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="w-full"></div>
                          <div className="w-full flex flex-col gap-[24px]">
                            <div>
                              <div
                                className="border border-[2px] w-full gap-[8px] text-[17.5px] items-center border-[#00467F] font-[600] py-[12px] px-[16px] whitespace-nowrap flex justify-between text-ellipsis overflow-hidden cursor-pointer text-[#00467F]"
                                aria-controls={`dropdown-${index}`}
                                aria-expanded={
                                  expandedPrograms[index] ? "true" : "false"
                                }
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent event propagation issues
                                  toggleDropdown(index);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault(); // Prevent default action for space and enter keys
                                    toggleDropdown(index);
                                  }
                                  if (expandedPrograms[index]) {
                                    if (e.key === "ArrowDown") {
                                      e.preventDefault();
                                      const nextItem = document.querySelector(
                                        `#dropdown-${index} .dropdown-item`,
                                      );
                                      nextItem && nextItem.focus();
                                    }
                                    if (e.key === "Escape") {
                                      toggleDropdown(index);
                                    }
                                  }
                                }}
                                role="button"
                                tabIndex={0} // Make the div focusable
                              >
                                <span>
                                  {" "}
                                  {`Available at ${Array.isArray(plan.colleges) ? plan.colleges.length : 0} College${Array.isArray(plan.colleges) && plan.colleges.length > 1 ? "s" : ""}`}
                                </span>
                                <span>
                                  <div className="flex gap-[0px]">
                                    <div className="cursor-pointer flex items-center justify-center mr-[8px]">
                                      <svg
                                        className="transform "
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                      >
                                        <path
                                          d="M16.2207 24.8276L0 9.15857L1.54483 7.6138L16.1103 21.8482L30.4552 7.17242L32 8.71725L16.2207 24.8276Z"
                                          fill="#00467F"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </span>
                                {expandedPrograms[index] && (
                                  <div
                                    id={`dropdown-${index}`}
                                    className="p-[16px] absolute top-[90%] w-full min-w-[320px] left-0 max-h-[320px] overflow-y-auto rounded-[8px] bg-white shadow flex flex-col items-center gap-[0px] z-999"
                                    role="region" // Ensure region role for accessibility
                                    tabIndex={-1} // Exclude dropdown container from sequential focus
                                    onKeyDown={(e) => {
                                      if (e.key === "ArrowUp") {
                                        e.preventDefault();
                                        const prevItem =
                                          document.activeElement
                                            .previousElementSibling;
                                        prevItem && prevItem.focus();
                                      }
                                      if (e.key === "ArrowDown") {
                                        e.preventDefault();
                                        const nextItem =
                                          document.activeElement
                                            .nextElementSibling;
                                        nextItem && nextItem.focus();
                                      }
                                      if (e.key === "Escape") {
                                        toggleDropdown(index);
                                      }
                                      if (e.key === "Enter") {
                                        e.preventDefault();
                                        const currentFocus =
                                          document.activeElement;
                                        if (
                                          currentFocus &&
                                          currentFocus.dataset.url
                                        ) {
                                          window.location.href =
                                            currentFocus.dataset.url;
                                        }
                                      }
                                    }}
                                  >
                                    {plan.colleges
                                      .slice() // Creates a shallow copy to avoid mutating the original array
                                      .sort((a, b) =>
                                        a.name.localeCompare(b.name),
                                      ) // Sorts colleges by name alphabetically
                                      .map((college, collegeIndex) => (
                                        <a
                                          key={collegeIndex}
                                          className="px-[12px] py-[8px] rounded-[4px] w-full hover:bg-[#f5f5f5] transition ease-in-out duration-[250ms] dropdown-item"
                                          tabIndex={0} // Make each dropdown item focusable
                                          role="button"
                                          href={college.url}
                                          data-url={college.url}
                                        >
                                          {college.name}
                                        </a>
                                      ))}
                                  </div>
                                )}
                              </div>
                              <a
                                className="text-[#00467F] inline-block w-auto font-semibold border-b border-[#00467F] mt-2"
                                href={`https://catalog.kctcs.edu/search/?search=${plan.name?.toLowerCase().replace(/\s+/g, "-")}`}
                                aria-label={`Search ${plan.name} in Course Catalog`}
                                tabIndex={0} // Make the link focusable
                              >
                                Search Course Catalog
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
