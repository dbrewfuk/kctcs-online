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
      className={`w-100 p-3 z-3 ${scrolled ? "fixed-top" : "position-absolute"}`}
      style={{ background: scrolled ? "white" : "transparent" }}
    >
      <div className="">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <a className="py-2 px-3 bg-primary text-white" href="/">
              Logo
            </a>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <nav className="d-lg-flex gap-3 align-items-center d-none">
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/admissions">Admissions</a>
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/tuition-and-cost">Tuition &amp; Cost</a>
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/programs">Programs</a>
              <a className={`${scrolled ? "text-info" : "text-white"}`} href="/student-support-services">Student Support Services</a>
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
