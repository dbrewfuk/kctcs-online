import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import programs from "../programs-20240207";

// Dropdown component
function FilterDropdown({
  title,
  options,
  selectedOption,
  setSelectedOption,
  updateOptions,
  backgroundColor,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    updateOptions(title, option);
    setIsOpen(false); // Close the dropdown after an option is selected
    // Add an alert to show the selected option
  };

  // Function to determine if the background color is dark or light
  const isBackgroundColorDark = () => {
    // Determine whether the background color is dark or light based on your criteria
    // You can use any logic here to determine the brightness of the background color
    // For simplicity, let's assume a light background if the backgroundColor prop is 'light'
    return backgroundColor === "dark";
  };

  return (
    <div className="relative w-full" onClick={() => setIsOpen(!isOpen)}>
      <div
        className={`font-semibold uppercase mb-2 ${isBackgroundColorDark() ? "text-white" : "text-[#00467F]"}`}
      >
        {title}
      </div>
      <div className="flex items-center text-[16px] py-[12px] text-[#00467F] justify-between border border-[#00467F] bg-white p-2">
        <span className="">{selectedOption || "Select"}</span>
        <svg
          className={`transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.2207 24.8276L0 9.15863L1.54483 7.6138L16.1103 21.8483L30.4552 7.17242L32 8.71725L16.2207 24.8276Z"
            fill="#00467F"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white shadow z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="py-1 px-3 text-[#00467F] hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Filters({
  uniqueCredentialTypes,
  uniqueCredentialType,
  setUniqueCredentialTypes,
  handleCredentialTypeChange,
  selectedCredentialTypes = [],
  setSelectedCredentialTypes,
  uniqueCredentials,
  uniquePlanNames,
  uniqueProgramAreas, // Add uniqueProgramSectors as prop
  selectedCredential,
  setSelectedCredential,
  selectedArea,
  setSelectedArea,
  setSelectedSector,
  selectedSector, // Add selectedSector and setSelectedSector
  uniqueSectors,
  selectedPlan,
  setSelectedPlan,
  setUniquePlanNames,
  setUniqueProgramAreas,
  programs,
  backgroundColor,
}) {
  const history = useHistory();
  const location = useLocation();
  const currentPathname = history.location.pathname;

  // Extract query parameters from URL when the component mounts
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const credential = queryParams.get("credential") || "";
    const area = queryParams.get("area") || "";
    const plan = queryParams.get("plan") || "";
    const sector = queryParams.get("sector") || "";

    // Update state variables with retrieved query parameters
    setSelectedCredential(credential);
    setSelectedArea(area);
    setSelectedPlan(plan);
    setSelectedSector(sector);
  }, [location.search]);

  const handleApplyClick = () => {
    const queryParams = new URLSearchParams();
    queryParams.set("credential", selectedCredential || "");
    queryParams.set("area", selectedArea || "");
    queryParams.set("sector", selectedSector || "");
    queryParams.set("plan", selectedPlan || ""); // Include sector in query params
    queryParams.set("credentialTypes", selectedCredentialTypes.join(","));

    const queryString = queryParams.toString();
    const newUrl = `/programs?${queryString}`;

    history.push(newUrl);
    window.location.reload();
  };

  const updateOptions = (title, selectedOption) => {
    switch (title) {
      case "Credential":
        // Filter unique plans and areas based on the selected credential
        const filteredPlans = programs
          .flatMap((college) =>
            college.academic_plans.filter(
              (plan) =>
                plan.credential_type === selectedOption &&
                (selectedArea ? plan.area === selectedArea : true) &&
                (selectedPlan ? plan.name === selectedPlan : true),
            ),
          )
          .map((plan) => plan.name);

        const filteredAreas = programs
          .flatMap((college) =>
            college.academic_plans.filter(
              (plan) =>
                plan.credential_type === selectedOption &&
                (selectedPlan ? plan.name === selectedPlan : true),
            ),
          )
          .map((plan) => plan.area);

        // Set the unique plans and areas based on the selected credential
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

  return (
    <div className="w-full flex flex-col gap-[16px]">
      <div className="flex w-full flex-col  gap-[24px]">
        {uniqueSectors && (
          <FilterDropdown
            title="Sector"
            options={uniqueSectors || []}
            selectedOption={selectedSector}
            setSelectedOption={setSelectedSector}
            updateOptions={updateOptions}
            backgroundColor={backgroundColor}
          />
        )}
        <FilterDropdown
          title="Program Area"
          options={uniqueProgramAreas || []}
          selectedOption={selectedArea}
          setSelectedOption={setSelectedArea}
          updateOptions={updateOptions}
          backgroundColor={backgroundColor}
        />
        <FilterDropdown
          title="Academic Plan"
          options={uniquePlanNames || []}
          selectedOption={selectedPlan}
          setSelectedOption={setSelectedPlan}
          updateOptions={updateOptions}
          backgroundColor={backgroundColor}
        />
        <div className="hidden lg:flex flex flex-col gap-[8px]">
          <div
            className={`font-semibold uppercase mb-[12px] ${backgroundColor === "dark" ? "text-white" : "text-[#00467F]"}`}
          >
            Credential
          </div>
          <div className=" flex flex-row gap-[12px]">
            {uniqueCredentialTypes.map((type, index) => (
              <div key={index} className="flex gap-[8px] items-center">
                <input
                  type="checkbox"
                  id={`credentialType-${index}`}
                  value={type}
                  checked={selectedCredentialTypes.includes(type)}
                  onChange={(e) => handleCredentialTypeChange(e, type)}
                  className=""
                />
                <label
                  className={`font-[600] ${backgroundColor === "dark" ? "text-white" : "text-[#00467F]"}`}
                  htmlFor={`credentialType-${index}`}
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      {currentPathname !== "/programs" && (
        <span
          className="p-[8px] w-auto self-end inline-block rounded-[12px] bg-[#FFD000] cursor-pointer hover:bg-opacity-70 transition ease-in-out  duration-200 cursor-pointer"
          onClick={handleApplyClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#00467F"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            ></path>
          </svg>
        </span>
      )}
    </div>
  );
}

export default Filters;
