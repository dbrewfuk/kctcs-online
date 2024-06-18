import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AltSections from "./components/SAltSections";
import CollegeCards from "./components/CollegeCards";
import GlobalFooter from "./components/GlobalFooter";

const sections = [
  {
    title: "Online Tuition",
    heading: "Blackboard Learning",
    description:
      "At KCTCS Online, we use Blackboard Ultra to deliver our classes. Navigating Blackboard Ultra is simple and straightforward. For those new to this system, there’s no need to worry. All students have access to a complimentary orientation course that walks you through everything you need to know about using our learning management system.",
    imgSrc: "/assets/sss-bb-tab-man-1920x1280.jpg",
    imgAlt: "tuition",
    videoSrc: "",
    youtubeId: "",
    buttonLabel: "Learn More",
    buttonStyle: "leadingIcon",
    buttonIcon: "Download",
    buttonHref: "https://kctcs.edu/current-students/",
  },
  {
    title: "Financial Aid",
    heading: "Statewide Internet Access",
    description:
      "The Kentucky Council on Postsecondary Education (CPE) has put together a list of access points for outdoor wifi at all of the higher education institutions across the state for Kentucky students to access online learning courses.",
    imgSrc: "/assets/tc-mm-bed-dog-1920x1281.jpg",
    imgAlt: "tuition",
    buttonLabel: "Learn More",
    buttonHref:
      "https://kctcs.edu/current-students/academic-resources/statewide-internet-access.aspx",
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

  //const collegeCards = cardData[selectedCollege.name as keyof typeof cardData];
  return (
    <>
      <Header isActive="student-support-services" />
      <Hero title="Student Support Services" />
      <div className="bg-[#FFF9E6] mb-[96px]">
        <div className="container mx-auto px-[24px] lg:px-0 pt-[64px] lg:pt-[96px] pb-[64px] lg:pb-[96px]">
          <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[64px]">
            <div className="w-full aspect-[4/3] lg:w-1/2 overflow-hidden">
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
                KCTCS Online is dedicated to your success. Each college offers a
                variety of student support to ensure you enroll in and complete
                your courses. Support offerings include virtual advising,
                registration for courses, online tutoring, virtual IT support,
                and more. Visit college links to learn more about the unique
                offerings at each institution.
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
      <GlobalFooter />{" "}
    </>
  );
}

export default StudentSupportServices;
