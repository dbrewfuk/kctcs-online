import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonial from "./components/Testimonial";
import HeroSearch from "./components/HeroSearch";
import Search from "./components/Search";
import HeroRfi from "./components/HeroRfi";
import Header from "./components/Header";
import DynamicSections from "./DynamicSections";
import InterestGrid from "./components/InterestGrid";
import FeaturedAreasList2 from "./components/FeaturedAreas2";
import StudentStoryFeature from "./components/StudentStoryFeature";
import ContentSlider from "./components/ContentSlider";
import ProgramResults from "./components/ProgramResults";
import programs from "./programs-20240510";
import Filters from "./components/Filters";
import CurrentFilters from "./components/CurrentFilters";
import TestimonialMarquee from "./components/TestimonialMarquee";
import { Link } from "react-router-dom";
import ExplorePrograms from "./components/ExplorePrograms";
import SFeaturedAreas from "./SFeaturedAreas";
import AdmissionsInfo from "./components/AdmissionsInfo";
import FadeInSection from "./components/FadeInSection";
import TuitionSection from "./components/TuitionSection";

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
      <Header />
      <div className="relative">
        <HeroSearch
          title="Real World Success, Anywhere."
          highlighted="Anywhere."
          uniqueCredentialTypes={uniqueCredentialTypes}
          setUniqueCredentialTypes={setUniqueCredentialTypes}
        />
      </div>

      <ExplorePrograms />
      <FadeInSection>
        <StudentStoryFeature />
      </FadeInSection>

      <SFeaturedAreas />
      <Testimonial />

      <AdmissionsInfo />
      <TuitionSection />
    </>
  );
}

export default Home;
