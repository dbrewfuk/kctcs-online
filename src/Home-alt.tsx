import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import config from "./config";
import Header from "./components/Header";
import HeroSearch from "./components/SectionHeroSearch";
import ExplorePrograms from "./components/SectionExplorePrograms";
import StudentStoryFeature from "./components/SectionStudentStoryFeature";
import SFeaturedAreas from "./components/SectionFeaturedAreas";
import Testimonial from "./components/SectionTestimonial";
import AdmissionsInfo from "./components/SectionAdmissionsInfo";
import TuitionSection from "./components/STuition";
import GlobalFooter from "./components/GlobalFooter";

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
  const [expandedPrograms, setExpandedPrograms] = useState({});
  const [selectedColleges, setSelectedColleges] = useState(
    Array(filteredAcademicPlans.length).fill({ name: "", url: "" }),
  );
  const [selectedCollegeIndex, setSelectedCollegeIndex] = useState(null);
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(
      `/programs?search=${searchQuery}&credentialTypes=${selectedCredentialTypes.join(",")}`,
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.pgUrl}`);
        const data = await response.json();

        const sectors = [...new Set(data.map((item) => item.sector))];
        const credentials = [...new Set(data.map((item) => item.credential))];
        const plans = [...new Set(data.map((item) => item.plan))];
        const areas = [...new Set(data.map((item) => item.area))];

        setUniqueSectors(sectors);
        setUniqueCredentials(credentials);
        setUniquePlanNames(plans);
        setUniqueProgramAreas(areas);

        const credentialTypesSet = new Set(data.map((item) => item.credential));
        setUniqueCredentialTypes(Array.from(credentialTypesSet));

        const uniqueAcademicPlans = data.reduce((acc, program) => {
          const key = `${program.plan} - ${program.credential}`;
          if (!acc[key]) {
            acc[key] = {
              name: program.plan,
              credential: program.credential,
              colleges: Array.isArray(program.colleges) ? program.colleges : [], // Ensure colleges is an array // Convert colleges string to array
              area: program.area,
              sector: program.sector,
              description: program.description,
              programAreaUrl: program.program_area_url,
            };
          }
          return acc;
        }, {});

        setAcademicPlans(Object.values(uniqueAcademicPlans));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCredentialTypeChange = (e, credentialType) => {
    const isSelected = selectedCredentialTypes.includes(credentialType);
    const updatedSelectedTypes = isSelected
      ? selectedCredentialTypes.filter((type) => type !== credentialType)
      : [...selectedCredentialTypes, credentialType];
    setSelectedCredentialTypes(updatedSelectedTypes);
  };

  useEffect(() => {
    const filteredPlans = academicPlans.filter((plan) => {
      const normalizedCredential = uniqueCredentialTypes.includes(
        plan.credential,
      )
        ? plan.credential
        : "Other";
      const matchesCredentialTypes =
        selectedCredentialTypes.length === 0 ||
        selectedCredentialTypes.includes(normalizedCredential);
      const matchesSearch =
        !searchQuery ||
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        normalizedCredential.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters =
        (!selectedCredential || normalizedCredential === selectedCredential) &&
        (!selectedArea || plan.area === selectedArea) &&
        (!selectedSector || plan.sector === selectedSector) &&
        (!selectedPlan || plan.name === selectedPlan);

      return matchesSearch && matchesCredentialTypes && matchesFilters;
    });

    setFilteredAcademicPlans(filteredPlans);
  }, [
    selectedCredential,
    selectedArea,
    selectedPlan,
    selectedSector,
    selectedCredentialTypes,
    academicPlans,
    searchQuery,
  ]);

  const clearSearchQuery = () => {
    setSearchQuery("");
    history.push("/programs");
  };

  const toggleExpanded = (index) => {
    setExpandedPrograms((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
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

  return (
    <>
      <Header />
      <div className="relative">
        <HeroSearch
          title="Real World Success, Anywhere"
          highlighted="Anywhere"
          uniqueCredentialTypes={uniqueCredentialTypes}
          setUniqueCredentialTypes={setUniqueCredentialTypes}
        />
      </div>
      <ExplorePrograms />

      <StudentStoryFeature />

      <SFeaturedAreas />
      <Testimonial />
      <TuitionSection />
      <GlobalFooter />
    </>
  );
}

export default Home;
