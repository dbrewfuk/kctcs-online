import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AltSections from "./components/SAltSections";
import CollegeCards from "./components/CollegeCards";
import programs from "./programs-20240510.json";

const sections = [
  {
    title: "Online Tuition",
    heading: "Blackboard Learning Guide",
    description:
      "This guide is designed to help you navigate some of the technical concerns you may have with Blackboard.",
    imgSrc: "/src/assets/admissions.jpeg",
    imgAlt: "tuition",
    buttonLabel: "Download",
    buttonHref:
      "https://kctcs.edu/current-students/academic-resources/blackboard-student-guide.pdf",
  },
  {
    title: "Online Tuition",
    heading: "Training & Learning Center",
    description:
      "The TLC is your one-stop shop to find information and assistance for all the systems and solutions you use every day. From Blackboard eLearning tips and training, to Student Self Service best practices, to help with Microsoft Office 365 tools.",
    imgSrc: "/src/assets/admissions.jpeg",
    imgAlt: "tuition",
    buttonLabel: "Learn More",
    buttonHref:
      "https://kctcs.sharepoint.com/sites/tlc/SitePages/Pick-Your-Training-Topic.aspx",
  },
  {
    title: "Financial Aid",
    heading: "Statewide Internet Access",
    description:
      "The Kentucky Council on Postsecondary Education (CPE) has put together a list of access points for outdoor wifi at all of the higher education institutions across the state for Kentucky students to access online learning courses.&nbsp;",
    imgSrc: "/src/assets/admissions.jpeg",
    imgAlt: "tuition",
    buttonLabel: "Learn More",
    buttonHref: "/tuition-and-costs.html",
  },
];

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
      <Header isActive="student-support-services" />
      <Hero title="Student Support Services" />
      <div className="bg-[#FFF9E6] mb-[96px]">
        <div className="container mx-auto px-[24px] lg:px-0 pt-[64px] lg:pt-[96px] pb-[64px] lg:pb-[96px]">
          <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[64px]">
            <div className="w-full aspect-[4/3] lg:w-1/2 rounded-[12px] overflow-hidden">
              <img
                src="https://southeast.kctcs.edu/about/media/images/about-banner.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#00467F] text-[20px] mb-[8px] inline-block font-[600]">
                Student Support Services
              </span>
              <h1 className="text-[48.8px] leading-[52px] lg:text-[61.04px] mb-[36px] font-[800] lg:leading-[64px] text-[#00467F]">
                <span className="bar adjusted-e mr-[4px]">Elevate</span>
                Your Online{" "}
                <span className="bar bar--bottom adjusted-e">Experience</span>
                <span className="dot">.</span>
              </h1>
              <p className="text-[21px] font-[500] leading-[32px] text-[#00467F]">
                With our quick change to online classes, we want to make sure
                you're comfortable with your new learning environment. If you've
                never taken an online class, or if you're looking for some tips
                and tricks to keep you on track, you'll find resources to help
                you here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AltSections sections={sections} />
      <CollegeCards
        contentset="student-support-services"
        subheadline="Choose a college to explore more resources."
      />
    </>
  );
}

export default StudentSupportServices;
