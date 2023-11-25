import React from "react";

const Footer = () => {
  return (
    <footer className="pt-[64px] lg:pt-[128px] pb-[64px] bg-amber-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-8 mb-[96px] lg:mb-[128px]">
            <h1 className="text-7xl lg:text-8xl text-center text-blue-900 font-black">
              Start Your Journey Today.
            </h1>
            <div className="flex gap-2 items-center">
              <div className="bg-blue-900 hover:bg-white cursor-pointer hover:text-blue-900 border-blue-900 border font-semibold text-white rounded-full py-3 px-7">
                Request Information
              </div>
              <div className="font-semibold py-3 px-7 text-blue-900">
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
  );
};

export default Footer;
