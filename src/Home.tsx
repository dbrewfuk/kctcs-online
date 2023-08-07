import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./testimonial";
import SearchHome from "./search-home";
import Header from "./header";

function Home() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
    window.location.href = `/programs?search=${searchQuery}`;
  };

  return (
    <>
    <Header/>


    <div className="">
     <div className="ratio ratio-21x9 bg-primary vh-100">
    <video src="https://www.dropbox.com/s/sd90kljtxqp68dg/background-video.mp4?raw=1" className="object-fit-cover" autoPlay></video>
    <div className="py-5 d-flex align-items-end">
   
    <SearchHome />
    

    </div>

    </div>

    </div>

    
   

    <div className="py-5">
    <div className="container">
    <div className="d-flex flex-column flex-md-row gap-4">
    <div className="w-100">
    <h1>Start Your Future Now.</h1>
    <p className="h3 mb-4">Learn from anywhere in the world. Whether you’re interested in a certificate or a degree, our online programs will prepare you to thrive in a high-demand field.</p>
  
    <div><a className="btn btn-secondary" href="">Learn More</a></div>

    </div>
    <div className="w-100 w-md-25">
    <div className="ratio ratio-4x3">
    <img className="object-fit-cover" src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"/>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="py-5">
    <div className="container">
    <div className="d-flex flex-column flex-md-row gap-4">
    <div className="w-100 w-md-25">
    <div className="ratio ratio-4x3">
    <img className="object-fit-cover" src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"/>
    </div>
    </div>
    <div className="w-100">
    <p className="h3 mb-4">With 16 colleges and more than 70 campuses, KCTCS is a community where you’ll find confidence, collaboration and success. As an online student, you’ll enroll in the college that offers your program of choice. But whichever college you choose, you’ll experience the same high-quality education and welcoming attitude.</p>
  
    <div><a className="btn btn-secondary" href="">Learn More</a></div>

    </div>
    
    </div>
    </div>
    </div>


        <div className="py-5">
    <div className="container">
    <div className="d-flex flex-column flex-md-row gap-4">
    <div className="w-100">
    <p className="h3 mb-4">When you study with KCTCS Online, you get the same powerful credential as our on-campus students – but on your own schedule and without the commute. Whether you want to complete your degree online, transfer to a four-year program or earn a work-ready certificate, we’ll help you reach your goals.</p>
  
    <div><a className="btn btn-secondary" href="">Learn More</a></div>

    </div>
    <div className="w-100 w-md-25">
    <div className="ratio ratio-4x3">
    <img className="object-fit-cover" src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"/>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="py-5"><div className="container"><div className="d-flex flex-column flex-sm-row gap-4"><div className="flex-fill w-100 w-md-33 d-flex flex-column gap-3"><div className=""><div className="ratio ratio-4x3"><img className="img-fluid object-fit-cover" src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"/></div></div><div className=""><div className="d-flex flex-column"><h3>Admissions</h3><p>Applying to KCTCS Online is easy, and we’ll be with you at every step of the way. So let’s get this journey started!</p><div className="btn btn-primary">Learn How to Apply</div></div></div></div><div className="flex-fill w-100 w-md-33 d-flex flex-column gap-3"><div className=""><div className="ratio ratio-4x3"><img className="img-fluid object-fit-cover" src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"/></div></div><div className=""><div className="d-flex flex-column"><h3>Tuition &amp; Costs</h3><p>Concerned about paying for your online education? We’ve got you covered. We have the lowest tuition in Kentucky, and online students are eligible for a wide array of scholarships and financial aid.</p><div className="btn btn-primary">Learn About Paying For College</div></div></div></div><div className="flex-fill w-100 w-md-33 d-flex flex-column gap-3"><div className=""><div className="ratio ratio-4x3"><img className="img-fluid object-fit-cover" src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=4288&amp;q=80"/></div></div><div className=""><div className="d-flex flex-column"><div><h3>Student Support Services</h3><p>Concerned about paying for your online education? We’ve got you covered. We have the lowest tuition in Kentucky, and online students are eligible for a wide array of scholarships and financial aid.</p></div><div className="btn btn-primary">Explore Resources</div></div></div></div></div></div></div>





     <Testimonial/>
  
    </>
  );
}

export default Home;