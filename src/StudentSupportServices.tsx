import { useState } from "react";
import Testimonial from "./testimonial";
import Search from "./search";
import HeaderInterior from "./header-interior";

const colleges = [
  { name: "Select a College", url: "" },
  { name: "College 1", url: "" },
  { name: "College 2", url: "" },
  { name: "College 3", url: "" },
];

interface CardData {
  [key: string]: { title: string; content: string; img: string }[];
}

const cardData = {
  "Select a College": [],
  "College 1": [
    {
      title: "Card Title 1",
      content: "Card Content 1",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 2",
      content: "Card Content 2",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 3",
      content: "Card Content 3",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
  ],
  "College 2": [
    {
      title: "Card Title 4",
      content: "Card Content 4",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 5",
      content: "Card Content 5",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 6",
      content: "Card Content 6",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
  ],
  "College 3": [
    {
      title: "Card Title 7",
      content: "Card Content 7",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 8",
      content: "Card Content 8",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"
    },
    {
      title: "Card Title 9",
      content: "Card Content 9",
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


    <div className="pt-5 pb-5">
    <div className="container">
    <h1 className="display-1 mt-5">Student Support Services</h1>
    </div>
    </div>
    <div className="container-fluid px-3">
    <div className="ratio ratio-16x9 bg-primary">
    <img className="object-fit-cover" src="./assets/header.jpeg" alt="Placeholder Image"/>
    </div>
    </div>
   


    <div className="py-5">
      <div className="container">
        <div className="row">
        <div className="col">
       
          <p className="h3 mb-3">Your success is our top priority. That’s why we offer so many resources to help you succeed. Need help choosing classes or understanding an assignment? Connect online with advisors or tutors. Want to get involved in student life? Join an online club or student organization. Whatever you need, we’re here to support you at each step of the way. Resources vary from one college to the next, so check your college’s website to see what’s available.</p>
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
                  className="btn btn-secondary"
                  onClick={() => (window.location.href = selectedCollege.url)}
                  disabled={selectedCollege.name === "Select a College"}
                >
                  Visit Website
                </button>
                </div>
              </div>

        </div>
       
        </div>
      </div>
    </div>


    <div className="py-5">
        <div className="container">
          <div className="row">
            {collegeCards.slice(0, 3).map((card: any) => (
              <div className="col" key={card.title}>
                <div>
                  <div className="ratio ratio-4x3 mb-2">
                    <img className="object-fit-cover" src={card.img} />
                  </div>
                  <h3>
                    {selectedCollege.name} {card.title}
                  </h3>
                  <p className="mb-3">{card.content}</p>
                  <div className="btn btn-primary">Learn More</div>
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