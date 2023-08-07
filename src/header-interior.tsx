import { useEffect, useState } from "react";

const HeaderInterior = () => {
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
              <a href="/admissions">Admissions</a>
              <a href="/tuition-and-cost">Tuition &amp; Cost</a>
              <a href="/programs">Programs</a>
              <a href="/student-support-services">Student Support Services</a>
            </nav>
            <div className="d-flex gap-2">
              <div className="btn btn-primary">Request Information</div>
              <div className="btn btn-primary">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderInterior;
