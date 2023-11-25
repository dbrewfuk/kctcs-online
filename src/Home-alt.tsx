import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import HeroSearch from "./components/HeroSearch";
import Search from "./components/Search";
import HeroRfi from "./components/HeroRfi";
import Header from "./components/Header";
import DynamicSections from "./DynamicSections";
import VideoBlockSlider from "./components/VideoBlockSlider";
import InterestGrid from "./components/InterestGrid";
import VideoSlider from "./components/VideoSlider";

function Home() {
  const videoUrls = [
    "https://player.vimeo.com/video/665275644?background=1&autoplay=1&loop=1&byline=0&title=0",
    "https://player.vimeo.com/video/678281924?background=1&autoplay=1&loop=1&byline=0&title=0",
  ];
  const captions = [
    "Bluegrass Community & Technical College",
    "West Kentucky Community & Technical College",
  ];
  const delay = 20000;

  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
    window.location.href = `/programs?search=${searchQuery}`;
  };

  return (
    <>
      <Header />
      <div className="relative">
        <HeroSearch
          title="Real World Success, Anywhere."
          highlighted="Anywhere."
        />
      </div>
      <div className="py-[64px] lg:py-[96px] bg-blue-900 relative">
        <div className="container mx-auto px-8 lg:px-0">
          <div className="flex flex-col lg:flex-row items-end gap-[48px] lg:gap-[64px]">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-5">
                Explore KCTCS Online
              </h1>
              <p className="text-xl lg:text-2xl text-white">
                Applying to KCTCS Online is easy, and we’ll be with you at every
                step of the way. So let’s get this journey started!
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Search />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-50 translate-y-full -translate-x-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="142"
            height="56"
            viewBox="0 0 142 71"
            fill="#005CB8"
            className="fill-blue-900"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.578613 0L71 70.4214L141.421 0H0.578613Z"
              fill="#005CB8"
            />
          </svg>
        </div>
      </div>
      <VideoSlider />

      <div className="">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                src="./assets/as3.jpeg"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-8 lg:p-[96px] flex flex-col h-full justify-center align-items-center">
              <h1 className="text-4xl lg:text-5xl font-semibold text-blue-900 mb-3">
                Admissions
              </h1>
              <p className="text-l lg:text-xl text-blue-900 mb-8">
                Applying to KCTCS Online is easy, and we’ll be with you at every
                step of the way. So let’s get this journey started!
              </p>
              <div className="text-center lg:text-left">
                <div className="text-xl rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-blue-900 text-white py-3 font-semibold px-8 hover:bg-white hover:text-blue-900 hover:border-blue-900">
                  Learn How to Apply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:order-2">
            <div className="aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                src="./assets/as2.jpeg"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-8 lg:p-[96px] flex flex-col h-full justify-center align-items-center">
              <h1 className="text-4xl lg:text-5xl font-semibold text-blue-900 mb-4">
                Tuition &amp; Cost
              </h1>
              <p className="text-l lg:text-xl text-blue-900 mb-8">
                Get a better education without breaking the bank. Here’s how.
              </p>
              <div className="text-center lg:text-left">
                <div className="text-xl rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-blue-900 text-white py-3 font-semibold px-8 hover:bg-white hover:text-blue-900 hover:border-blue-900">
                  Learn About Paying for College
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                src="./assets/as1.jpeg"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-8 lg:p-[96px] flex flex-col h-full justify-center align-items-center">
              <h1 className="text-4xl lg:text-5xl font-semibold text-blue-900 mb-4">
                Student Support Services
              </h1>
              <p className="text-l lg:text-xl text-blue-900 mb-8">
                From online tutoring to technical support, we’re here to support
                your success.
              </p>
              <div className="text-center lg:text-left">
                <div className="text-xl rounded-full border inline-block transition ease-in-out text-center cursor-pointer width-auto bg-blue-900 text-white py-3 font-semibold px-8 hover:bg-white hover:text-blue-900 hover:border-blue-900">
                  Explore Resources
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InterestGrid />
    </>
  );
}

export default Home;
