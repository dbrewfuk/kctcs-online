import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonial from "./components/Testimonial";
import HeroSearch from "./components/HeroSearch";
import Search from "./components/Search";
import HeroRfi from "./components/HeroRfi";
import Header from "./components/Header";
import DynamicSections from "./DynamicSections";
import VideoBlockSlider from "./components/VideoBlockSlider";
import InterestGrid from "./components/InterestGrid";
import VideoSliderGrow from "./components/VideoSliderGrow";
import FeaturedAreas from "./components/FeaturedAreas";
import FeaturedAreasList from "./components/FeaturedAreasList";
import FeaturedAreasList2 from "./components/FeaturedAreas2";
import StudentStoryFeature from "./components/StudentStoryFeature";
import ContentSlider from "./components/ContentSlider";
import ProgramResults from "./components/ProgramResults";
import programs from "./programs-20240207";
import Filters from "./components/Filters";
import CurrentFilters from "./components/CurrentFilters";
import TestimonialMarquee from "./components/TestimonialMarquee";
import MediaMarquee from "./components/MediaMarquee";
import { Link } from "react-router-dom";
import VerticalMediaMarquee from "./components/VerticalMediaMarquee";

function Home() {
  const [selectedCredential, setSelectedCredential] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
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
  const [expandedPrograms, setExpandedPrograms] = useState({}); // State to track expanded state for each program
  const [isExpanded] = useState(false);

  const [selectedColleges, setSelectedColleges] = useState(
    Array(filteredAcademicPlans.length).fill({ name: "", url: "" }),
  );
  const [selectedCollegeIndex, setSelectedCollegeIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const videoUrls = [
    "https://player.vimeo.com/video/665275644?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/678281924?background=1&autoplay=1&loop=1&byline=0&title=0",
  ];
  const captions = [
    "Bluegrass Community & Technical College",
    "West Kentucky Community & Technical College",
  ];
  const delay = 20000;

  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
  };

  useEffect(() => {
    // Extract unique credential types from programsData
    const credentialTypesSet = new Set();

    // Iterate over each program
    programs.forEach((program) => {
      // Iterate over each college in the program
      program.colleges.forEach((college) => {
        // Check if academic plans exist and iterate over them
        if (college.academic_plans && college.academic_plans.length > 0) {
          college.academic_plans.forEach((plan) => {
            // Add the credential type to the Set
            credentialTypesSet.add(plan.credential_type);
          });
        }
      });
    });

    // Convert the Set to an array
    const uniqueTypesArray = Array.from(credentialTypesSet);

    // Update state with unique credential types
    setUniqueCredentialTypes(uniqueTypesArray);
  }, []); // Empty dependency array ensures this effect runs only once

  const handleCredentialTypeChange = (e, credentialType) => {
    // Check if the credential type is already selected
    const isSelected = selectedCredentialTypes.includes(credentialType);

    // If the credential type is already selected, remove it from the selected types
    // If not selected, add it to the selected types
    if (isSelected) {
      setSelectedCredentialTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((type) => type !== credentialType),
      );
    } else {
      setSelectedCredentialTypes((prevSelectedTypes) => [
        ...prevSelectedTypes,
        credentialType,
      ]);
    }
  };

  useEffect(() => {
    // Filter the academic plans based on the selected credential types
    const filteredPlans = academicPlans.filter((plan) =>
      selectedCredentialTypes.includes(plan.credential_type),
    );

    // Update the filtered academic plans state
    setFilteredAcademicPlans(filteredPlans);
  }, [selectedCredentialTypes, academicPlans]);

  useEffect(() => {
    // Extract unique credentials, program areas, and plan names
    const credentials = new Set();
    const programAreas = new Set();
    const planNames = new Set();
    const sectors = new Set();

    programs.forEach((program) => {
      program.colleges.forEach((college) => {
        if (college.academic_plans && college.academic_plans.length > 0) {
          college.academic_plans.forEach((plan) => {
            credentials.add(plan.credentials_awarded);
            programAreas.add(program.program);
            sectors.add(program.sector);
            planNames.add(plan.name);
          });
        }
      });
    });

    setUniqueCredentials(Array.from(credentials));
    setUniqueSectors(Array.from(sectors));
    setUniqueProgramAreas(Array.from(programAreas));
    setUniquePlanNames(Array.from(planNames));
  }, []);

  // useEffect to populate academicPlans with unique academic plans data
  useEffect(() => {
    // Function to extract unique academic plans from programs data
    const getUniqueAcademicPlans = () => {
      const uniquePlans = {};

      programs.forEach((program) => {
        program.colleges.forEach((college) => {
          if (college.academic_plans && college.academic_plans.length > 0) {
            college.academic_plans.forEach((plan) => {
              const key = `${plan.name} - ${plan.credentials_awarded}`;
              if (!uniquePlans[key]) {
                uniquePlans[key] = {
                  name: plan.name,
                  credentials_awarded: plan.credentials_awarded,
                  credential_type: plan.credential_type,
                  colleges: [],
                  area: program.program,
                  sector: program.sector,
                };
              }
              uniquePlans[key].colleges.push(college);
            });
          }
        });
      });

      return Object.values(uniquePlans);
    };

    // Update academicPlans state with unique academic plans data
    const uniqueAcademicPlans = getUniqueAcademicPlans();
    setAcademicPlans(uniqueAcademicPlans);
  }, []); // empty dependency array to ensure it runs only onceuseEffect(() => {
  const handleProgramAreaClick = (title) => {
    setSelectedArea(title);
    console.log("Clicked on:", title);
  };
  useEffect(() => {
    // Filter the academic plans based on the search query, selected filters, etc.
    const filteredPlans = academicPlans.filter((plan) => {
      // Check if the plan's credential type is included in the selected credential types
      const matchesCredentialTypes =
        selectedCredentialTypes.length === 0 ||
        selectedCredentialTypes.includes(plan.credential_type);

      // Other filtering conditions remain unchanged
      const matchesSearch =
        !searchQuery ||
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.credentials_awarded
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesFilters =
        (!selectedCredential || plan.credential_type === selectedCredential) &&
        (!selectedArea || plan.area === selectedArea) &&
        (!selectedPlan || plan.name === selectedPlan); // Consider the selected sector filter

      return matchesSearch && matchesFilters && matchesCredentialTypes;
    });

    // Update the filtered academic plans state
    setFilteredAcademicPlans(filteredPlans);

    // Logging for debugging
    console.log("Selected Credential Types:", selectedCredentialTypes);
    console.log("Filtered Academic Plans:", filteredPlans);
  }, [
    selectedCredential,
    selectedCredentialTypes,
    selectedArea,
    selectedPlan,
    academicPlans,
    searchQuery,
  ]);

  const clearSearchQuery = () => {
    setSearchQuery(""); // Clear the search query state
    history.push("/programs"); // Update the URL to remove the search query parameter
  };

  // Modify the toggleExpanded function to toggle the expansion state for a specific index
  const toggleExpanded = (index) => {
    setExpandedPrograms((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index], // Toggle the expanded state for the given index
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

  const handleFilterTagClick = (name) => {
    // Filter the results based on the clicked tag
    // For example, you can filter the results by updating the selectedPlan state
    setSelectedArea(name);
  };

  return (
    <>
      <div className="relative">
        <HeroSearch
          title="Real World Success, Anywhere."
          highlighted="Anywhere."
          uniqueCredentialTypes={uniqueCredentialTypes}
          setUniqueCredentialTypes={setUniqueCredentialTypes}
        />
      </div>

      <div className="py-[64px] lg:pt-[80px] lg:pb-[72px] bg-[#005cb8] relative">
        <div className="container mx-auto px-[24px] lg:px-0">
          <div className="flex flex-col lg:flex-row items-end gap-[48px] lg:gap-[64px]">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[48px] leading-[56px] lg:text-[61.04px] lg:leading-[64px] font-black text-white mb-5">
                Something for{" "}
                <span className="whitespace-nowrap">
                  <span className="bar">Everyone</span>
                  <span className="dot">.</span>
                </span>
              </h1>
              <p className="text-[20px] text-white font-semibold">
                We’ve been expanding our online offerings for years, and our
                programs are all designed to help you land an in-demand,
                high-paying job. So, what are you waiting for?
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Search />
            </div>
          </div>
        </div>
      </div>

      <Testimonial />

      <div className="pt-[64px] lg:py-[96px]">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full group overflow-hidden">
            <div className="w-full h-full relative z-1 aspect-[6/4]">
              <img
                className="w-full group-hover:scale-110 transition ease-in-out duration-[250ms] h-full absolute z-1 object-cover"
                src="./src/assets/admissions.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full justify-center">
            <div className="p-[24px] pt-[56px] py-[48px] lg:pb-[72px] lg:pl-[64px] max-w-[596px]">
              <h1 className="text-[56px] lg:text-[61.04px] mb-[16px] leading-[64px] text-[#00467F] font-[900]">
                Real World Success, <span className="bar">Anywhere</span>
                <span className="dot">.</span>
              </h1>
              <p className="text-[20px] text-[#00467F]">
                At KCTCS, we recognize that each student has individual needs
                and aspirations. That's why we provide adaptable scheduling
                choices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative px-[24px] lg:px-0 mx-auto pb-[64px] lg:pt-[0] lg:pb-[96px]">
        <div className="flex flex-col lg:flex-row gap-[72px]">
          <div className="lg:w-[50%] sticky top-0 h-full">
            <h3 className="text-[31px] leading-[36px] lg:text-[39px] leading-[44px] mb-[16px] font-[800] text-[#00467F]">
              Programs that fit your needs.
            </h3>
            <FeaturedAreasList2
              handleProgramAreaClick={handleProgramAreaClick}
              academicPlans={academicPlans}
              setAcademicPlans={setAcademicPlans}
            />
          </div>
          <div className="w-full">
            {!selectedArea && (
              <div className="w-full flex flex-row gap-[24px]">
                <div className="flex flex-col gap-[24px] w-full mb-[48px]">
                  <div className="w-full">
                    <div className="aspect-[3/4]">
                      <img
                        className="w-full h-full object-cover"
                        src="/assets/as1.jpeg"
                        alt="hero"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] w-full mt-[48px]">
                  <div className="w-full">
                    <div className="aspect-square ">
                      <img
                        className="w-full h-full object-cover"
                        src="/assets/as1.jpeg"
                        alt="hero"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <motion.div
              className={`w-full hidden lg:block `}
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedArea ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {selectedArea !== "" && (
                <ProgramResults
                  key={selectedArea}
                  filteredAcademicPlans={filteredAcademicPlans}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div className="w-full text-center">
          <a
            href="/programs"
            className="text-[18px] mt-[48px] rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-[#00467F] text-white py-[16px] font-semibold px-[48px] hover:bg-white hover:text-[#00467F] hover:border-[#00467F]"
          >
            Explore All Programs
          </a>
        </div>
      </div>

      <div className="py-[64px] pt-[0] lg:pb-[96px]">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full group overflow-hidden">
            <div className="w-full h-full relative z-1 aspect-[6/4]">
              <img
                className="w-full group-hover:scale-110 transition ease-in-out duration-[250ms] h-full absolute z-1 object-cover"
                src="./src/assets/admissions.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full justify-center">
            <div className="p-[24px] pt-[56px] py-[48px] lg:pb-[72px] lg:pl-[64px] max-w-[596px]">
              <h1 className="text-[56px] lg:text-[61.04px] mb-[16px] leading-[64px] text-[#00467F] font-[900]">
                Real World Success, <span className="bar">Anywhere</span>
                <span className="dot">.</span>
              </h1>
              <p className="text-[20px] text-[#00467F]">
                At KCTCS, we recognize that each student has individual needs
                and aspirations. That's why we provide adaptable scheduling
                choices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative overflow-hidden px-[24px] lg:px-0 mx-auto pt-[48px] pb-[64px] lg:pb-[128px]">
        <div className="flex flex-col lg:flex-row gap-[64px] items-center">
          <div className="w-full flex flex-row gap-[24px]">
            <div className="flex flex-col gap-[24px] w-full mb-[48px]">
              <div className="w-full">
                <div className="aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src="/assets/as1.jpeg"
                    alt="hero"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src="/assets/as1.jpeg"
                    alt="hero"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] w-full mt-[48px]">
              <div className="w-full">
                <div className="aspect-square ">
                  <img
                    className="w-full h-full object-cover"
                    src="/assets/as1.jpeg"
                    alt="hero"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src="/assets/as1.jpeg"
                    alt="hero"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[16px]">
            <h3 className="text-[39px] leading-[44px] mb-[16px] font-[800] text-[#00467F]">
              Programs that fit your needs.
            </h3>
            <div>
              <h2 className="text-[24px] font-[600] text-[#00467F] mb-[16px]">
                Degree Seeking
              </h2>
              <p className="text-[#00467F] text-[18px]">
                LSU Online is here to help you accelerate your education goals
                with excellent, flexible, and affordable programs.
              </p>
            </div>
            <div>
              <h2 className="text-[24px] font-[600] text-[#00467F] mb-[16px]">
                Military
              </h2>
              <p className="text-[#00467F] text-[18px]">
                LSU Online is proud to service our active military members,
                veterans, and their dependents by accepting Military Education
                benefits.
              </p>
            </div>
            <div>
              <h2 className="text-[24px] font-[600] text-[#00467F] mb-[16px]">
                Non-Degree Seeking
              </h2>
              <p className="text-[#00467F] text-[18px]">
                Looking for training and education to stay ahead in your
                professional career or learn new skills without taking on the
                demands of a traditional degree program? We have you covered.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <a
            href="/admissions"
            className="text-[18px] mt-[48px] rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-[#00467F] text-white py-[16px] font-semibold px-[48px] hover:bg-white hover:text-[#00467F] hover:border-[#00467F]"
          >
            Explore Admissions
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
