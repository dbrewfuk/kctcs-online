import React, { useState, useRef, useEffect } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showInputLabel, setShowInputLabel] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        window.location.href = `/explore-programs.html?search=${encodeURIComponent(searchQuery)}`;
      } catch (error) {
        console.error("Error during navigation:", error);
      }
    }
  };

  const inputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputActive(false);
    }
  };

  useEffect(() => {
    if (inputActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputActive]);

  const handlePopularSearchClick = (popularSearch) => {
    setSearchQuery(popularSearch);
    setShowInputLabel(true);
    document.getElementById("searchInput").focus(); // Focus input after setting the search
  };

  const handleKeyDown = (event, callback) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      callback(event);
    }
  };

  return (
    <div>
      <h3 className="text-[16px] lg:text-[20px] text-center w-full items-center justify-center flex font-[600] text-white mb-[12px]">
        <span>Explore Online Programs</span>
      </h3>
      <div
        className={`relative w-full  w-[calc(100% + 6px)] overflow-hidden relative focus:border-[#fbbf24]`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-[32px] ">
            <label
              htmlFor="searchInput"
              className="absolute w-[24px] ml-[12px] left-0 sr-only"
            >
              Search programs
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.811 29.811"
              fill="#00467F"
              className="absolute w-[24px] ml-[24px] left-0 z-10"
              aria-hidden="true"
            >
              <path d="M14.884 2.25A10.5 10.5 0 009.62 3.67a10.49 10.49 0 00-4.921 6.414A10.493 10.493 0 005.754 18.1c2.735 4.738 8.613 6.556 13.496 4.344l1.82-1.05a10.476 10.476 0 004.034-5.842c.73-2.725.356-5.572-1.055-8.015s-3.688-4.19-6.414-4.922a10.66 10.66 0 00-2.751-.364zm8.606 27.561l-3.121-5.406c-5.962 2.817-13.21.626-16.563-5.18-3.533-6.12-1.43-13.97 4.689-17.504a12.74 12.74 0 019.723-1.28 12.727 12.727 0 017.779 5.97 12.73 12.73 0 011.28 9.723 12.717 12.717 0 01-4.965 7.137l3.126 5.415z"></path>
            </svg>
            <div className="relative w-full border-[8px] focus-within:shadow-[0px_24px_28px_rgba(0,0,0,0.5)] border-transparent focus-within:border-[#fbbf24]  transition duration-200 ease-in-out">
              <input
                useRef="inputRef"
                id="searchInput"
                type="text"
                placeholder="Search programs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setInputActive(true)}
                className="w-full text-[17.5px] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] leading-[24px] overflow-hidden transition ease-in-out duration-250 h-[60px] focus:shadow-[0,0,0,0.0] focus:border-[0] focus:outline-none pl-[48px] py-[12px] text-[#00467F]"
                aria-label="Search programs"
              />
            </div>
            {searchQuery && (
              <button
                type="button"
                className="absolute right-[80px] w-[18px] cursor-pointer"
                onClick={() => setSearchQuery("")}
                onKeyDown={(e) => handleKeyDown(e, () => setSearchQuery(""))}
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27.436 27.436"
                  fill="#00467F"
                >
                  <path d="M1.414 0L0 1.416l12.303 12.303L0 26.022l1.414 1.414 12.303-12.303 12.305 12.303 1.414-1.416-12.303-12.303L27.436 1.414 26.022.002 13.72 12.305 1.414 0z"></path>
                </svg>
              </button>
            )}
            <button
              type="submit"
              className={`p-[8px] absolute right-[8px] mr-[8px] rounded-[12px] bg-[#fbbf24] h-[48px] w-[48px] cursor-pointer hover:bg-opacity-70 transition ease-in-out duration-[300ms] ${
                searchQuery
                  ? "transform translate-x-[-2px]"
                  : "translate-x-[64px]"
              } flex items-center`}
              aria-label="Submit search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="auto"
                fill="#00467F"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-[8px] lg:gap-[12px] mt-[24px]">
        <h4 className="text-[14px] lg:text-[16px] text-center text-white font-[600]">
          Popular Searches
        </h4>
        <ul className="text-white text-[16px] justify-center flex gap-[8px] flex-wrap">
          {["Public Leadership", "Web Design", "Marine Culinary"].map(
            (search) => (
              <li
                key={search}
                className="whitespace-nowrap text-ellipsis overflow-hidden rounded-[3px] px-[16px] py-[8px] font-semibold bg-[#00467F] cursor-pointer"
                onClick={() => handlePopularSearchClick(search)}
                onKeyDown={(e) =>
                  handleKeyDown(e, () => handlePopularSearchClick(search))
                }
                tabIndex="0"
                role="button"
                aria-label={`Search for ${search}`}
              >
                {search}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default Search;
