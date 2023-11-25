import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import HeroSearch from "./components/HeroSearch";
import HeroRfi from "./components/HeroRfi";
import Header from "./components/Header";
import DynamicSections from "./DynamicSections";
import VideoBlockSlider from "./components/VideoBlockSlider";

function TuitionAndCost() {
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
        <HeroSearch title="Tuition & Costs" highlighted="" />
      </div>
      <DynamicSections title="Explore Tuition & Cost" contentset="tuition" />
      <div className="aspect-video w-full relative">
        <VideoBlockSlider
          videoUrls={videoUrls}
          captions={captions}
          delay={delay}
        />
      </div>

      <Testimonial />
    </>
  );
}

export default TuitionAndCost;
