import React from "react";
import Testimonial from "./testimonial";
import Search from "./search";
import Header from "./header";

function CurrentStudents() {

  return (
    <div className="text-secondary-navy">
    <Header/>

   {/* Hero */}
    <div>
      
    <div className="pt-5 pb-4 bg-info">
    <div className="container">
    <h1 className="display-1 mt-5 pt-5 text-white">Current Students</h1>
    </div>
    </div>
    <div className="container-fluid px-3 pb-4 bg-info pb-3">
    
    </div>
    </div>

{/* Intro */}
    <div className="py-5">
      <div className="container">
        <div className="row">
        <div className="col">
          <p className="h2 mb-4">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.</p>
          
          <div className="d-inline-block"><a className="btn btn-shadow">Learn More</a></div>
        </div>
        
        </div>
      </div>
    </div>

   {/* Card Row */}
    <div className="pb-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Card Title</h3>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Learn More</a></div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Card Title</h3>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Learn More</a></div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Card Title</h3>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Learn More</a></div>
            </div>
          </div>
        </div>
         <div className="row">
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Card Title</h3>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Learn More</a></div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Card Title</h3>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Learn More</a></div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border rounded-3 hover-shadow">
              <h3>Card Title</h3>
              <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.</p>
              <div className="d-inline-block"><a className="btn btn-shadow">Learn More</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Testimonial/>
    <Search/>
    </div>
  );
}

export default CurrentStudents;