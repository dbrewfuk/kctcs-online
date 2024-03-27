import { useEffect, useState } from "react";
import Rfi from "./Rfi";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // add state for mobile menu

  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const handleRequestButtonClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <header
        className={`w-full py-[16px] px-[24px] z-50 bg-blue-900 ${
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
                  src={`${
                    scrolled
                      ? "./public/assets/horizontal-logo-light.svg"
                      : "./public/assets/horizontal-logo-light.svg"
                  }`}
                />
              </a>
            </div>
            <div className="flex items-center gap-[24px]">
              {/* Menu Icon */}
              <div
                className={`font-semibold lg:hidden absolute flex bg-[#00467F] items-centered items-center justify-center bottom-0 right-0 w-[80px] h-[80px] ${
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

              <div
                className={`lg:hidden fixed transition-all ease duration-200 bg-blue-900 text-white top-0 left-0 right-0 bottom-0 h-screen bg-white z-90 ${isMobileMenuOpen ? "opacity-1 z-1" : "opacity-0 hidden"}`}
              >
                <div
                  className="absolute h-[80px] w-[80px] flex items-center justify-center top-0 right-0"
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
                <div className="flex flex-col px-[24px] justify-center h-full">
                  {/* mobile menu items */}
                  <a
                    className="text-white font-black text-[48px]"
                    href="/admissions"
                  >
                    Admissions
                  </a>
                  <a
                    className="text-white font-black text-[48px]"
                    href="/tuition-and-cost"
                  >
                    Tuition &amp; Cost
                  </a>
                  <a
                    className="text-white font-black text-[48px]"
                    href="/programs"
                  >
                    Explore Programs
                  </a>
                  <a
                    className="text-white font-black text-[48px]"
                    href="/student-support-services"
                  >
                    Student Support Services
                  </a>
                  <a
                    className="text-white font-black text-[48px]"
                    href="/current-students"
                  >
                    Current Students
                  </a>
                </div>
              </div>

              <nav className="flex items-center gap-[24px] text-[16px] hidden font-semibold lg:flex fs-5 text-white">
                <a
                  className={`${scrolled ? "" : "text-white"}`}
                  href="/admissions"
                >
                  Admissions
                </a>
                <a
                  className={`${scrolled ? "" : "text-white"}`}
                  href="/tuition-and-cost"
                >
                  Tuition &amp; Cost
                </a>
                <a
                  className={`${scrolled ? "" : "text-white"}`}
                  href="/programs"
                >
                  Explore Programs
                </a>
                <a
                  className={`${scrolled ? "" : "text-white"}`}
                  href="/student-support-services"
                >
                  Student Support Services
                </a>
                <a
                  className={`${scrolled ? "" : "text-white"}`}
                  href="/current-students"
                >
                  Current Students
                </a>
              </nav>
              <div className="flex gap-2">
                <div
                  className="rounded-full transition ease-in-out duration-[250ms] hover:bg-[white] hover:text-[#00467F] hidden text-[16px] lg:block bg-[#00467F] text-white px-[32px] py-[12px] font-semibold px-6"
                  onClick={() => setShowModal(true)}
                >
                  Request Information
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
