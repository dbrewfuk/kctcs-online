import { useState, useEffect } from "react";
import HeroSearch from "./components/HeroSearch";
import HeroRfi from "./components/HeroRfi";
import Header from "./components/Header";
import DynamicSections from "./DynamicSections";
import Testimonial from "./components/Testimonial";
import VideoBlockSlider from "./components/VideoBlockSlider";
import programs from "./programs-20240207.json";

const videoUrls = [
  "https://player.vimeo.com/video/665275644?background=1&autoplay=1&loop=1&byline=0&title=0",
  "https://player.vimeo.com/video/678281924?background=1&autoplay=1&loop=1&byline=0&title=0",
];
const captions = [
  "Bluegrass Community & Technical College",
  "West Kentucky Community & Technical College",
];
const delay = 20000;

const colleges = [
  { name: "Select a College", url: "" },
  { name: "Bluegrass Community & Technical College", url: "" },
  { name: "Jefferson Community & Technical College", url: "" },
  { name: "Western Kentucky Community & Technical College", url: "" },
];

function StudentSupportServices() {
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
  const [uniquePlanNames, setUniquePlanNames] = useState([]);
  const [filteredAcademicPlans, setFilteredAcademicPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedPrograms, setExpandedPrograms] = useState({}); // State to track expanded state for each program
  const [isExpanded] = useState(false);
  const [selectedColleges, setSelectedColleges] = useState(
    Array(filteredAcademicPlans.length).fill({ name: "", url: "" }),
  );
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);

  const handleCollegeChange = (event: any) => {
    const selectedCollege = colleges.find(
      (college) => college.name === event.target.value,
    );

    setSelectedCollege?.(selectedCollege!);
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

  //const collegeCards = cardData[selectedCollege.name as keyof typeof cardData];
  return (
    <>
      <div className="relative">
        <HeroSearch
          title="Student Support Services"
          highlighted=""
          uniqueCredentialTypes={uniqueCredentialTypes}
          setUniqueCredentialTypes={setUniqueCredentialTypes}
        />
      </div>

      <DynamicSections
        title="Explore Student Support Services"
        supportingText="Are you a first-year college student? Unsure about what it takes to be successful? Do you need assistance getting around campus?"
        contentset="student-support-services"
      />

      <Testimonial />
    </>
  );
}

export default StudentSupportServices;
