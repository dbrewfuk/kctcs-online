import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProgramResults from "./ProgramResults";
import Button from "./Button";

const FeaturedAreasList2 = ({
  handleProgramAreaClick,
  academicPlans,
  setAcademicPlans,
}) => {
  const history = useHistory();

  const [uniquePlanNames, setUniquePlanNames] = useState([]);
  const [filteredAcademicPlans, setFilteredAcademicPlans] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState([]);

  const cardData = [
    {
      id: 1,
      image:
        "https://gateway.kctcs.edu/education-training/media/images/paralegal-technology.png",
      title: "Paralegal",
      content:
        "Become a vital part of the legal team by assisting lawyers, law offices, corporations and the courts to defend and prosecute the law, and administer justice.",
    },
    {
      id: 3,
      image:
        "https://webassets.kctcs.edu/images/global/education-training/criminal-justice-gateway.jpeg",
      title: "Criminal Justice",
      content:
        "Serve your community while promoting public safety. Our degree and certificate programs prepare for you for police, corrections, or security careers.",
    },
    {
      id: 4,
      image:
        "https://southcentral.kctcs.edu/_resources/images/Homepage/medical-information-technology.jpg",
      title: "Medical Information Technology",
      content:
        "Connect your people skills with technical know-how for administrative work in the medical field, including coding, transcription and billing. ",
    },
    {
      id: 5,
      image: "./assets/as5.jpeg",
      title: "Interdisciplinary Early Childhood Education",
      content:
        "Inspire a love of learning. You’ll learn about children's growth from birth through age five and prepare to work in preschools, Head Start programs or childcare centers.",
    },
    {
      id: 8,
      image:
        "https://jefferson.kctcs.edu/education-training/program-finder/media/hero/human-services-hero.jpg",
      title: "Human Services",
      content:
        "Affect change through meaningful work helping people in need. Our programs train you for careers in social, community, education and mental health services.",
    },
    {
      id: 9,
      image: "./assets/as4.jpeg",
      title: "Visual Communication Multimedia",
      content:
        "Learn the art of animation, audio/video production, web design and graphic design.",
    },
    {
      id: 12,
      image:
        "https://hazard.kctcs.edu/education-training/media/2019/45480453_2160136080927272_6828600132049567744_o.jpg",
      title: "Unmanned Systems Technology",
      content:
        "Soar to new heights in your career!  Drone technology is one of the fastest growing sectors of the economy. ",
    },
    {
      id: 13,
      image:
        "https://westkentucky.kctcs.edu/education-training/media/images/programs/marine-technology/marine-technology.jpg",
      title: "Marine Technology",
      content:
        "Rock the boat with the technical training you need to advance as a professional mariner.",
    },
  ];

  const handleApplyClick = (buttonText) => {
    const queryParams = new URLSearchParams();
    queryParams.append("area", buttonText);
    const queryString = queryParams.toString();
    window.location.href = `/explore-programs.html?${queryString}`;
  };

  const [selectedArea, setSelectedArea] = useState("");

  return (
    <div className="overflow-x-auto w-full noscrollbar ">
      <div className="flex flex-row w-[calc(200%+8px)] gap-[24px] items-start snap-center snap-x noscrollbar overflow-x-auto transform">
        {cardData.map((card) => (
          <div
            className={`w-full min-w-[320px] border-[8px] mr-[-8px] group min-h-[320px] bg-[#f3f3f3] snap-center noscrollbar transition ease-in-out duration-[250ms] relative group order-[2] transition ease-in-out cursor-pointer ${
              selectedArea.includes(card.title)
                ? "shadow-[0_4px_8px_rgba(0,0,0,0.15)] border-[#FBBF24]"
                : "bg-[#f3f3f3] border-white"
            }`}
            key={card.id}
            onClick={() => {
              setSelectedArea(card.title);
              handleProgramAreaClick(card.title);
            }}
            tabIndex={0}
            role="button"
            aria-pressed={selectedFilters.includes(card.title)} // Indicate if the button is "pressed"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                // Add spacebar key support
                setSelectedArea(card.title);
                handleProgramAreaClick(card.title);
              }
            }}
            aria-label={`Select ${card.title} program area`}
          >
            <div className="hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
              <div
                className={` flex flex-col transition-all  border-[#f3f3f3]   ease-in-out text-[#00467F] duration-[250ms] w-full h-full  ${
                  selectedArea === card.title
                    ? ""
                    : "border-[transparent] bg-[#f3f3f3]"
                }`}
              >
                {" "}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={card.image}
                    alt="area-photo"
                    className={`transition ease-in-out absolute  group-hover:scale-[1.15]
                     w-full h-full duration-[250ms] object-cover ${selectedArea === card.title ? "scale-[1.15]" : "scale-[1]"}`}
                  />
                </div>
                <div className="p-[24px]">
                  <div className="flex gap-[16px] items-center">
                    <h1 className="text-[20px] whitespace-wrap font-semibold order-[2]">
                      {card.title}
                    </h1>
                    <div className="max-w-[18px] min-w-[18px]">
                      {selectedArea !== card.title ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18 18"
                          fill="#00467f"
                          className="w-full"
                        >
                          <path
                            d="M7.706 18v-7.657H.5V7.62h7.206V0h2.623v7.621H17.5v2.722h-7.17V18z"
                            fillRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18 18"
                          fill="#00467f"
                        >
                          <path
                            d="M.5 10.343V7.62h17v2.722z"
                            fillRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {selectedArea === card.title && (
                    <>
                      <p className="text-[16px] text-[#00467F] mt-[16px] mb-[32px]">
                        {card.content}
                      </p>{" "}
                      <div className="w-full flex justify-center">
                        <Button
                          type="primary"
                          onClick={() => handleApplyClick(card.title)}
                        >
                          Explore Programs
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAreasList2;
