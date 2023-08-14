import { useState } from "react";
import HeaderInterior from "./header-interior";
import Testimonial from "./testimonial";
import Search from "./search";

const colleges = [
  { name: "Select a College", url: "" },
  { name: "Bluegrass Community & Technical College", url: "" },
  { name: "Jefferson Community & Technical College", url: "" },
  { name: "West Kentucky Community & Technical College", url: "" },
];

const cardData = {
  "Select a College": [],
  "Jefferson Community & Technical College": [
    {
      title: "Enrollment Checklist",
      content: "Whether you’re a high school student, a returning student or just looking to take a class on the side, following these steps will make your admissions experience easy!",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Start Your Application",
      content: "Whether you’re eager to fill out your application today or you’re looking to start your application now and finish it a bit further down the road, you're making a great choice. ",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Admissions Information",
      content: "What Kind Of Student Are You?",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
  ],
  "Bluegrass Community & Technical College": [
    {
      title: "Enrollment Checklist",
      content: "Whether you’re a high school student, a returning student or just looking to take a class on the side, following these steps will make your admissions experience easy!",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Meet Your Admissions Team",
      content: "",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Start Your Application",
      content: "Whether you’re eager to fill out your application today or you’re looking to start your application now and finish it a bit further down the road, you're making a great choice. ",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
  ],
  "West Kentucky Community & Technical College": [
    {
      title: "Card Title 7",
      content: "Card Content 7",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Card Title 8",
      content: "Card Content 8",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
    {
      title: "Card Title 9",
      content: "Card Content 9",
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80",
    },
  ],
};

function Admissions() {
   const [selectedCollege, setSelectedCollege] = useState(colleges[0]);

  const handleCollegeChange = (event: any) => {
    const selectedCollege = colleges.find(
      (college) => college.name === event.target.value
    );
    setSelectedCollege(selectedCollege);
  };

  const collegeCards = cardData[selectedCollege.name];


  return (



    <div className="text-secondary-navy">
    <HeaderInterior/>

    <div>
      
    <div className="pt-5 pb-4 bg-secondary">
    <div className="container">
    <h1 className="display-1 text-info mt-5 pt-5 mb-0">Admissions</h1>
    </div>
    </div>
    <div className="container-fluid bg-secondary px-3 pb-4">
    <div className="ratio ratio-16x9 bg-primary">
    <img className="object-fit-cover media-shadow rounded-3" src="./assets/header.jpeg" alt="Placeholder Image"/>
    </div>
    </div>
    </div>
      <div className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row gap-4">
            <div className="w-100">
              <p className="h2 mb-4">
                Applying to KCTCS Online is easy, and we’re here for you at
                every step of the way. So let’s get this journey started! Each
                college has its own online programs, so the first step is to
                explore programs to see which college offers your choice. Then,
                you’ll apply directly to that college in four simple steps.
              </p>
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
      <Testimonial />
      <Search />
    </div>
  );
}

export default Admissions;