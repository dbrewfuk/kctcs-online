import React, { useRef, useState, useEffect, Suspense } from "react";
import Filters from "./Filters";

function HeroSearch({
  title,
  highlighted,
  uniqueCredentialTypes,
  setUniqueCredentialTypes,
}) {
  const [selectedCredential, setSelectedCredential] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [academicPlans, setAcademicPlans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [programs, setPrograms] = useState([]);
  const [selectedCredentialTypes, setSelectedCredentialTypes] = useState([]);
  const [uniqueCredentials, setUniqueCredentials] = useState([]);
  const [uniqueSectors, setUniqueSectors] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");
  const [uniqueProgramAreas, setUniqueProgramAreas] = useState([]);
  const [uniquePlanNames, setUniquePlanNames] = useState([]);

  const handleCredentialTypeChange = (e, credentialType) => {
    const isSelected = selectedCredentialTypes.includes(credentialType);
    setSelectedCredentialTypes((prevSelectedTypes) =>
      isSelected
        ? prevSelectedTypes.filter((type) => type !== credentialType)
        : [...prevSelectedTypes, credentialType],
    );
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const hideShadowElement = () => {
      const video = videoRef.current;
      if (video) {
        const shadowRoot = video.shadowRoot;
        if (shadowRoot) {
          const playButton = shadowRoot.querySelector(".play-pause"); // Replace with the actual class or element selector
          if (playButton) {
            playButton.style.display = "none";
          }
        }
      }
    };

    hideShadowElement();

    // Optional: re-apply if the shadow DOM changes
    videoRef.current.addEventListener("shadowRootChanged", hideShadowElement);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener(
          "shadowRootChanged",
          hideShadowElement,
        );
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://77ykxy-5000.csb.app/api/programs-with-colleges",
        );
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

  const highlightedTitle = title.split(" ").map((word, index) => (
    <span
      className={
        word.toLowerCase() === highlighted.toLowerCase() ? "text-[#FBBF24]" : ""
      }
      key={index}
    >
      {word}{" "}
    </span>
  ));

  useEffect(() => {
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

  // Array of texts to cycle through
  const texts = ["Anywhere", "Everywhere", "Globally", "Universally"];
  const [currentText, setCurrentText] = useState(0);
  const [nextText, setNextText] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setNextText((prev) => (prev + 1) % texts.length);
        setIsFading(false);
      }, 500); // Match this duration with your animation duration
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  if (!uniqueCredentialTypes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-primary h-[800px]">
      <div className="w-full h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <video
            src="https://www.dropbox.com/s/sd90kljtxqp68dg/background-video.mp4?raw=1"
            className="object-cover w-full h-full"
            controls={false}
            muted="true"
            loop
            ref={videoRef}
          ></video>
        </Suspense>
        <div className="absolute top-0 w-full h-full pb-[32px]">
          <div className="container px-[24px] lg:px-0 mx-auto h-full">
            <div className="flex h-full items-end lg:items-center justify-end">
              <div className="w-full lg:w-1/2 flex flex-col">
                <h1 className="text-[64px] relative leading-[64px] xl:text-[76px] xl:leading-[76px] text-white font-black mb-[32px]">
                  <span className="">Real World Success,</span> <br />
                  <span className="relative w-[200px] text-[white]">
                    <span
                      className={`absolute whitespace-nowrap transform inline-block transition ease-in-out duration-[300ms] ${
                        isFading
                          ? "translate-y-[-100%] opacity-[0%]"
                          : "translate-y-[0%] opacity-[100%]"
                      }`}
                      key={currentText}
                    >
                      <span className="bar">{texts[currentText]}</span>
                      <span className="dot">
                        .<span className="ripple"></span>
                      </span>
                    </span>
                    <span
                      className={`text-[]  whitespace-nowrap absolute inline-block transform transition ease-in-out duration-[300ms] ${
                        isFading
                          ? "translate-y-[0%] opacity-[100%]"
                          : "opacity-0 translate-y-[100%]"
                      }`}
                      key={nextText}
                    >
                      <span className="bar">{texts[nextText]}</span>
                      <span className="dot">
                        .<span className="ripple"></span>
                      </span>
                    </span>
                    <span className="invisible">
                      .<span className="ripple"></span>
                    </span>
                  </span>
                </h1>
                <div>
                  <h4 className="text-[20px] text-white font-semibold mb-[12px] uppercase">
                    Your Future Starts Now.
                  </h4>
                  <div className="flex flex-col gap-[16px] items-start">
                    <Filters
                      uniqueCredentials={uniqueCredentials}
                      uniqueCredentialTypes={uniqueCredentialTypes}
                      setUniqueCredentialTypes={setUniqueCredentialTypes}
                      selectedCredentialTypes={selectedCredentialTypes}
                      setSelectedCredentialTypes={setSelectedCredentialTypes}
                      handleCredentialTypeChange={handleCredentialTypeChange}
                      uniqueProgramAreas={uniqueProgramAreas}
                      uniquePlanNames={uniquePlanNames}
                      setSelectedSector={setSelectedSector}
                      selectedSector={selectedSector}
                      setUniqueSectors={setUniqueSectors}
                      uniqueSectors={uniqueSectors}
                      selectedCredential={selectedCredential}
                      setSelectedCredential={setSelectedCredential}
                      selectedArea={selectedArea}
                      setSelectedArea={setSelectedArea}
                      selectedPlan={selectedPlan}
                      setSelectedPlan={setSelectedPlan}
                      programs={academicPlans}
                      searchQuery={searchQuery}
                      backgroundColor={"dark"}
                      showExplore={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;
