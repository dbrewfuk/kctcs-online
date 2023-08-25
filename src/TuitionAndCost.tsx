import React from "react";
import Testimonial from "./testimonial";
import Search from "./search";
import Header from "./header";

function TuitionAndCost() {

  return (
    <div className="text-secondary-navy">
    <Header/>

   {/* Hero */}
    <div>
      
    <div className="pt-5 pb-4 bg-info">
    <div className="container">
    <h1 className="display-1 mt-5 pt-5 text-white">Tuition and Cost</h1>
    </div>
    </div>
    <div className="container-fluid px-3 pb-4 bg-info pb-3">
    <div className="ratio ratio-16x9 bg-primary">
    <img className="object-fit-cover rounded-3" src="./assets/header-3.jpeg" alt="Placeholder Image"/>
    </div>
    </div>
    </div>

{/* Intro */}
    <div className="py-5">
      <div className="container">
        <div className="row">
        <div className="col">
          <p className="h1 mb-4">Concerned about paying for your online education? We’ve got you covered. We have the lowest tuition in Kentucky, and online students are eligible for a wide array of scholarships and financial aid.</p>
          
          <div className="d-inline-block"><a className="btn btn-shadow">Review Our Costs</a></div>
        </div>
        
        </div>
      </div>
    </div>

   {/* Card Row */}
    <div className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Financial Aid</h3>
              <p>The federal government offers a variety of grants, loans and work-study programs. To apply, you’ll need to start planning early – and we’ll guide you through the process.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Apply for Financial Aid</a></div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Scholarships</h3>
              <p>Looking for free money? Scholarships don’t need to be repaid.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Explore Scholarships</a></div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Important Dates</h3>
              <p>Keep track of the deadlines to make sure you submit your financial aid and scholarship applications on time.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Review the Timeline</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <Search/>
    </div>
  );
}

export default TuitionAndCost;