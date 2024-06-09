import React from "react";
import Search from "./Search";
import { InView } from "react-intersection-observer";

function ExplorePrograms() {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div className="py-[56px] lg:pt-[72px] lg:pb-[72px] bg-[#005cb8] relative">
          <div className="container mx-auto px-[24px] lg:px-0">
            <div className="flex flex-col lg:flex-row items-end gap-[32px] lg:gap-[64px]">
              <div className="w-full lg:w-1/2">
                <h1 className="text-[48.8px] leading-[52px] lg:text-[61.04px] lg:leading-[64px] font-[800] text-white mb-[16px] lg:mb-[24px] has-bar">
                  Something for{" "}
                  <span
                    className={`text-[] adjusted-e bar  transform transition ease-in-out duration-[300ms] `}
                  >
                    <span
                      className={`transform  transition inline-block ease-in-out duration-[450ms] ${inView ? "translate-y-[100px] opacity-[0]" : "translate-y-[0px] opacity-[1] "}`}
                    >
                      Everyone
                    </span>
                  </span>
                  <span className="dot">.</span>
                </h1>
                <p className="text-[20px] leading-[32px] lg:text-[25px] lg:leading-[36px] text-white font-semibold">
                  We’ve been expanding our online offerings for years, and our
                  programs are all designed to help you land an in-demand,
                  high-paying job. So, what are you waiting for?
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Search />
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}

export default ExplorePrograms;
