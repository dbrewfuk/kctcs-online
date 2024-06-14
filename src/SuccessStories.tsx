import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import HeroSearch from "./components/HeroSearch";
import Search from "./components/Search";
import Header from "./components/Header";
import VideoGrid from "./components/VideoGrid";
import { Link } from "react-router-dom";

function SuccessStories() {
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
    // Filter the academic plans based on the selected credential types
    const filteredPlans = academicPlans.filter((plan) =>
      selectedCredentialTypes.includes(plan.credential_type),
    );

    // Update the filtered academic plans state
    setFilteredAcademicPlans(filteredPlans);
  }, [selectedCredentialTypes, academicPlans]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const stickyElement = document.getElementById("sticky-search");
      const stickyOffset = stickyElement.offsetTop;

      if (offset >= stickyOffset) {
        setIsSticky(true);
        console.log("Sticky element is at the top of the viewport or above.");
      } else {
        setIsSticky(false);
        console.log("Sticky element is below the top of the viewport.");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Header isActive="success-stories" />

      <VideoGrid />
      <div className="py-[64px] lg:py-[80px] bg-[#005CB8] relative">
        <div className="container mx-auto px-8 lg:px-0">
          <div className="flex flex-col lg:flex-row items-end gap-[32px] lg:gap-[64px]">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[48px] leading-[52px] lg:text-[56px] lg:leading-[64px] font-[800] text-white mb-[16px] lg:mb-[24px]">
                Something for <span className="bar">Everyone</span>
                <span className="dot">.</span>
              </h1>
              <p className="text-[20px] lg:text-[25px] leading-[32px] text-white font-semibold">
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
    </>
  );
}

export default SuccessStories;
