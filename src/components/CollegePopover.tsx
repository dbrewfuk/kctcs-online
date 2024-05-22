import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";

const colleges = [
  { name: "College 1", url: "https://college1.edu/admissions" },
  { name: "College 2", url: "https://college2.edu/admissions" },
  { name: "College 3", url: "https://college3.edu/admissions" },
  { name: "College 4", url: "https://college4.edu/admissions" },
  { name: "College 5", url: "https://college5.edu/admissions" },
  { name: "College 6", url: "https://college6.edu/admissions" },
  { name: "College 7", url: "https://college7.edu/admissions" },
  { name: "College 8", url: "https://college8.edu/admissions" },
  { name: "College 9", url: "https://college9.edu/admissions" },
  { name: "College 10", url: "https://college10.edu/admissions" },
  { name: "College 11", url: "https://college11.edu/admissions" },
  { name: "College 12", url: "https://college12.edu/admissions" },
  { name: "College 13", url: "https://college13.edu/admissions" },
  { name: "College 14", url: "https://college14.edu/admissions" },
  { name: "College 15", url: "https://college15.edu/admissions" },
  { name: "College 16", url: "https://college16.edu/admissions" },
];

const CollegePopover = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  const { styles, attributes } = usePopper(
    buttonRef.current,
    popoverRef.current,
    {
      placement: "bottom-start",
    },
  );

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => setShowPopover(!showPopover)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        View Colleges
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 32 32"
          fill="white"
          className="ml-2"
        >
          <path d="M16.2207 24.8275L0 9.15857L1.54483 7.61374L16.1103 21.8482L30.4552 7.17236L32 8.71719L16.2207 24.8275Z"></path>
        </svg>
      </button>
      {showPopover && (
        <div
          ref={popoverRef}
          style={styles.popper}
          {...attributes.popper}
          className="bg-white border p-[24px] rounded-[4px] shadow-lg z-10"
        >
          <ul className="list-none m-0 p-0">
            {colleges.map((college, index) => (
              <li key={index} className="mb-2">
                <a
                  href={college.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00467F] hover:underline"
                >
                  {college.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollegePopover;
