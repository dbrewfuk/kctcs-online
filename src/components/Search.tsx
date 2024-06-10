import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showInputLabel, setShowInputLabel] = useState(false);

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

  const handlePopularSearchClick = (popularSearch) => {
    setSearchQuery(popularSearch);
    setShowInputLabel(true);
  };

  const handleKeyDown = (event, callback) => {
    if (event.key === "Enter" || event.key === " ") {
      callback(event);
    }
  };

  return (
    <div>
      <h3 className="text-[16px] lg:text-[20px] flex font-[600] text-white mb-[12px]">
        <span>Explore Online Programs</span>
      </h3>
      <div className="relative w-full shadow-[0px_4px_8px_rgba(0,0,0,0.25)]">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-[24px] text-[18px] overflow-hidden rounded-[6px] h-[48px] relative ">
            <span
              className="absolute w-[24px] ml-[12px] left-0"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.811 29.811"
                fill="#00467F"
              >
                <path d="M14.884 2.25A10.5 10.5 0 009.62 3.67a10.49 10.49 0 00-4.921 6.414A10.493 10.493 0 005.754 18.1c2.735 4.738 8.613 6.556 13.496 4.344l1.82-1.05a10.476 10.476 0 004.034-5.842c.73-2.725.356-5.572-1.055-8.015s-3.688-4.19-6.414-4.922a10.66 10.66 0 00-2.751-.364zm8.606 27.561l-3.121-5.406c-5.962 2.817-13.21.626-16.563-5.18-3.533-6.12-1.43-13.97 4.689-17.504a12.74 12.74 0 019.723-1.28 12.727 12.727 0 017.779 5.97 12.73 12.73 0 011.28 9.723 12.717 12.717 0 01-4.965 7.137l3.126 5.415z"></path>
              </svg>
            </span>
            <label htmlFor="searchInput" className="sr-only">
              Search programs
            </label>
            <input
              id="searchInput"
              type="text"
              placeholder="Search programs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowInputLabel(true)}
              className="w-full text-[17.5px] leading-[24px] pl-[48px] py-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] border border-[#00467F] text-[#00467F]"
              aria-label="Search programs"
            />

            {searchQuery && (
              <span
                className="absolute right-[60px] w-[18px] cursor-pointer"
                onClick={() => setSearchQuery("")}
                onKeyDown={(e) => handleKeyDown(e, () => setSearchQuery(""))}
                tabIndex="0"
                role="button"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27.436 27.436"
                  fill="#00467F"
                >
                  <path d="M1.414 0L0 1.416l12.303 12.303L0 26.022l1.414 1.414 12.303-12.303 12.305 12.303 1.414-1.416-12.303-12.303L27.436 1.414 26.022.002 13.72 12.305 1.414 0z"></path>
                </svg>
              </span>
            )}

            <span
              className={`p-[8px] absolute right-0 mr-[8px] rounded-[12px]  cursor-pointer hover:bg-opacity-70 transition ease-in-out duration-[200ms] ${searchQuery ? "transform translate-x-[0px]" : "translate-x-[50px]"} flex items-center`}
              onClick={handleSubmit} // Submit form when the button is clicked
              role="button"
              tabIndex="0"
              aria-label="Submit search"
              onKeyDown={(e) => handleKeyDown(e, handleSubmit)}
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
            </span>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-[8px] lg:gap-[12px] hidden">
        <h4 className="text-[14px] lg:text-[16px] text-white font-[600]">
          Popular Searches
        </h4>
        <ul className="text-white text-[16px] flex gap-[8px] flex-wrap">
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
