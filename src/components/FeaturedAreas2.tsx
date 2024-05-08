import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProgramResults from "./ProgramResults";
import ProgramResultCards from "./ProgramResultsCards";

const FeaturedAreasList2 = ({ handleProgramAreaClick, academicPlans }) => {
  const history = useHistory();
  const [selectedArea, setSelectedArea] = useState("");
  const [uniquePlanNames, setUniquePlanNames] = useState([]);
  const [filteredAcademicPlans, setFilteredAcademicPlans] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState([]);

  const cardData = [
    {
      id: 1,
      image: "./assets/as1.jpeg",
      title: "Paralegal",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
    {
      id: 3,
      image: "./assets/as3.jpeg",
      title: "Criminal Justice",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
    {
      id: 4,
      image: "./assets/as4.jpeg",
      title: "Medical Information Technology",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
    {
      id: 5,
      image: "./assets/as5.jpeg",
      title: "Interdisciplinary Early Childhood Education",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
    {
      id: 8,
      image: "./assets/as8.jpeg",
      title: "Human Services",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
    {
      id: 9,
      image: "./assets/as4.jpeg",
      title: "Visual Communications Multimedia",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
    {
      id: 12,
      image: "./assets/as2.jpeg",
      title: "Unmanned Systems Technology",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
    {
      id: 13,
      image: "./assets/as1.jpeg",
      title: "Marine Technology",
      content:
        "At KCTCS, we recognize that each student has individual needs and aspirations. That's why we provide adaptable scheduling choices, such as online and hybrid classes, to fit your hectic schedule.",
    },
  ];

  useEffect(() => {
    // Filter the academic plans based on the search query, selected filters, etc.
    const filteredPlans = academicPlans.filter((plan) => {
      const matchesFilters = !selectedArea || plan.area === selectedArea;
      // Consider the selected sector filter

      return matchesFilters;
    });

    // Update the filtered academic plans state
    setFilteredAcademicPlans(filteredPlans);
  }, [selectedArea, selectedPlan, academicPlans]);

  return (
    <div className="">
      <div className="flex flex-row flex-wrap">
        {cardData.map((card) => (
          <div
            className={`w-full relative group border-l-[2px] border-[#fdd000] transition ease-in-out cursor-pointer ${
              selectedFilters.includes(card.title) ? "selected" : ""
            }`}
            key={card.id}
            onClick={() => {
              setSelectedArea(card.title);
              handleProgramAreaClick(card.title);
            }}
          >
            <div
              className={` flex flex-col transition-all border-l-[4px] ease-in-out text-[#00467F] duration-[250ms] w-full h-full justify-center p-[20px]  ${selectedArea === card.title ? "bg-[#f5f5f5] border-[#fdd000]" : " bg-[white] border-[transparent] hover:bg-[#f3f3f3]"}`}
            >
              <h1 className="text-[20px] whitespace-wrap font-semibold">
                {card.title}
              </h1>
              {selectedArea === card.title && (
                <>
                  <p className="text-[16px] text-[#00467F] mt-[8px] ">
                    {card.content}
                  </p>{" "}
                  <div className="lg:hidden mt-[24px]">
                    <ProgramResults
                      key={selectedArea}
                      academicPlans={academicPlans}
                      filteredAcademicPlans={filteredAcademicPlans}
                      showCount={false}
                      darkBg={true}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAreasList2;
