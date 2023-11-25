import { useState } from "react";
import HeroSearch from "./components/HeroSearch";
import HeroRfi from "./components/HeroRfi";
import Header from "./components/Header";
import DynamicSections from "./DynamicSections";
import Testimonial from "./components/Testimonial";
import VideoBlockSlider from "./components/VideoBlockSlider";
const videoUrls = [
  "https://player.vimeo.com/video/665275644?background=1&autoplay=1&loop=1&byline=0&title=0",
  "https://player.vimeo.com/video/678281924?background=1&autoplay=1&loop=1&byline=0&title=0",
];
const captions = [
  "Bluegrass Community & Technical College",
  "West Kentucky Community & Technical College",
];
const delay = 20000;

const colleges = [
  { name: "Select a College", url: "" },
  { name: "Bluegrass Community & Technical College", url: "" },
  { name: "Jefferson Community & Technical College", url: "" },
  { name: "Western Kentucky Community & Technical College", url: "" },
];

interface CardData {
  [key: string]: { title: string; content: string; img: string }[];
}

const cardData = {
  "Select a College": [],
  "Bluegrass Community & Technical College": [
    {
      title: "GoKCTCS! Student Service Center",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.1",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Blackboard",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.2",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Help Desk",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
  ],
  "Jefferson Community & Technical College": [
    {
      title: "Student Services Virtual Support",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Student Tips & Resources",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Accessibility Resource Center",
      content:
        "The mission of the Access*Ability Resource Center (ARC) is to ensure program access for students with disabilities on all campuses.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
  ],
  "Western Kentucky Community & Technical College": [
    {
      title: "Card Title 7",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Card Title 8",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.8",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Card Title 9",
      content:
        "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
  ],
};

function StudentSupportServices() {
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);

  const handleCollegeChange = (event: any) => {
    const selectedCollege = colleges.find(
      (college) => college.name === event.target.value,
    );

    setSelectedCollege?.(selectedCollege!);
  };

  const collegeCards = cardData[selectedCollege.name as keyof typeof cardData];
  return (
    <>
      <Header />
      <div className="relative">
        <HeroSearch title="Student Support Services" highlighted="" />
      </div>

      <DynamicSections
        title="Explore Student Support Services"
        contentset="student-support-services"
      />

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

export default StudentSupportServices;
