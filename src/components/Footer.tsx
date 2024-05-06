import React, { useState, useEffect } from "react";

const Footer = ({ showModal, setShowModal }) => {
  const handleRequestButtonClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="bg-[#005CB8]">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full justify-end">
            <div className="p-[24px] pt-[56px] py-[48px] lg:p-[96px] lg:pb-[72px] lg:pr-[64px]">
              <h1 className="text-[56px] lg:text-[61.04px] mb-[16px] leading-[64px] text-white font-[800]">
                Real World Success, <span className="bar">Anywhere</span>
                <span className="dot">.</span>
              </h1>
              <p className="text-[17.5px] text-white">
                At KCTCS, we recognize that each student has individual needs
                and aspirations. That's why we provide adaptable scheduling
                choices.
              </p>
            </div>
          </div>
          <div className="relative w-full group overflow-hidden">
            <div className="absolute w-full z-[2] h-full flex flex-col gap-[8px] justify-center items-center">
              <div className="rounded-full inline-block bg-white text-[#00467F] hover:bg-[#00467F] hover:text-white transition ease-in-out duration-[250ms] py-[16px] px-[48px] text-[17.5px] font-semibold cursor-pointer">
                Request Information
              </div>
              <div className="rounded-full inline-block bg-transparent text-[white] transition ease-in-out duration-[250ms] py-[16px] px-[48px] text-[17.5px] font-semibold cursor-pointer">
                Explore Programs
              </div>
            </div>
            <div className="w-full h-full relative z-1 aspect-video">
              <img
                className="w-full group-hover:scale-110 transition ease-in-out duration-[250ms] h-full absolute z-1 object-cover"
                src="./src/assets/admissions.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
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
        <footer className="pt-[64px] lg:pt-[96px] pb-[64px] bg-amber-400">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center gap-8 lg:mb-[64px]">
                <h1 className="text-[56px] lg:text-[76px] text-center text-[#00467F] font-black">
                  Start Your Journey Today.
                </h1>
                <div className="flex gap-2 items-center">
                  <div
                    className="bg-[#00467F] text-[17.5px] transition ease-in-out duration-[250ms] hover:bg-white cursor-pointer hover:text-[#00467F] border-[#00467F] border font-semibold text-white rounded-full py-[16px] px-[48px]"
                    onClick={handleRequestButtonClick}
                  >
                    Request Information
                  </div>
                  <div className="font-semibold text-[17.5px]  py-[16px] px-[48px] text-[#00467F]">
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
    </>
  );
};

export default Footer;
