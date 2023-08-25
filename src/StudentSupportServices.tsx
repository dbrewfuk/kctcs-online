import { useState } from "react";
import Testimonial from "./testimonial";
import Search from "./search";
import HeaderInterior from "./header-interior";

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
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.1",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Blackboard",
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.2",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Help Desk",
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
  ],
  "Jefferson Community & Technical College": [
    {
      title: "Student Services Virtual Support",
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Student Tips & Resources",
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Accessibility Resource Center",
      content: "The mission of the Access*Ability Resource Center (ARC) is to ensure program access for students with disabilities on all campuses.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
  ],
  "Western Kentucky Community & Technical College": [
    {
      title: "Card Title 7",
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 8",
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.8",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 9",
      content: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
  ],
};

function StudentSupportServices() {
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);

  const handleCollegeChange = (event: any) => {
    const selectedCollege = colleges.find(
      (college) => college.name === event.target.value
    );

    setSelectedCollege?.(selectedCollege!);
  };

  const collegeCards = cardData[selectedCollege.name as keyof typeof cardData];
  return (
    <div>
    <HeaderInterior/>


    <div className="pt-5 pb-4 bg-secondary-teal">
    <div className="container">
    <h1 className="display-1 mt-5 pt-4 mt-0 text-info">Student Support Services</h1>
    </div>
    </div>

    <div className="container-fluid px-3 pb-4 bg-secondary-teal">
    
    </div>
   


    <div className="py-5">
      <div className="container">
        <div className="row gap-5">
        <div className="col-6">
       
          <p className="h2 mb-3 fw-normal text-info">Your success is our top priority. That’s why we offer so many resources to help you succeed. Need help choosing classes or understanding an assignment? Connect online with advisors or tutors. Want to get involved in student life? Join an online club or student organization. Whatever you need, we’re here to support you at each step of the way. Resources vary from one college to the next, so check your college’s website to see what’s available.</p>
        <div className="d-flex gap-2">
                <div>
  <button
    type="button"
    className="btn btn-outline-dark dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    {selectedCollege.name}
  </button>
  <ul className="dropdown-menu">
    {colleges.map((college) => (
      <li key={college.name}>
        <a
          className="dropdown-item"
          href={college.url}
          onClick={(e) => { e.preventDefault(); setSelectedCollege(college);}}
        >
          {college.name}
        </a>
      </li>
    ))}
  </ul>
</div>
<div>
                <button
                  className="btn btn-primary"
                  onClick={() => (window.location.href = selectedCollege.url)}
                  disabled={selectedCollege.name === "Select a College"}
                >
                  Visit Website
                </button>
                </div>
              </div>

        </div>
        <div className="col">
          <div className="ratio ratio-4x3">
    <img className="object-fit-cover media-shadow rounded-3" src="./assets/as6.jpeg"/>
    </div>
        </div>
       
        </div>
      </div>
    </div>


    <div className="pb-5">
        <div className="container">
          <div className="row">
            {collegeCards.slice(0, 3).map((card: any) => (
              <div className="col" key={card.title}>
                <div className="p-3 border rounded-3 hover-shadow">
                  
                  <h3>
                    {card.title}
                  </h3>
                  <p className="mb-3">{card.content}</p>
                  <div className="btn btn-shadow">Learn More</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 <Testimonial/>
      <Search/>
    </div>
  );
}

export default StudentSupportServices;