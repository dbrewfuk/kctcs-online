import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Testimonial from "./testimonial";
import SearchHome from "./search-home";
import Header from "./header";
import RequestInformationModal from "./rfi";
import VideoBlock from "./video-block";
import stories from "./stories.json";

function Home() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const featured = stories.filter((story) => story.featured)[0];

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
    <h1 className="display-2 mb-3 text-info">Learn Anywhere, Anytime</h1>
    <p className="h2 mb-4 text-info fw-normal">Looking for a convenient education at an affordable cost? KCTCS Online offers more than 90 online certificate and degree programs, all designed to help you get a better education and a better life.</p>
  
    <div><a className="btn btn-shadow" href="/programs">Explore Online Programs</a></div>

    </div>
   
    </div>
    </div>
    </div>

    <div className="container">
    <div className="ratio ratio-16x9">
        <VideoBlock />
      </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="text-info">A Student Success Story</h1>
            </div>
            <div className="col-6">
            <h1 className="text-info">A Student Success Story</h1>
               <p className="h4 lh-base text-info">
                    {featured.name}, <span className="d-inline-block mr-1">
                    
                    </span>
                   
                    <span className="d-inline-block me-1">
                    <a
                      className="d-inline btn btn-outline-dark"
                      href={`/programs?search=nurse`}
                    >
                      {featured.major}
                    </a> 
                    </span>
                    , {featured.college}, {featured.year}
                  </p>
            </div>
          </div>
        </div>
      </div>
       <div className="section py-5">
        <div className="container">
          <div className="d-flex gap-3">
            {stories.filter((story) => !story.featured).map((story, index) => (

              <div className="col p-3 rounded-3 border hover-shadow d-flex flex-column" key={index}>
              
                <div className="">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column">
                      <div className="ratio ratio-4x3 mb-2">
                        <img className="object-fit-cover rounded-3" src={story.avatar} />
                      </div>
                      <h3>Story Headline</h3>
                      <p>
                        {story.name}
                        <br />
                        {story.major}
                      </p>
                      <div className="d-inline-block"><a
                        className="btn btn-shadow"
                        href={`/stories/${story.id}`}
                        key={story.id}
                      >
                        Read {story.name}'s Story
                      </a></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    <div className="py-5">
    <div className="container">
    <div className="d-flex flex-column flex-md-row gap-5">
    <div className="w-100 w-md-25">
    <div className="ratio ratio-4x3">
    <img className="object-fit-cover media-shadow rounded-3" src="./assets/as2.jpeg"/>
    </div>
    </div>
    <div className="w-100">
    <h1 className="text-info">Start Your Future Now</h1>
    <p className="h3 mb-4 text-info fw-normal">Learn from anywhere in the world. Whether you’re interested in a certificate or a degree, our online programs will prepare you to thrive in a high-demand field.</p>
  
    <div><a className="btn btn-shadow" href="">Request Information</a></div>

    </div>
    
    </div>
    </div>
    </div>


        <div className="py-5">
    <div className="container">
    <div className="d-flex flex-column flex-md-row gap-5">
    <div className="w-100">
    <h1 className="text-info">About KCTCS</h1>
    <p className="h3 mb-4 text-info fw-normal">With 16 colleges and more than 70 campuses, KCTCS is a community where you’ll find confidence, collaboration and success. As an online student, you’ll enroll in the college that offers your program of choice. But whichever college you choose, you’ll experience the same high-quality education and welcoming attitude.</p>
  
    <div><a className="btn btn-shadow" href="">Learn More</a></div>

    </div>
    <div className="w-100 w-md-25">
    <div className="ratio ratio-4x3">
    <img className="object-fit-cover media-shadow rounded-3" src="./assets/as1.jpeg"/>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="py-5">
    <div className="container">
    <div className="d-flex flex-column flex-md-row gap-5">
    <div className="w-100 w-md-25">
    <div className="ratio ratio-4x3">
    <img className="object-fit-cover media-shadow rounded-3" src="./assets/as6.jpeg"/>
    </div>
    </div>
    <div className="w-100">
    <h1 className="text-info">The Value of KCTCS Online</h1>
    <p className="h3 mb-4 text-info fw-normal">When you study with KCTCS Online, you get the same powerful credential as our on-campus students – but on your own schedule and without the commute. Whether you want to complete your degree online, transfer to a four-year program or earn a work-ready certificate, we’ll help you reach your goals.</p>
  
    <div><a className="btn btn-shadow" href="">Learn More</a></div>

    </div>
    
    </div>
    </div>
    </div>

    <div className="pb-5">
    <div className="container">
    <div className="d-flex flex-column flex-sm-row gap-3">
    <div className="flex-fill p-3 border rounded-3 hover-shadow w-100 w-md-33 d-flex flex-column gap-2">
    <div className="">
    <div className="ratio ratio-4x3">
    <img className="img-fluid object-fit-cover rounded-3" src="./assets/admissions.jpeg"/>
    </div>
    </div>
    <div className="">
    <div className="d-flex flex-column">
    <h3 className="text-info">Admissions</h3>
    <p className="text-info mb-2 font-weight-normal">Applying to KCTCS Online is easy, and we’ll be with you at every step of the way. So let’s get this journey started!</p>
    <div class="d-inline-block"><a className="btn btn-shadow" href="./admissions">Learn How to Apply</a></div>
    </div>
    </div>
    </div>
    <div className="flex-fill p-3 border rounded-3 hover-shadow w-100 w-md-33 d-flex flex-column gap-2">
    <div className="">
    <div className="ratio ratio-4x3">
    <img className="img-fluid object-fit-cover rounded-3" src="./assets/tuition-and-cost.jpeg"/>
    </div>
    </div>
    <div className="">
    <div className="d-flex flex-column">
    <h3 className="text-info">Tuition &amp; Costs</h3>
    <p className="text-info mb-2 font-weight-normal">Concerned about paying for your online education? We’ve got you covered. We have the lowest tuition in Kentucky, and online students are eligible for a wide array of scholarships and financial aid.</p>
    <div class="d-inline-block"><a className="btn btn-shadow" href="./tuition-and-cost">Learn About Paying For College</a></div>
    </div>
    </div>
    </div>
    <div className="flex-fill p-3 border rounded-3 hover-shadow w-100 w-md-33 d-flex flex-column gap-2">
    <div className="">
    <div className="ratio ratio-4x3">
    <img className="img-fluid  object-fit-cover rounded-3" src="./assets/student-support.jpeg"/>
    </div>
    </div>
    <div className="">
    <div className="d-flex flex-column">
    <div>
    <h3 className="text-info">Student Support Services</h3>
    <p className="text-info mb-2 font-weight-normal">Concerned about paying for your online education? We’ve got you covered. We have the lowest tuition in Kentucky, and online students are eligible for a wide array of scholarships and financial aid.</p>
    </div>
    <div class="d-inline-block"><a className="btn btn-shadow" href="./student-support-services">Explore Resources</a></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

     <div className="py-5">
    <div className="container">
    <div className="d-flex flex-column flex-md-row gap-4">
    <div className="w-75">
    <h1 className="display-2 mb-3 text-info">What does an online course look like?</h1>
    <p className="h2 mb-4 pb-2 text-info fw-normal mb-4">Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
  
    

    </div>
   
    </div>
    </div>
    <div className="container">
    <div className="ratio ratio-16x9">
        <VideoBlock />

      </div>
      
      </div>

    </div>

    





     <Testimonial/>
  
    </>
  );
}

export default Home;