import React, { useState, useEffect } from "react";
import Button from "./Button";

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
    setIsOpen(false);
  };

  const handleClearSelection = (e) => {
    e.stopPropagation();
    setSelectedOption("");
    setIsOpen(false);
  };

  const isBackgroundColorDark = () => backgroundColor === "dark";

  return (
    <div className="relative w-full">
      <div
        className={`font-[700] uppercase mb-[4px] text-[16px] tracking-[0.35px] ${
          isBackgroundColorDark() ? "text-white" : "text-[#00467F]"
        }`}
      >
        {title}
      </div>
      <div
        className="flex items-center text-[17.5px] py-[8px] h-[48px] pl-[16px] pr-[12px] text-[#00467F] justify-between border-[1.35px] border-[#00467F] bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
      >
        <span
          className={`overflow-hidden whitespace-nowrap placeholder-[#f3f3f3] text-ellipsis" ${selectedOption ? "text-[#00467F]" : "text-[rgba(0,0,0,0.35)]"}`}
        >
          {selectedOption || "Select"}
        </span>
        <div className="flex gap-[0px]">
          {selectedOption && (
            <div
              className="rounded-full group flex items-center mr-[16px] justify-center cursor-pointer transition ease-in-out duration-[200ms]"
              onClick={handleClearSelection}
              role="button"
              aria-label="Clear selection"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleClearSelection(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M1.64922 0L0 1.65155L14.3496 16.0012L0 30.3508L1.64922 32L15.9988 17.6504L30.3508 32L32 30.3484L17.6504 15.9988L32 1.64922L30.3508 0.0023327L16.0023 14.3519L1.64922 0Z"
                  fill="#00467F"
                ></path>
              </svg>
            </div>
          )}
          <div className="cursor-pointer flex items-center justify-center mr-[8px]">
            <svg
              className={`transform ${isOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.2207 24.8276L0 9.15857L1.54483 7.6138L16.1103 21.8482L30.4552 7.17242L32 8.71725L16.2207 24.8276Z"
                fill="#00467F"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white shadow z-10 overflow-scroll max-h-[320px]">
          {options.map((option, index) => (
            <div
              key={index}
              className="py-1 px-3 text-[#00467F] hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionClick(option)}
              tabIndex={0}
              role="button"
              aria-label={`Select ${option}`}
              onKeyDown={(e) => e.key === "Enter" && handleOptionClick(option)}
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
  handleCredentialTypeChange,
  selectedCredentialTypes,
  setSelectedCredentialTypes,
  selectedCredential,
  setSelectedCredential,
  selectedArea,
  setSelectedArea,
  selectedSector,
  setSelectedSector,
  selectedPlan,
  setSelectedPlan,
  backgroundColor,
  showExplore,
}) {
  const [uniqueSectors, setUniqueSectors] = useState([]);
  const [uniqueCredentials, setUniqueCredentials] = useState([]);
  const [uniquePlanNames, setUniquePlanNames] = useState([]);
  const [uniqueProgramAreas, setUniqueProgramAreas] = useState([]);
  const [academicPlans, setAcademicPlans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [disabledCredentials, setDisabledCredentials] = useState([]);

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
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kctcs-online.vercel.app/api/programs-with-colleges",
        );
        const data = await response.json();

        const sectors = [...new Set(data.map((item) => item.sector))];
        const credentials = [
          ...new Set(
            data.map(
              (item) => credentialMapping[item.credential] || item.credential,
            ),
          ),
        ];
        const plans = [...new Set(data.map((item) => item.plan))];
        const areas = [...new Set(data.map((item) => item.area))];

        setUniqueSectors(sectors);
        setUniqueCredentials(credentials);
        setUniquePlanNames(plans);
        setUniqueProgramAreas(areas);

        const uniqueAcademicPlans = data.reduce((acc, program) => {
          const key = `${program.plan} - ${credentialMapping[program.credential] || program.credential}`;
          if (!acc[key]) {
            acc[key] = {
              name: program.plan,
              credential:
                credentialMapping[program.credential] || program.credential,
              colleges: [],
              area: program.area,
              sector: program.sector,
            };
          }
          acc[key].colleges.push({ name: program.colleges });
          return acc;
        }, {});

        setAcademicPlans(Object.values(uniqueAcademicPlans));

        // Initialize selectedCredentialTypes with all credentials
        setSelectedCredentialTypes(credentials);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateFilteredOptions = () => {
      const filteredPlans = academicPlans.filter((plan) => {
        const matchesCredential =
          !selectedCredential || plan.credential === selectedCredential;
        const matchesArea = !selectedArea || plan.area === selectedArea;
        const matchesSector = !selectedSector || plan.sector === selectedSector;
        const matchesPlan = !selectedPlan || plan.name === selectedPlan;
        const matchesCredentialTypes =
          selectedCredentialTypes.length === 0 ||
          selectedCredentialTypes.includes(
            credentialMapping[plan.credential] || plan.credential,
          );

        return (
          matchesCredential &&
          matchesArea &&
          matchesSector &&
          matchesPlan &&
          matchesCredentialTypes
        );
      });

      setUniqueSectors(
        [...new Set(filteredPlans.map((plan) => plan.sector))].sort(),
      );
      setUniquePlanNames(
        [...new Set(filteredPlans.map((plan) => plan.name))].sort(),
      );
      setUniqueProgramAreas(
        [...new Set(filteredPlans.map((plan) => plan.area))].sort(),
      );
    };

    updateFilteredOptions();
  }, [
    selectedCredential,
    selectedArea,
    selectedSector,
    selectedPlan,
    selectedCredentialTypes,
    academicPlans,
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
    // Update the options based on the selection
  };

  return (
    <div className="w-full flex flex-wrap gap-[16px]">
      <div className="flex w-full flex-wrap gap-[16px]">
        {uniqueSectors && (
          <FilterDropdown
            title="Sector"
            options={uniqueSectors}
            selectedOption={selectedSector}
            setSelectedOption={setSelectedSector}
            updateOptions={updateOptions}
            backgroundColor={backgroundColor}
          />
        )}
        <FilterDropdown
          title="Program Area"
          options={uniqueProgramAreas}
          selectedOption={selectedArea}
          setSelectedOption={setSelectedArea}
          updateOptions={updateOptions}
          backgroundColor={backgroundColor}
        />
        <FilterDropdown
          title="Academic Plan"
          options={uniquePlanNames}
          selectedOption={selectedPlan}
          setSelectedOption={setSelectedPlan}
          updateOptions={updateOptions}
          backgroundColor={backgroundColor}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[32px] justify-between w-full items-end">
        <div className="flex flex-col w-full gap-[8px]">
          <div
            className={`font-semibold uppercase mb-[4px] text-[16px] tracking-[0.25px] ${
              backgroundColor === "dark" ? "text-white" : "text-[#00467F]"
            }`}
          >
            Credential
          </div>
          <div className="flex flex-row gap-[12px]">
            {uniqueCredentials.map((credential, index) => (
              <div
                key={index}
                className={`flex gap-[8px] items-center ${
                  disabledCredentials.includes(credential)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                tabIndex={0}
                role="button"
                aria-label={`Select ${credential}`}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  !disabledCredentials.includes(credential) &&
                  handleCredentialTypeChange(e, credential)
                }
              >
                <input
                  type="checkbox"
                  id={`credentialType-${index}`}
                  value={credential}
                  checked={selectedCredentialTypes.includes(credential)}
                  onChange={(e) =>
                    !disabledCredentials.includes(credential) &&
                    handleCredentialTypeChange(e, credential)
                  }
                  disabled={disabledCredentials.includes(credential)}
                />
                <label
                  className={`font-[600] ${
                    backgroundColor === "dark" ? "text-white" : "text-[#00467F]"
                  }`}
                  htmlFor={`credentialType-${index}`}
                >
                  {credentialMapping[credential] || credential}
                </label>
              </div>
            ))}
          </div>
        </div>
        {showExplore && (
          <div
            className={`transition w-full lg:w-auto text-center ease-in-out duration-[250] ${
              isAnyOptionSelected()
                ? "opacity-100 translate-y-0"
                : "translate-y-[20px] opacity-0"
            }`}
          >
            <div className="group">
              <Button type="primary-dark" onClick={handleApplyClick}>
                <div className="gap-[12px] flex flex-row items-center">
                  <span className="font-[600] w-[220px] lg:w-[auto] text-center text-[17.5px] whitespace-nowrap">
                    Explore
                  </span>
                  <span
                    className={`right-0 hidden rounded-[12px] cursor-pointer  transition ease-in-out duration-[300ms] ${isAnyOptionSelected ? "transform translate-x-[-2px] opacity-100" : "translate-x-[56px] opacity-0"} flex items-center`}
                    // Submit form when the button is clicked
                    role="button"
                    tabIndex="0"
                    aria-label="Submit search"
                    onKeyDown={(e) => handleKeyDown(e, handleApplyClick)}
                  >
                    <svg
                      className="group-hover:fill-white fill-[#00467F] transition ease-in-out duration-[250ms] group-hover:translate-x-[8px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="auto"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filters;
