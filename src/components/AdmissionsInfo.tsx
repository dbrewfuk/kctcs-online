import React, { useState } from "react";

function AdmissionsInfo() {
  const [selectedTab, setSelectedTab] = useState("");

  const tabs = [
    {
      name: "First-time Freshman",
      description:
        "Never attended college before? This is where you start. You've got this!",
      url: "",
    },
    {
      name: "First-time Freshman",
      description:
        "Never attended college before? This is where you start. You've got this!",
      url: "",
    },
    {
      name: "First-time Freshman",
      description:
        "Never attended college before? This is where you start. You've got this!",
      url: "",
    },
    // ... more options
  ];
  return (
    <>
      <div className="pt-[0px] lg:pt-[80px] lg:pb-[96px]">
        <div className="flex flex-col">
          <div className="relative w-full group overflow-hidden">
            <div className="container mx-auto px-[24px] lg:px-0 flex items-center mb-[40px] lg:mb-[52px] w-full">
              <h1 className="text-[48.8px] leading-[52px] whitespace-wrap w-[50%] lg:text-[61.04px] lg:leading-[64px] text-[#00467F] font-[800]">
                Let's Get&nbsp;
                <span className="">
                  <span className="bar"> Started</span>
                  <span className="dot">.</span>
                </span>
              </h1>
              <div className="absolute right-[24px] z-[-1] lg:relative w-[50%] flex justify-center"></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full">
            <div className="w-full lg:w-[50%] h-full relative z-1 aspect-[16/9] overflow-hidden lg:rounded-tr-[12px] lg:rounded-br-[12px]">
              <img
                className="w-full group-hover:scale-110 transition ease-in-out duration-[250ms] h-full absolute z-1 object-cover"
                src="./src/assets/admissions.jpeg"
              />
            </div>
            <div className="p-[24px] pt-[48px] lg:pt-[56px] py-[48px] lg:pb-[72px] lg:pl-[64px] max-w-[596px]">
              <p className="text-[25px] font-[600] text-[#00467F]">
                Whether you’re a high school student, a returning student or
                just looking to take a class on the side, we are here for you.
                Pick a school to learn more about their admission requirements.
              </p>
              <div className="w-full text-center">
                <a
                  href="/programs"
                  className="text-[17.5px] mt-[32px] lg:mt-[48px] rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-[#00467F] text-white py-[16px] font-semibold px-[48px] hover:bg-white hover:text-[#00467F] hover:border-[#00467F]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-[24px] w-full container mx-auto px-[24px] lg:px-0 pb-[64px] lg:pt-[0] lg:pb-[96px]">
        <div className="flex flex-row justify-center gap-[64px] w-full">
          <div className="flex w-full lg:w-[40%] flex-col order-2">
            <h3 className="text-[31px] leading-[36px] lg:text-[39px] leading-[44px] mb-[32px] font-[800] text-[#00467F]">
              Programs that fit your needs.
            </h3>

            <div className="flex flex-row flex-wrap">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`w-full relative group lg:border-l-[2px] border-[#FBBF24] transition ease-in-out cursor-pointer `}
                  onClick={() => setSelectedTab(index)}
                >
                  <div
                    className={`flex flex-col transition-all ease-in-out text-[#00467F] duration-[250ms] w-full h-full justify-center p-[20px] ${selectedTab === index ? "lg:border-l-[6px] bg-[#f5f5f5] border-[#FBBF24]" : ""}`}
                  >
                    <h1 className="text-[20px] whitespace-wrap font-semibold">
                      {tab.name}
                    </h1>
                    {selectedTab === index && (
                      <div>
                        <p className="text-[16px] text-[#00467F] mt-[8px]">
                          {tab.description}
                        </p>
                        <div className=" mt-[24px]">
                          <a
                            href={tab.url}
                            type="button"
                            className="inline-block hover:bg-[white] border border-[#f3f3f3] transition ease-in-out duration-250 hover:text-[#00467F] hover:border-[#00467F] px-[32px] rounded-full py-[12px] whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer font-semibold bg-[#00467F] text-[white] text-[16px] text-center"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[40%] hidden flex flex-col gap-[24px] lg:flex">
            {tabs.map((_, index) => (
              <div className="flex flex-row gap-[24px]" key={index}>
                <div
                  className={`aspect-[1/1] w-full transition ease-in-out duration-[250ms] ${selectedTab === index ? "border-[6px] bg-[#00467F] border-[#FBBF24]" : "bg-[#FBBF24]"}`}
                  onClick={() => setSelectedTab(index)}
                ></div>
                <div
                  className={`aspect-[1/1] w-full transition ease-in-out duration-[250ms] ${selectedTab === index ? "border-[6px] bg-[#FBBF24] border-[#FBBF24]" : "bg-[#00467F]"}`}
                  onClick={() => setSelectedTab(index)}
                ></div>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default AdmissionsInfo;
