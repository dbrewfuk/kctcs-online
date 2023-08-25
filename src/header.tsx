import { useEffect, useState } from "react";
import SearchNav from "./search-nav";

const Header = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
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
    <header
      className={`w-100 p-3 z-3 ${scrolled ? "fixed-top shadow-sm" : "position-absolute"}`}
      style={{ background: scrolled ? "white" : "transparent" }}
    >
      <div className="">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <a className="" href="/">
              <img src={`${scrolled ? "./assets/horizontal-logo.svg" : "./assets/horizontal-logo-light.svg"}`}/>
            </a>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <nav className="d-lg-flex fs-5 gap-3 align-items-center d-none">
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/admissions">Admissions</a>
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/tuition-and-cost">Tuition &amp; Cost</a>
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/programs">Explore Programs</a>
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/student-support-services">Student Support Services</a>
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/current-students">Current Students</a>
            </nav>
            <div className="d-flex gap-2">
              <div className="btn btn-shadow" onClick={handleRequestButtonClick}>Request Information</div>
  
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
