import React from "react";

const Footer = () => {
  return (
    <div className="bg-amber-400">
      <div className="color-bar">
        <div className="color-block"></div>
        <div className="color-block"></div>
        <div className="color-block"></div>
        <div className="color-block"></div>
        <div className="color-block"></div>
        <div className="color-block"></div>
        <div className="color-block"></div>
        <div className="color-block"></div>
      </div>
      <footer className="pt-[64px] lg:pt-[128px] pb-[64px] bg-amber-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-8 mb-[96px] lg:mb-[128px]">
              <h1 className="text-7xl lg:text-8xl text-center text-[#00467F] font-black">
                Start Your Journey Today.
              </h1>
              <div className="flex gap-2 items-center">
                <div className="bg-[#00467F] text-[18px] transition ease-in-out duration-[250ms] hover:bg-white cursor-pointer hover:text-[#00467F] border-[#00467F] border font-semibold text-white rounded-full py-[12px] px-[32px]">
                  Request Information
                </div>
                <div className="font-semibold text-xl  py-3 px-7 text-[#00467F]">
                  Explore Programs
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <a className="" href="/">
                <img src="./assets/vertical-logo-dark.svg" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
