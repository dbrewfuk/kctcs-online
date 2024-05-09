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
      <div className="pt-[64px] lg:pt-[128px] lg:pb-[96px]">
        <div className="flex flex-col">
          <div className="relative w-full group overflow-hidden">
            <div className="px-[24px] lg:px-[96px] flex items-center mb-[48px] w-full">
              <h1 className="text-[56px] leading-[60px] whitespace-wrap w-[50%] lg:text-[61.04px] mb-[16px] lg:leading-[64px] text-[#00467F] font-[900]">
                Real World Success
                <span className="">
                  <span className="bar"> Anywhere</span>
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
            <div className="p-[24px] pt-[56px] py-[48px] lg:pb-[72px] lg:pl-[64px] max-w-[596px]">
              <p className="text-[25px] font-[600] text-[#00467F]">
                Whether you’re starting college for the first time or thinking
                about a career change, we’ve got you covered. We offer associate
                degrees, diplomas and certificates - and we’re here to help you
                reach your goals. Get started by finding the program that works
                for you!
              </p>
              <div className="w-full">
                <a
                  href="/programs"
                  className="text-[18px] mt-[48px] rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-[#00467F] text-white py-[16px] font-semibold px-[48px] hover:bg-white hover:text-[#00467F] hover:border-[#00467F]"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-[24px] w-full lg:px-[96px] mx-auto pb-[64px] lg:pt-[0] lg:pb-[96px]">
        <div className="flex flex-row justify-end gap-[64px] w-full">
          <div className="flex w-full lg:w-[40%] flex-col">
            <h3 className="text-[31px] leading-[36px] lg:text-[39px] leading-[44px] mb-[32px] font-[800] text-[#00467F]">
              Programs that fit your needs.
            </h3>

            <div className="flex flex-row flex-wrap">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`w-full relative group border-l-[2px] border-[#fdd000] transition ease-in-out cursor-pointer `}
                  onClick={() => setSelectedTab(index)}
                >
                  <div
                    className={`flex flex-col transition-all ease-in-out text-[#00467F] duration-[250ms] w-full h-full justify-center p-[20px] ${selectedTab === index ? "border-l-[6px] bg-[#f5f5f5] border-[#fdd000]" : ""}`}
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
                  className={`aspect-[1/1] w-full transition ease-in-out duration-[250ms] ${selectedTab === index ? "border-[6px] bg-[#00467F] border-[#fdd000]" : "bg-[#fdd000]"}`}
                  onClick={() => setSelectedTab(index)}
                ></div>
                <div
                  className={`aspect-[1/1] w-full transition ease-in-out duration-[250ms] ${selectedTab === index ? "border-[6px] bg-[#fdd000] border-[#fdd000]" : "bg-[#00467F]"}`}
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
