import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Rfi from "./Rfi";

const Header = ({ showModal, setShowModal }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRequestButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <header
        className={`w-full py-[24px] px-[24px] z-50 bg-blue-900 ${
          scrolled ? "fixed top-0 shadow-sm" : "relative"
        }`}
        style={{ background: scrolled ? "white" : "transparent" }}
      >
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <div>
              <a className="" href="/">
                <img
                  className="h-[32px] lg:h-[48px]"
                  src="./assets/horizontal-logo-light.svg"
                />
              </a>
            </div>
            <div className="flex items-center gap-[24px]">
              {/* Menu Icon */}
              <div
                className={`cursor-pointer font-semibold lg:hidden absolute flex bg-[#00467F] items-centered items-center justify-center bottom-0 right-0 w-[80px] h-full ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
                onClick={handleToggleMobileMenu}
              >
                <svg
                  className="w-[24px] h-[24px] absolute "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="white"
                >
                  <path
                    d="M14.286 18.75v1.786H0V18.75zM25 11.607v1.786H0v-1.786zm0-7.142v2H0v-2z"
                    fill="white"
                  ></path>
                </svg>
              </div>

              <motion.div
                className={`lg:hidden fixed bg-blue-900 text-white top-0 left-0 right-0 bottom-0 h-screen z-90`}
                initial={{ opacity: 1 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  pointerEvents: isMobileMenuOpen ? "auto" : "none",
                }}
              >
                <div
                  className="absolute h-[64px] w-[80px] flex items-center justify-center top-[8px] right-[0]"
                  onClick={handleToggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_211_408)">
                      <path
                        d="M1.64922 0L0 1.65155L14.3496 16.0012L0 30.3508L1.64922 32L15.9988 17.6504L30.3508 32L32 30.3484L17.6504 15.9988L32 1.64922L30.3508 0.0023327L16.0023 14.3519L1.64922 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_211_408">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <motion.div
                  className={`flex flex-col px-[24px] justify-center h-full`}
                  style={{
                    pointerEvents: isMobileMenuOpen ? "auto" : "none",
                  }}
                >
                  {/* mobile menu items */}
                  <motion.a
                    className="text-white font-black text-[48px]"
                    href="/admissions"
                    variants={menuItemVariants}
                    initial="hidden"
                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                  >
                    Admissions
                  </motion.a>
                  <motion.a
                    className="text-white font-black text-[48px]"
                    href="/tuition-and-cost"
                    variants={menuItemVariants}
                    initial="hidden"
                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                  >
                    Tuition &amp; Cost
                  </motion.a>
                  <motion.a
                    className="text-white font-black text-[48px]"
                    href="/programs"
                    variants={menuItemVariants}
                    initial="hidden"
                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                  >
                    Explore Programs
                  </motion.a>
                  <motion.a
                    className="text-white font-black text-[48px]"
                    href="/student-support-services"
                    variants={menuItemVariants}
                    initial="hidden"
                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                  >
                    Student Support Services
                  </motion.a>
                  <motion.a
                    className="text-white font-black text-[48px]"
                    href="/success-stories"
                    variants={menuItemVariants}
                    initial="hidden"
                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                  >
                    Success Stories
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Rest of the code */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
