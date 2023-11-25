import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
    window.location.href = `/programs?search=${searchQuery}`;
  };
  return (
    <div>
      <h3 className="text-xl flex gap-4 lg:text-2xl font-semibold text-white mb-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_278_2522)">
              <path
                d="M11.9826 1.81138C10.4939 1.81265 9.032 2.20701 7.74468 2.95458C6.77559 3.51046 5.92643 4.2531 5.24638 5.13947C4.56633 6.02585 4.0689 7.03834 3.78292 8.11831C3.49068 9.19672 3.41528 10.3224 3.56107 11.4301C3.70686 12.5379 4.07096 13.6057 4.63227 14.5718C6.83414 18.3862 11.5664 19.8498 15.4975 18.069L16.9627 17.2237C18.5597 16.0817 19.7083 14.4184 20.2104 12.5204C20.7981 10.3266 20.497 8.03459 19.3611 6.0678C18.2251 4.10101 16.392 2.69455 14.1973 2.10523C13.475 1.91147 12.7304 1.81215 11.9826 1.81138ZM18.911 24L16.3984 19.6478C11.5986 21.9156 5.76339 20.1517 3.06399 15.4775C0.219669 10.5504 1.91274 4.23062 6.83897 1.3855C8.01095 0.705132 9.30614 0.26376 10.6497 0.086885C11.9933 -0.0899901 13.3586 0.00113909 14.6667 0.355007C15.9765 0.702209 17.2045 1.30578 18.2795 2.13079C19.3545 2.95579 20.2551 3.98583 20.9293 5.16129C21.6101 6.3331 22.0517 7.6283 22.2286 8.97193C22.4055 10.3156 22.3141 11.6809 21.9598 12.989C21.3438 15.3144 19.9287 17.3486 17.9626 18.7348L20.4793 23.0943L18.911 24Z"
                fill="#FFD000"
              />
            </g>
            <defs>
              <clipPath id="clip0_278_2522">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span>Search Online Programs</span>
      </h3>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex gap-4 relative">
          <input
            type="text"
            placeholder="Search programs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded-none w-full"
          />

          <button
            type="submit"
            className="text-white absolute right-0 h-full pr-[12px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-right fill-blue-900"
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
  );
};

export default Search;
