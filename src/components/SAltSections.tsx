import React from "react";
import Button from "../components/Button";

function Section({
  title,
  heading,
  headingHighlight,
  description,
  imgSrc,
  imgAlt,
  buttonLabel,
  buttonHref,
  reverse,
}) {
  return (
    <div
      className={`flex pt-[16px] flex-col mx-auto lg:justify-center lg:items-center  ${reverse ? "lg:flex-row-reverse" : "lg:flex-row "} gap-[32px] lg:gap-[56px]`}
    >
      <div className="w-full lg:w-[50%]">
        <div className="flex flex-col items-center gap-[32px]">
          <div className="text-center lg:text-left has-bar">
            <span className="hidden text-[#00467f] inline-block text-[20px] mb-[16px] font-[600]">
              {title}
            </span>
            <h1 className="text-[39px] leading-[44px] lg:text-[61.04px] lg:leading-[64px] mb-[24px] lg:mb-[24px] font-[800] text-[#00467f] has-bar">
              {heading}&nbsp;
              {headingHighlight && (
                <>
                  <span className="bar">{headingHighlight}</span>
                  <span className="dot">.</span>
                </>
              )}
            </h1>
            <div className="flex w-full justify-center items-center relative mb-[32px] lg:hidden">
              <div className="w-[320px] h-[320px] overflow-hidden rounded-full">
                <div className="w-full lg:w-[90%] h-full absolute left-1/2 -translate-x-1/2">
                  <div className="flex flex-col w-full h-full justify-between">
                    <div className="flex flex-row items-start w-full justify-between">
                      <div className="p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#FBBF24] group transition ease-in-out duration-[250ms]">
                        <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                          Tuition
                          <br />
                          $186/credit hour
                        </span>
                      </div>
                      <div className="mt-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#47C8FF] group transition ease-in-out duration-[250ms]">
                        <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                          Tuition
                          <br />
                          $186/credit hour
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="ml-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#47C8FF] group transition ease-in-out duration-[250ms]">
                        <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                          Tuition
                          <br />
                          $186/credit hour
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-full h-full object-cover"
                  src={imgSrc}
                  alt={imgAlt}
                />
              </div>
            </div>
            <p className="text-[17.5px] leading-[24px] lg:text-[20px] lg:leading-[32px] text-[#00467f]">
              {description}
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <Button
              label={buttonLabel}
              size=""
              type="primary"
              href={buttonHref}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] hidden lg:block">
        <div className="flex w-full justify-center items-center relative">
          <div className="w-[400px] h-[400px] overflow-hidden rounded-full">
            <div className="w-full lg:w-[90%] h-full absolute left-1/2 -translate-x-1/2">
              <div className="flex flex-col w-full h-full justify-between">
                <div className="flex flex-row items-start w-full justify-between">
                  <div className="p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#FBBF24] group transition ease-in-out duration-[250ms]">
                    <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                      Tuition
                      <br />
                      $186/credit hour
                    </span>
                  </div>
                  <div className="mt-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#47C8FF] group transition ease-in-out duration-[250ms]">
                    <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                      Tuition
                      <br />
                      $186/credit hour
                    </span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="ml-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#47C8FF] group transition ease-in-out duration-[250ms]">
                    <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                      Tuition
                      <br />
                      $186/credit hour
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-full h-full object-cover"
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AltSections({ sections }) {
  return (
    <div className="flex flex-col gap-[48px] lg:gap-[56px]">
      {sections.map((section, index) => (
        <div
          key={index}
          className="px-[24px] lg:px-[0] container mx-auto pb-[64px] lg:pb-[96px] border-b-[1px] border-[#f3f3f3]"
        >
          <Section
            title={section.title}
            heading={section.heading}
            headingHighlight={section.headingHighlight}
            description={section.description}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
            buttonLabel={section.buttonLabel}
            buttonHref={section.buttonHref}
            reverse={index % 2 === 1}
          />
        </div>
      ))}
    </div>
  );
}

export default AltSections;
